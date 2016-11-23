interface ISteps {
    name: string,
    shortMessage: string,
    longMessage: string,
    duration: number,
    repeat: number
}

interface IExercise {
    name: string,
    steps: ISteps[],
    shortMessage: string,
    longMessage: string,
    duration: number 
}

module Exercises{
    var Exercises: IExercise[];

    class Exercise{
        public name: string;
        public steps: ISteps[];
        public shortMessage: string;
        public longMessage: string;
        public duration: number;

        constructor() {
            //Add to list in memory
            Exercises = [];
        }


        public SaveToFile(): void{

        }

        public AddToList(): void{
            var exercise: IExercise = {
                name: this.name,
                steps: this.steps,
                shortMessage: this.shortMessage,
                longMessage: this.longMessage,
                duration: this.duration
            };
            Exercises.push( exercise );
        }
    }
    function MatchExercise(){

    }
}