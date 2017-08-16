import React, { Component } from 'react';
import '../App.css';
import ImageMapper from 'react-image-mapper';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const MAP = {
  name: "my-map",
  areas: [
    { _id:"frontalis",fillColor:"rgba(255, 102, 0, 0.6)", shape: "poly", coords: [244,38,251,45,253,52,254,60,254,70,248,71,241,73,235,70,232,63,226,56,226,49,232,41] },
    { _id:"frontalis2", fillColor:"rgba(255, 102, 0, 0.6)", shape: "poly", coords: [269,38,280,37,287,45,288,53,287,63,283,71,279,75,273,78,267,76,262,74,258,71,258,64,258,58,259,49,262,43] },
    { _id:"temporalis", fillColor:"rgba(102, 0, 102, 0.6)",shape: "poly", coords: [216,53,221,56,225,64,223,70,224,73,222,79,219,84] },
    { _id:"temporalis2",fillColor:"rgba(102, 0, 102, 0.6)", shape: "poly", coords: [296,52,299,59,300,70,300,77,298,85,292,85,292,80,291,68,294,56] },
    { _id:"sternocleidomastoid",fillColor:"rgba(255, 204, 0, 0.6)", shape: "poly", coords: [291,132,290,137,287,146,285,156,281,168,276,177,270,185,268,188,264,184,274,159,278,149,281,144] },
    { _id:"sternocleidomastoid2", fillColor:"rgba(255, 204, 0, 0.6)",shape: "poly", coords: [247,188,252,185,248,175,245,167,243,157,243,152,239,145,235,141,229,136] },
    { _id:"trapezius",fillColor:"rgba(0, 179, 179, 0.6)", shape: "poly", coords: [300,148,305,161,308,168,309,175,310,180,320,179,330,177,340,171,345,169] },
    { _id:"trapezius2", fillColor:"rgba(0, 179, 179, 0.6)", shape: "poly", coords: [210,175,214,167,219,160,226,149,209,159,197,165,187,166,196,176,209,180] },
    { _id:"deltoid",fillColor:"rgba(204, 0, 204, 0.6)", shape: "poly", coords: [374,177,384,187,393,216,391,231,389,243,387,255,384,264,378,256,371,247,362,238,358,221,353,210,343,202,332,196,318,191,307,187,340,178,356,173] },
    { _id:"deltoid2",fillColor:"rgba(204, 0, 204, 0.6)", shape: "poly", coords: [209,188,187,195,169,202,165,212,161,224,155,235,146,243,141,254,135,243,131,227,130,214,134,199,141,189,147,179,160,173,169,172,179,171] },
    { _id:"pectorals-major", fillColor:"rgba(0, 153, 0, 0.6)", shape: "poly", coords: [273,195,275,202,274,212,270,221,267,235,264,248,263,261,267,273,273,284,280,288,295,293,311,291,327,286,337,274,343,262,348,251,349,237,352,228,354,224,353,217,348,211,342,207,334,203,328,199,319,196,314,193,308,190,299,188,290,188,283,190] },
    { _id:"pectorals-major2", fillColor:"rgba(0, 153, 0, 0.6)", shape: "poly", coords: [242,196,242,204,244,213,246,220,248,233,252,248,252,264,249,274,240,284,235,288,224,292,214,295,205,296,197,291,194,289,185,281,180,271,175,259,171,244,167,231,164,222,167,213,170,206,178,202,185,200,196,197,203,194,207,191,215,189,224,189,232,192] },
    { _id:"biceps-brachii", fillColor:"rgba(255, 102, 102, 0.6)",shape: "poly", coords: [364,246,369,256,375,264,377,279,378,290,379,304,379,319,380,334,376,347,371,354,366,359,365,352,363,344,370,335,367,330,364,324,361,316,359,303,358,278,357,259,357,249,358,244,358,238] },
    { _id:"biceps-brachii2",fillColor:"rgba(255, 102, 102, 0.6)", shape: "poly", coords: [171,355,172,339,165,332,164,328,165,319,168,311,171,302,173,298,172,291,173,277,173,268,173,259,172,256,169,244,165,238,163,231,160,234,155,241,151,251,148,265,147,279,147,291,148,309,150,326,153,334,157,343,161,348] },
    { _id:"biceps-brachii3", fillColor:"rgba(255, 102, 102, 0.6)",shape: "poly", coords: [151,340,147,344,142,349,136,344,133,336,133,330,132,317,131,306,132,294,134,283,137,272,139,264,141,258,146,250,151,243] },
    { _id:"biceps-brachii4",fillColor:"rgba(255, 102, 102, 0.6)", shape: "poly", coords: [379,348,385,351,390,355,390,349,391,343,395,334,396,325,396,318,396,308,393,297,393,286,388,277,385,269,381,263,371,253] },
    { _id:"triceps-brachii", fillColor:"rgba(204, 51, 255, 0.6)",shape: "poly", coords: [360,325,365,330,367,337,364,336] },
    { _id:"triceps-brachii2", fillColor:"rgba(204, 51, 255, 0.6)",shape: "poly", coords: [170,324,172,318,174,312,173,306,170,315,167,322,166,324] },
    { _id:"brachialis",fillColor: "rgba(128, 128, 128, 0.6)", shape: "poly", coords: [395,273,397,266,398,258,398,255,402,266,405,277,406,289,408,299,407,315,407,322,405,331,402,337,399,344] },
    { _id:"brachialis2",fillColor: "rgba(128, 128, 128, 0.6)", shape: "poly", coords: [131,263,132,270,133,277,130,289,131,301,131,312,131,321,131,332,131,342,125,323] },
    { _id:"pronator-teres", fillColor: "rgba(77, 0, 102, 0.6)",shape: "poly", coords: [390,359,390,364,390,370,390,374,384,367,381,362,376,357,377,355,377,352,382,354] },
    { _id:"pronator-teres2",fillColor: "rgba(77, 0, 102, 0.6)", shape: "poly", coords: [156,349,154,355,150,356,147,359,145,363,142,365,141,360,142,354,142,351,148,349,150,345,153,343] },
    { _id:"brachioradialis",fillColor: "rgba(153, 77, 0, 0.6)", shape: "poly", coords: [408,328,411,335,413,345,416,352,418,367,418,381,417,402,419,415,422,430,426,437,425,447,420,442,412,429,405,414,401,402,396,387,392,376,395,352,397,347] },
    { _id:"brachioradialis2",fillColor: "rgba(153, 77, 0, 0.6)", shape: "poly", coords: [115,443,120,435,123,426,125,414,131,403,137,389,138,380,139,370,139,360,136,349,133,343,129,338,125,332,123,329,118,341] },
    { _id:"flexor-carpi-radialis",fillColor: "rgba(255, 0, 102, 0.6)", shape: "poly", coords: [370,359,375,359,377,363,380,365,384,371,389,377,392,391,396,408,402,428,408,433,411,442,415,454,419,466,417,469,393,420,387,413,385,400,377,382] },
    { _id:"flexor-carpi-radialis2",fillColor: "rgba(255, 0, 102, 0.6)", shape: "poly", coords: [121,464,125,464,129,458,129,447,134,435,138,423,143,414,150,406,153,400,155,388,158,376,160,369,164,362,165,357,165,354,161,350,158,348,150,358,145,368] },
    { _id:"flexor-digitorum-superficialis",fillColor: "rgba(102, 140, 255, 0.6)", shape: "poly", coords: [167,357,172,361,170,365,170,376,172,389,169,395,167,400,163,406,161,413,157,416,153,427,144,441,138,457,134,465] },
    { _id:"flexor-digitorum-superficialis2",fillColor: "rgba(102, 140, 255, 0.6)", shape: "poly", coords: [414,469,403,450,397,440,390,430,386,422,382,415,378,407,374,395,370,383,369,377,366,368] },
    { _id:"flexor-carpi-ulnaris", fillColor: "rgba(255, 148, 77, 0.6)", shape: "poly", coords: [406,469,411,469,403,452,396,445,391,436,385,425] },
    { _id:"flexor-carpi-ulnaris2", fillColor: "rgba(255, 148, 77, 0.6)",shape: "poly", coords: [140,463,145,451,149,439,153,432,149,435,143,448] },
    { _id:"iliacus",fillColor: "rgba(102, 140, 255, 0.6)", shape: "poly", coords: [304,492,308,482,310,474,312,466,312,459,315,450,317,446,308,452,302,464,301,476] },
    { _id:"iliacus2", fillColor: "rgba(102, 140, 255, 0.6)",shape: "poly", coords: [218,496,223,485,221,473,214,462,204,453] },
    { _id:"psoas-major",fillColor: "rgba(0, 102, 0, 0.6)", shape: "poly", coords: [300,511,303,503,305,495,301,484,299,472,293,482,292,493] },
    { _id:"psoas-major2",fillColor: "rgba(0, 102, 0, 0.6)", shape: "poly", coords: [222,515,233,498,228,483,224,481,222,499] },
    { _id:"pectineus", fillColor: "rgba(255, 204, 102, 0.6)",shape: "poly", coords: [292,530,300,513,292,500,287,517] },
    { _id:"pectineus2",fillColor: "rgba(255, 204, 102, 0.6)", shape: "poly", coords: [233,504,240,519,230,536,224,515] },
    { _id:"adductor-longus", fillColor: "rgba(92, 214, 92, 0.6)",shape: "poly", coords: [286,523,290,533,279,570,276,590,271,616,266,563,276,538] },
    { _id:"adductor-longus2",fillColor: "rgba(92, 214, 92, 0.6)", shape: "poly", coords: [241,525,231,539,238,564,244,583,250,602,253,578,251,558,248,540] },
    { _id:"extensor-hallucis-longus",fillColor: "rgba(0, 102, 153, 0.6)", shape: "poly", coords: [211,927,214,930,217,939,211,940] },
    { _id:"extensor-hallucis-longus2", fillColor: "rgba(0, 102, 153, 0.6)",shape: "poly", coords: [286,921,294,924,288,936,282,933] },
    { _id:"flexor-digitorum-longus",fillColor: "rgba(166, 255, 77, 0.6)", shape: "poly", coords: [230,894,235,874,227,858] },
    { _id:"flexor-digitorum-longus2",fillColor: "rgba(166, 255, 77, 0.6)", shape: "poly", coords: [277,860,285,849,281,887] },
    { _id:"soleus", fillColor: "rgba(255, 0, 0, 0.6)",shape: "poly", coords: [226,856,225,829,237,845,236,869] },
    { _id:"soleus2",fillColor: "rgba(255, 0, 0, 0.6)", shape: "poly", coords: [278,833,288,820,285,847,279,851] },
    { _id:"gastronemius", fillColor: "rgba(0, 204, 163, 0.6)",shape: "poly", coords: [239,765,226,793,223,827,238,842,244,814,243,789] },
    { _id:"gastronemius2", fillColor: "rgba(0, 204, 163, 0.6)",shape: "poly", coords: [284,765,291,786,290,817,278,827,274,809,279,775] },
    { _id:"tibialis-anterior",fillColor: "rgba(255, 153, 255, 0.6)", shape: "poly", coords: [323,727,328,743,330,764,321,815,315,836,304,868,296,888,288,909,284,909,302,795] },
    { _id:"tibialis-anterior2", fillColor: "rgba(255, 153, 255, 0.6)",shape: "poly", coords: [194,733,203,781,207,822,211,856,222,919,216,918,198,850,189,808] },
    { _id:"extensor-digitorum-longus",fillColor: "rgba(102, 0, 0, 0.6)", shape: "poly", coords: [330,747,334,779,333,814,326,846,320,878,310,917,295,913,324,816] },
    { _id:"extensor-digitorum-longus2", fillColor: "rgba(102, 0, 0, 0.6)",shape: "poly", coords: [187,753,187,783,184,806,184,827,188,856,196,888,200,924,209,920,191,824] },
    { _id:"peroneus-longus",fillColor:"rgba (0, 51, 0, 0.6)", shape: "poly", coords: [334,745,339,761,340,786,336,815,332,841,326,863,335,805] },
    { _id:"peroneus-longus2",fillColor:"rgba (0, 51, 0, 0.6)", shape: "poly", coords: [184,769,182,792,183,822] },
    { _id:"vastus-medials",fillColor:"rgba (0, 153, 0 ,0.6)", shape: "poly", coords: [228,708,242,704,244,675,243,634,231,584,226,633,222,668,225,701,233,712] },
    { _id:"vastus-medials2",fillColor:"rgba (0, 153, 0, 0.6)", shape: "poly", coords: [292,570,282,607,276,636,275,669,276,693,287,701,293,697,295,683,291,628] },
    { _id:"rectus-femoris", fillColor:"rgba (51, 102, 153, 0.6)",shape: "poly", coords: [202,674,216,668,226,578,223,564,213,538,207,514,204,497,199,476,192,492,188,509,181,530,178,553,179,589,184,628,195,660] },
    { _id:"rectus-femoris2", fillColor:"rgba (51, 102, 153, 0.6)",shape: "poly", coords: [324,471,330,490,336,506,340,527,341,554,341,575,340,600,334,629,324,655,318,670,296,666,293,625,293,578,295,558] },
    { _id:"vastus-lateralis",fillColor:"rgba (121, 166, 210, 0.6)", shape: "poly", coords: [327,711,340,664,347,634,351,613,356,584,359,557,351,535,347,521,340,509,344,550,338,621,327,651,316,673,318,691] },
    { _id:"vastus-lateralis2",fillColor:"rgba (121, 166, 210, 0.6)", shape: "poly", coords: [195,704,202,684,186,641,179,609,177,578,175,551,178,529,184,510,175,528,170,542,169,563,171,608,183,671] },
    { _id:"sartorius",fillColor:"rgba (38, 153, 0, 0.6)", shape: "poly", coords: [221,758,237,733,244,705,248,670,246,638,241,618,233,587,225,565,219,545,210,513,206,487,197,466,197,452,203,456,216,496,226,528,237,560,242,585,250,611,252,638,252,685,249,723,240,756,227,775] },
    { _id:"sartorius2",fillColor:"rgba (38, 153, 0, 0.6)", shape: "poly", coords: [276,631,273,619,281,570,288,543,300,518,308,495,313,469,319,449,323,439,325,460,303,537,300,541,289,571] },
    { _id:"gracilis", fillColor:"rgba (36, 26, 0, 0.6)",shape: "poly", coords: [259,615,262,593,262,558,262,534,254,516,245,506,237,500,240,511,246,526,256,554] },
    { _id:"gracilis2", fillColor:"rgba (36, 26, 0, 0.6)",shape: "poly", coords: [270,547,270,534,273,524,278,514,285,503,291,496,286,515] },
    { _id:"external-oblique", fillColor:"rgba (128, 0, 64, 0.6)", shape: "poly", coords: [186,426,184,400,185,378,185,360,184,337,186,333,181,320,189,318,186,314,184,306,179,302,196,301,201,299,210,302,208,335,210,368,213,408,214,429,212,455] },
    { _id:"external-oblique2",fillColor:"rgba (128, 0, 64, 0.6)", shape: "poly", coords: [317,438,341,415,336,389,333,363,334,345,338,334,332,331,333,324,335,324,335,320,331,316,325,315,327,313,337,303,328,304,316,295,305,299,305,388,303,419] },
    { _id:"rectus-abdominus", fillColor:"rgba (255, 102, 179, 0.6)",shape: "poly", coords: [211,335,246,318,253,322,261,317,279,326,300,337,299,356,302,371,297,390,297,405,293,433,286,471,280,491,273,515,262,515,254,511,232,465,220,428] },
    { _id:"serratus-anterior",fillColor:"rgba (0, 0, 128, 0.6)", shape: "poly", coords: [342,277,343,316,337,325,329,313,338,302,336,300,330,300,314,294,311,292] },
    { _id:"serratus-anterior2", fillColor:"rgba (0, 0, 128, 0.6)",shape: "poly", coords: [181,329,178,316,175,306,175,289,175,279,179,280,187,287,198,294,192,300,183,299,180,298,181,305,183,311,184,318,181,317] },
    { _id:"latissimus-dorsi", fillColor:"rgba (153, 153, 0, 0.6)",shape: "poly", coords: [343,328,355,305,357,276,355,262,355,249,355,241,349,255] },

  ]
}

