// Container for a project's information/data
export default class ProjectInfo {
    constructor(imageNames, title, oneLiner, role, techUsed, difficulties, solution, notable) {
        this.imageNames = imageNames;
        this.title = title
        this.oneLiner = oneLiner;
        this.role = role;
        this.techUsed = techUsed;
        this.difficulties = difficulties;
        this.solution = solution;
        this.notable = notable;
    }
}
