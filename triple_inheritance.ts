class ReactiveComponent {
    ctxId: number = 0

    constructor(props: string) {
    }

    _onInit_(): void {
        // console.log(`ctxId ${this.ctxId} lifecycle hook function onInit executed!`);
        console.log('ctxId ', this.ctxId, ' lifecycle hook function onInit executed!')

        this.onInit()
    }

    private _onReady_(): void {
        // console.log(`ctxId ${this.ctxId} lifecycle hook function onReady executed!`);
        console.log('ctxId ', this.ctxId, ' lifecycle hook function onReady executed!')
        this.onReady()
    }


    _onDestroy_(): void {
        this.onDestroy()
    }


    callHook(lifecycle: string): void {

    }


    // lifecycle hook
    onInit(): void { }
    onReady(): void { }
    onDestroy(): void { }
}


class Page extends ReactiveComponent {
    constructor(props: string) {
        super(props);
    }

    private _onShow(): void {

    }

    private _onHide(): void {

    }

    _onDestroy(): void {

    }

    _onDestroyed(): void {

    }

    callHook(lifecycle: string): void {
    }

    // lifecycle hook
    // [ERROR] console - Program terminated with exit(1) 
    // onShow(): void { }
    // onHide(): void { }
}

class Home extends Page {
    // state: HomeState

    constructor(props: string) {
        super(props);
    }

    /** @override */
    onInit(): void {
        console.log('--- Page Home init ---')
    }

    /** @override */
    onReady(): void {
        console.log('--- Page Home ready ---')
    }

    /** @override */
    onShow(): void {
        console.log('--- Page Home show ---')
    }

    /** @override */
    onHide(): void {
        console.log('--- Page Home hide ---')
    }

    /** @override */
    onDestroy(): void {
        console.log('--- Page Home destroy ---')
    }
}

let home: Home = new Home('')