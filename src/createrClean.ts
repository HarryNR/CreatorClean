import path from 'path';

/**
 * Usage:
 * node ./build/CreaterClean.js from:F:\xxx\assets to:d:\out.txt
 */
export default class CreaterClean {

    // 单例模式
    private static instance: CreaterClean;
    static getIns(): CreaterClean {
        if (!CreaterClean.instance) {
            CreaterClean.instance = new CreaterClean();
        }
        return CreaterClean.instance;
    }

    constructor() {
        const sourceFile = this.sourceCatalog;
        if (!sourceFile || sourceFile.length == 0) return;
        this.startCheck(sourceFile);
    }

    /**
     * 需要执行检查的资源目录
     * 如果不填写，则使用当前工具所在目录作为源路径
     */
    private get sourceCatalog(): string {
        let from: string = process.argv[2];
        if (from && from.length > 0 && from.search(/^from:/i) == 0)
            from = from.slice(5);
        else
            from = path.resolve(process.cwd(), '..');
        console.log('开始检测资源目录:' + from);
        return from;
    }

    /**
     * 检查结果输出文件路径
     * 如果不填写，则存储在工具目录下的./Data/out.txt文件中
     */
    private get destCatalog(): string {
        let to: string = process.argv[3];
        if (to && to.length > 0 && to.search(/^to:/i) == 0)
            to = to.slice(3);
        else
            to = path.resolve(__dirname, '../Data/out.txt');
        console.log('结果输出目录:' + to);
        return to;
    }

    private startCheck(source: string) {
        if (!source || source.length == 0) {
            console.error('Cleaner: invalid source dir');
            return;
        }
        // todo HarryNR
    }
}

// 执行
CreaterClean.getIns();