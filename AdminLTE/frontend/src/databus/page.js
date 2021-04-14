class Page {
    // static pageSize = 10;
    // static currentPage = 1;
    constructor() {
        this.currentPage = 1;
        this.pageSize = 5;
    }
    reset() {
        this.currentPage = 1;
        this.pageSize = 5;
    }
    setCurrentPage(currentPage) {
        this.currentPage = currentPage;
    }
}

export default new Page();