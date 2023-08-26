import { useEffect, useRef } from 'react';

const noteMap = {0: 'C',  1: 'C#', 2: 'D',  3: 'D#', 4: 'E',   5: 'F',
                 6: 'F#', 7: 'G',  8: 'G#', 9: 'A', 10: 'A#', 11: 'B'};

const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
}

const drawNotes = (trace, ctx) => {
    const noteHeight = 10;

    let totalBeats = trace.reduce((accum,item) => accum + item["duration"], 0);
    let totalMeasures = Math.ceil(totalBeats / 4);
    let oneBeatWidth = 500 / totalMeasures / 4;

    let pitches = trace.filter(item => item["params"]["note"]).map(item => item["params"]["note"]);
    let minPitch = Math.min(...pitches);
    let firstC = minPitch;
    if (minPitch % 12 !== 0) {
        firstC = minPitch - (minPitch % 12);
    }
    let row1 = noteHeight + (200-30);

    ctx.fillStyle = "#2F9AEF";
    ctx.font = "15px Arial"
    
    let colors = ["green", "purple"]

    let noteWidth;
    let noteX = 0;
    let noteY = row1;
    let accumWidth = 0;
    let noteName, noteNum;
    for (let i = 0; i < trace.length; i++) {
        noteWidth = oneBeatWidth * trace[i]["duration"];
        noteNum = trace[i]["params"]["note"] 
        noteName = noteMap[noteNum%12]
        
        ctx.fillStyle = "#000";
        ctx.fillText((trace[i]["command"] == "play" ? `${noteName} (${noteNum})` : "rest"), noteX+i+1, 75);

        trace[i]["command"] == "play" ? ctx.fillStyle = colors[i%2] : ctx.fillStyle = "transparent";

        // if (i >10000) {
        //     ctx.fillRect(noteX+i, noteHeight+80, noteWidth, noteHeight); // TODO: the margins look weird 
        // } else {
        //     downStep = clamp(noteNum, 0, trace.length-1)
        //     noteY = 50 + 180 * clamp(i, 0, trace.length-1);
        //     console.log(50 + 180 * clamp(i, 0, trace.length-1))
        //     console.log("noteHeight+80: ", noteHeight+80)
        //     ctx.fillRect(noteX+i, noteY, noteWidth, noteHeight);
        // }

        // calculate y position
        if (noteNum !== firstC) {
            noteY = row1 - (noteNum - firstC) * noteHeight;
        } else {
            noteY = row1;
        }

        //ctx.fillRect(noteX+i, noteHeight+(200-30)-i*noteHeight, noteWidth, noteHeight); // 200 - 30 = canvas height - 30
        ctx.fillRect(noteX+i, noteY, noteWidth, noteHeight);
        //console.log(clamp(noteHeight+80*i, 0, 200))

        //console.log(`note ${i}: ${noteX+i}`)
        noteX = accumWidth + noteWidth; // prev: i*noteWidth + i
        accumWidth += noteWidth;
    }
}

const writeBeats = (trace, ctx) => {
    let totalBeats = trace.reduce((accum,item) => accum + item["duration"], 0);
    let totalMeasures = Math.ceil(totalBeats / 4);
    let oneBeatWidth = 500 / totalMeasures / 4;
    //console.log(totalMeasures)

    let beatX = 0;
    for (let i = 0; i < totalBeats; i++) {
        beatX = i*oneBeatWidth + i;
        //console.log(beatX)
        ctx.fillStyle = "#000";
        ctx.fillText(i+1, beatX, 15);
    }
}


const writeNoteNames = (trace, ctx) => {

}

export const PianoRoll = (props) => {
    //const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasRef = useRef();
   
     useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");

            drawNotes(props.trace, ctx);
            writeBeats(props.trace, ctx);

        }
     }, []);


   
    return (
    <div>
        <canvas
         ref={canvasRef}
         width="500"
         height="200"
         style={{ border: "1px solid black"}}
       />
    </div>
     );
   };