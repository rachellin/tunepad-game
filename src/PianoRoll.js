import { useEffect, useRef } from 'react';

const drawNotes = (trace, ctx) => {
    const noteHeight = 10;

    let totalBeats = trace.reduce((accum,item) => accum + item["duration"], 0);
    let totalMeasures = Math.ceil(totalBeats / 4);
    let oneBeatWidth = 500 / totalMeasures / 4;

    ctx.fillStyle = "#2F9AEF";
    
    let colors = ["green", "purple"]

    let noteWidth;
    let noteX = 0;
    let accumWidth = 0;
    for (let i = 0; i < trace.length; i++) {
        noteWidth = oneBeatWidth * trace[i]["duration"];
        ctx.fillStyle = colors[i%2];
        ctx.fillRect(noteX+i, 0, noteWidth, noteHeight); // TODO: the margins look weird 
        console.log(`note ${i}: ${noteX+i}`)
        noteX = accumWidth + noteWidth; // prev: i*noteWidth + i
        accumWidth += noteWidth;
    }
}

export const PianoRoll = (props) => {
    //const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasRef = useRef();
   
     useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");

            drawNotes(props.trace, ctx);
        }
     }, []);


   
    return (
    <div>
        <canvas
         ref={canvasRef}
         width="500"
         height="200"
         style={{ border: "1px solid black" }}
       />
       {props.trace.length}
    </div>
     );
   };