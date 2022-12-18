// @ts-ignore
import axios from "axios";

export enum SYS_CODE {
    all = 'all',
    local = 'local',
    zerotier = 'zerotier',
    network = 'network'
}

interface NAS {
    code: SYS_CODE
    name: string,
    url: string,
    description: string
}

export class Media implements NAS {
    constructor(code: SYS_CODE, name: string, url: string, description: string) {
        this.code = code
        this.name = name
        this.url = url
        this.description = description
    }

    code: SYS_CODE;
    description: string;
    name: string;
    url: string;
}

let medias = async () => {
    let arr = new Array<Media>()
    let res = await axios.get('/public/resource.json')
    let list: Array<Object> = res.data;
    for (let item of list) {
        // @ts-ignore
        let media = new Media()
        Object.assign(media, item);
        arr.push(media);
    }
    return arr
}
export default medias