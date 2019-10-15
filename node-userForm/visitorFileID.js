/* class assigns the patient name to the patient file that captures the information, it also validates if the name exists already  */

module.exports = class fileID {
    constructor(name) {
        this.name = name;
    }

    get_name() {
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/
        if (!regName.test(this.name)) {
            throw ('Invalid name given.');
        } else {
            return this.name;
        }
    }
}