import {useContext, useState} from "react";
import {TriviaContext} from "@/context/TriviaContext.js";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.js"

const Question = (p: any) => {
    const [questionNumber, setquestionNumber] = useState(0);
    const context = useContext(TriviaContext)

    if (!context){
        return <div>Error: Context not available</div>;
    }
    const { questions } = context;

	return (
        <Card>
            <CardHeader>
                <CardTitle>{questions[questionNumber].question}</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export default Question;
