interface IPlan {
    name: string,
    exercises: IExercise[],
    shortMessage: string,
    longMessage: string,
    duration: number
}
class Plans {
    public name;
    public exercises;
    public shortMessage;
    public longMessage;
    public duration;

    constructor() {

    }

    private Plans: IPlan[];
    public SetUp(name, exercises, shortMessage, longMessage, duration): Plans {
        this.name = name;
        this.exercises = exercises;
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
        this.duration = duration;
        return this;
    }
}