import React, { Component } from "react";
 
class Announcements extends Component {

  constructor() {
    super();
    this.state = {
        AnnouncementList:[{id:0},{id: Math.random + 21 ,text: "Lay on a flat bench, gripping dumbbells in each hand. Press the weights up above your chest, keeping them from touching, with your pinkies turned slightly inward. Maintain full body tension on the bench", datetime:"25-10-2020 08:55:03"},{id: Math.random + 422, text:"Lay on a flat bench, gripping dumbbells in each hand. Press the weights up above your chest, keeping them from touching, with your pinkies turned slightly inward. Maintain full body tension on the bench", datetime:"27-10-2020 08:55:03"}]
    };
  }


  render() {
    return (
      <div>
        <h2> Announcements </h2>
        {this.state.AnnouncementList.map(Announcement => (<div key={Announcement.id}><p>{Announcement.text}<div>{Announcement.datetime}</div></p></div>))}
      </div>
    );
  }
}
 
export default Announcements;