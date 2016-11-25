interface IStep {
    name: string,
    shortMessage: string,
    longMessage: string,
    duration: number,
    repeat: number
}

interface IExercise {
    name: string,
    steps: IStep[],
    shortMessage: string,
    longMessage: string,
    duration: number
}
class Step implements IStep {
    public name;
    public shortMessage;
    public longMessage;
    public duration;
    public repeat; 
    constructor() {
    }

    public SetUp(name, shortMessage, longMessage, duration, repeat): Step {
        this.name = name;
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
        this.duration = duration;
        this.repeat = repeat;
        return this;
    }
}
class Exercise implements IExercise {
    public name: string;
    public steps: IStep[];
    public shortMessage: string;
    public longMessage: string;
    public duration: number;

    constructor() {
        //Add to list in memory
    }

    public SetUp(name, steps, shortMessage, longMessage, duration): Exercise {
        this.name = name;
        this.steps = steps;
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
        this.duration = duration;
        return this;
    }

    public SaveToFile(): void {

    }

    public AddToList(): void {
        var exercise: IExercise = {
            name: this.name,
            steps: this.steps,
            shortMessage: this.shortMessage,
            longMessage: this.longMessage,
            duration: this.duration
        };
        //Exercises.push( exercise );
    }
}

