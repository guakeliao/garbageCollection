/**
 * oldHTML        newHTML
 *    ↓              ↓
 * parseBlocks   parseBlocks
 *    ↓              ↓
 *       LCS 对齐 diff
 *                ↓
 *         BlockDiff[]
 *           ↓        ↓
 *  buildOldResult  buildNewResult
 *           ↓        ↓
 *  oldResultHTML   newResultHTML
 */
//Block & Diff 类型
type DiffType = 'equal' | 'add' | 'delete';

interface Block {
  text: string;
  html: string;
}

interface BlockDiff {
  type: DiffType;
  oldBlock?: Block;
  newBlock?: Block;
}

export function compareRichHTML(
  oldHTML: string,
  newHTML: string,
): { oldHTML: string; newHTML: string } {
  const oldBlocks = parseBlocks(oldHTML);
  const newBlocks = parseBlocks(newHTML);

  const diffs = diffBlocksByLCS(oldBlocks, newBlocks);

  return {
    oldHTML: buildOldHTML(diffs),
    newHTML: buildNewHTML(diffs),
  };
}
//HTML → 段落 Blocks（行级）
function parseBlocks(html: string): Block[] {
  const root = document.createElement('div');
  root.innerHTML = html;

  const blocks: Block[] = [];

  Array.from(root.children).forEach(el => {
    // 图片、表格：直接作为 block，不参与 diff
    if (['IMG', 'TABLE'].includes(el.tagName)) {
      blocks.push({
        text: '',
        html: el.outerHTML,
      });
      return;
    }

    // @ts-ignore
      const text = el.innerText
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // 保留所有元素，包括空元素
    blocks.push({
      text,
      html: el.outerHTML,
    });
  });

  return blocks;
}
//LCS（行级 diff 的核心） LCS（行级 diff 的核心）
function buildLCSMatrix(a: Block[], b: Block[]) {
  const m = a.length;
  const n = b.length;

  const dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0),
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 匹配条件：text 相同，且如果 text 为空则 html 也必须相同
      const isMatch = a[i - 1].text === b[j - 1].text &&
                      (a[i - 1].text !== '' || a[i - 1].html === b[j - 1].html);

      if (isMatch) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}
//LCS（行级 diff 的核心）
function diffBlocksByLCS(
  oldBlocks: Block[],
  newBlocks: Block[],
): BlockDiff[] {
  const dp = buildLCSMatrix(oldBlocks, newBlocks);
  const diffs: BlockDiff[] = [];

  let i = oldBlocks.length;
  let j = newBlocks.length;

  while (i > 0 && j > 0) {
    const oldBlockMatch = oldBlocks[i - 1];
    const newBlockMatch = newBlocks[j - 1];
    const isMatch = oldBlockMatch.text === newBlockMatch.text &&
                    (oldBlockMatch.text !== '' || oldBlockMatch.html === newBlockMatch.html);

    if (isMatch) {
      diffs.unshift({
        type: 'equal',
        oldBlock: oldBlockMatch,
        newBlock: newBlockMatch,
      });
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      diffs.unshift({
        type: 'delete',
        oldBlock: oldBlockMatch,
      });
      i--;
    } else {
      diffs.unshift({
        type: 'add',
        newBlock: newBlockMatch,
      });
      j--;
    }
  }

  while (i > 0) {
    diffs.unshift({
      type: 'delete',
      oldBlock: oldBlocks[i - 1],
    });
    i--;
  }

  while (j > 0) {
    diffs.unshift({
      type: 'add',
      newBlock: newBlocks[j - 1],
    });
    j--;
  }

  return diffs;
}
// 构建旧 / 新两个结果 HTML
function buildNewHTML(diffs: BlockDiff[]): string {
  const container = document.createElement('div');

  diffs.forEach(d => {
    if (d.type === 'equal' && d.newBlock) {
      const wrap = document.createElement('div');
      wrap.innerHTML = d.newBlock.html;
      const el = wrap.firstElementChild as HTMLElement;
      container.appendChild(el);
    }

    if (d.type === 'add' && d.newBlock) {
      const wrap = document.createElement('div');
      wrap.innerHTML = d.newBlock.html;
      const el = wrap.firstElementChild as HTMLElement;
      // 添加高亮背景，保留原有样式
      const existingStyle = el.getAttribute('style') || '';
      el.setAttribute('style', existingStyle + '; background-color: #d4edda;');
      container.appendChild(el);
    }
  });

  return container.innerHTML;
}
function buildOldHTML(diffs: BlockDiff[]): string {
  const container = document.createElement('div');

  diffs.forEach(d => {
    if (d.type === 'equal' && d.oldBlock) {
      const wrap = document.createElement('div');
      wrap.innerHTML = d.oldBlock.html;
      const el = wrap.firstElementChild as HTMLElement;
      container.appendChild(el);
    }

    if (d.type === 'delete' && d.oldBlock) {
      const wrap = document.createElement('div');
      wrap.innerHTML = d.oldBlock.html;
      const el = wrap.firstElementChild as HTMLElement;
      // 添加删除样式，保留原有样式
      const existingStyle = el.getAttribute('style') || '';
      el.setAttribute('style', existingStyle + '; background-color: #f8d7da; text-decoration: line-through;');
      container.appendChild(el);
    }
  });

  return container.innerHTML;
}


