import React, { Component } from "react";
import {LessonIterator} from './../components/LessonIterator';

 
class Lessons extends Component {
  constructor() {
  super();
  this.state = {
    LessonList:[{id:0},{id :Math.random + 31, lesson: "Lesson 01", videoLink: "www.youtube.com", text: "Sure, we just talked about branching out beyond the bench press. But you can't avoid the exercise if you're serious about training—or even if you just step foot into any typical strength facility in the world. The move is standard for a reason: it works."},{id: Math.random + 541, lesson: "Lesson 02" , videoLink: "www.youtube.com",text:"Lay on a flat bench, gripping dumbbells in each hand. Press the weights up above your chest, keeping them from touching, with your pinkies turned slightly inward. Maintain full body tension on the bench"}, {id:Math.random+1434, lesson: "Lesson 03" , videoLink: "https://www.youtube.com/watch?v=mfTnowfhW2c", text: "Lift your dumbbells up, squeezing the handles tightly. Once your back is on the bench, don't just hold the weights with your elbows parallel to your shoulders. Keep your elbows at a 45-degree angle to help to keep your shoulders safe. Squeeze your chest to drive the weight up, then lower under control under the same path to just above your chest. Drive back up to hit another rep."}]
  }
}

render() {
  return (
    <div className="Lesson-page">
      <h2> Lessons </h2>
      {this.state.LessonList.map((Lesson) => <LessonIterator id={Lesson.id} videoLink={Lesson.videoLink} title={Lesson.lesson} text={Lesson.text}/>)}
    </div>
  );
}
}
 
export default Lessons;