export default class StudyFront extends Component {
    constructor(props) {
      super(props)

      this.onMouseEnter = this.onMouseEnter.bind(this)
      // this.onLoad = this.onLoad.bind(this)
      // this.onClick = this.onClick.bind(this)






    }


    //
    // onClick(area, index, event){
    //   this.refs.canvas.ctx.fillStyle = area.fillColor
    //   this.refs.canvas.ctx.fill()
    //
    // }

    onMouseEnter(area, index, event) {
      this.refs.canvas.ctx.fillStyle = area.fillColor
      this.refs.canvas.ctx.fill()
    }
    playFront(){
      return
    }

  render(){
    return(
      <div className='play'>



    
        <div className='Studybutton'>
        <Link to='/playfront'><button className='leggo'> Start</button></Link>
        </div>
        <div className='muscle-study'>
          <div className='picture'>
          <ImageMapper ref="canvas" src={require('../assets/front.jpg')} map={MAP} onImageClick={this.onImageClick, this.checkId} onClick={this.onClick} onMouseEnter={this.onMouseEnter} />
        </div>
          <img src={require('../assets/labelfront.jpg')} />

          {/* <ImageMapper ref="canvas" src={require('../assets/studyback.jpg')} map={MAP} onMouseEnter={this.onMouseEnter} /> */}

        </div>




      </div>
    )
  }
}
