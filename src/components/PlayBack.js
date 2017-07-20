import React, { Component } from 'react';
import '../App.css';
import ImageMapper from 'react-image-mapper';
import Timer from './Timer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const back = [{
id: 69,
name: 'deltoid'
},
{
id: 70,
name: 'deltoid'
},
{
id: 71,
name: 'triceps-brachii'
},
{
id: 72,
name: 'triceps-brachii'
},
{
id: 73,
name: 'brachioradialis'
},
{
id: 74,
name: 'brachioradialis'
},
{
id: 75,
name: 'anconeus'
},
{
id: 76,
name: 'anconeus'
},
{
id: 77,
name: 'extensor-digitorum'
},
{
id: 78,
name: 'extensor-digitorum'
},
{
id: 79,
name: 'extensor-carpi-ulnaris'
},
{
id: 80,
name: 'extensor-carpi-ulnaris'
},
{
id: 81,
name: 'extensor-retinaculum'
},
{
id: 82,
name: 'extensor-retinaculum'
},
{
id: 83,
name: 'peroneus-longus'
},
{
id: 84,
name: 'peroneus-longus'
},
{
id: 85,
name: 'achilles-tendon'
},
{
id: 86,
name: 'achilles-tendon'
},
{
id: 87,
name: 'gastronemius'
},
{
id: 88,
name: 'gastronemius'
},
{
id: 89,
name: 'plantaris'
},
{
id: 90,
name: 'plantaris'
},
{
id: 91,
name: 'semitendinosus'
},
{
id: 92,
name: 'semitendinosus'
},
{
id: 93,
name: 'semimembranosus'
},
{
id: 94,
name: 'semimembranosus'
},
{
id: 95,
name: 'adductor-longus'
},
{
id: 96,
name: 'adductor-longus'
},
{
id: 97,
name: 'biceps-femoris'
},
{
id: 98,
name: 'biceps-femoris'
},
{
id: 99,
name: 'vastus-lateralis'
},
{
id: 100,
name: 'vastus-lateralis'
},
{
id: 101,
name: 'gracilis'
},
{
id: 102,
name: 'gracilis'
},
{
id: 103,
name: 'iliotibal-band'
},
{
id: 104,
name: 'iliotibal-band'
},
{
id: 105,
name: 'gluteus-maximus'
},
{
id: 106,
name: 'gluteus-medius'
},
{
id: 107,
name: 'gluteus-medius'
},
{
id: 108,
name: 'external-oblique'
},
{
id: 109,
name: 'external-oblique'
},
{
id: 110,
name: 'latissimus-dorsi'
},
{
id: 111,
name: 'trapezius'
},
{
id: 112,
name: 'teres-major'
},
{
id: 113,
name: 'teres-major'
},
{
id: 114,
name: 'teres-minor'
},
{
id: 115,
name: 'teres-minor'
}]

const MAP = {
  name: "my-secondmap",
  areas: [
    { _id:"69", fillColor:"rgba(255, 102, 0, 0.6)", shape: "poly", coords: [193,191,175,195,165,198,155,197,151,200,141,211,133,221,125,233,119,241,119,221,128,196,138,183,153,174,167,170] },
    { _id:"70", fillColor:"rgba(255, 102, 0, 0.6)", shape: "poly", coords: [392,242,394,212,388,195,378,181,369,173,356,165,348,165,339,174,331,178,323,183,315,187,314,188,324,189,331,188,337,190,345,194,352,190] },
    { _id:"71", fillColor:"rgba(102, 0, 102, 0.6)", shape: "poly", coords: [120,245,120,249,117,266,114,282,114,301,113,325,115,336,121,344,125,338,131,338,136,343,138,348,140,348,147,344,151,339,156,333,159,325,161,315,162,307,163,301,163,292,166,287,165,265,164,250,163,237,161,225,153,220,141,217] },
    { _id:"72",fillColor:"rgba(102, 0, 102, 0.6)", shape: "poly", coords: [345,308,349,337,360,343,366,343,373,343,377,344,379,346,384,343,389,334,394,323,396,315,396,297,394,279,393,264,391,252,388,248,391,242,387,237,378,230,374,222,368,217,362,217,355,218,351,222] },
    { _id:"73", fillColor:"rgba(255, 204, 0, 0.6)", shape: "poly", coords: [109,324,109,336,109,345,106,351,101,360,101,361,99,361] },
    { _id:"74",fillColor:"rgba(255, 204, 0, 0.6)", shape: "poly", coords: [402,360,399,350,398,338,397,327,397,324,401,333,404,352] },
    { _id:"75", fillColor:"rgba(0, 179, 179, 0.6)", shape: "poly", coords: [358,360,366,356,381,352,381,362,368,366,363,372] },
    { _id:"76", fillColor:"rgba(0, 179, 179, 0.6)", shape: "poly", coords: [120,359,131,369,133,378,138,374,141,365,132,356] },
    { _id:"77", fillColor:"rgba(204, 0, 204, 0.6)", shape: "poly", coords: [109,354,117,371,120,391,119,400,117,415,114,431,109,446,107,455,107,466,107,473,103,471,103,446,104,410,104,394,105,369,105,359] },
    { _id:"78", fillColor:"rgba(204, 0, 204, 0.6)", shape: "poly", coords: [397,351,400,358,396,363,396,375,394,389,392,404,391,413,390,420,388,430,388,440,387,451,386,462,385,472,382,469,384,456,380,446,379,430,378,419,377,410,376,396,377,388,379,378,384,365,394,351] },
    { _id:"79",fillColor:"rgba(0, 153, 0, 0.6)", shape: "poly", coords: [138,355,143,351,158,339,157,353,156,363,153,377,149,390,144,401,140,409,135,418,129,426,123,434,117,446,114,454,110,464,110,456,109,449,118,418,121,408,121,397,123,390,126,379,127,371] },
    { _id:"80",fillColor:"rgba(0, 153, 0, 0.6)", shape: "poly", coords: [349,343,348,352,348,362,348,375,350,386,355,396,359,410,368,424,372,430,377,440,379,445,381,456,383,465,383,455,378,431,376,416,374,401,372,387,367,374,369,371] },
    { _id:"81",fillColor:"rgba(255, 102, 102, 0.6)", shape: "poly", coords: [79,474,83,467,98,473,113,471,111,484,94,482,83,478] },
    { _id:"82",fillColor:"rgba(255, 102, 102, 0.6)", shape: "poly", coords: [380,470,382,482,392,484,402,482,411,476,414,475,411,469,394,471] },
    { _id:"83", fillColor:"rgba(204, 51, 255, 0.6)", shape: "poly", coords: [187,845,192,855,197,866,201,877,205,886,206,898,209,910,212,922,214,932,212,930] },
    { _id:"84",fillColor:"rgba(204, 51, 255, 0.6)", shape: "poly", coords: [313,936,324,906,326,898,328,884,330,874,332,863,333,853,335,844,335,839,331,853,324,875,319,894] },
    { _id:"85", fillColor: "rgba(128, 128, 128, 0.6)", shape: "poly", coords: [209,817,221,836,227,838,240,845,240,861,237,877,235,894,235,910,236,926,236,941,237,957,239,967,232,963,224,960,224,946,220,910,216,891,206,866,202,855,196,846,187,835,193,835,201,835,207,830,211,821] },
    { _id:"86", fillColor: "rgba(128, 128, 128, 0.6)", shape: "poly", coords: [307,819,309,828,313,833,317,838,326,841,330,839,327,846,322,857,316,867,315,873,312,885,309,902,307,912,307,924,304,941,304,955,303,967,296,969,291,969,294,931,292,911,290,895,287,877,285,862,283,851,288,846,293,842,301,834] },
    { _id:"87",fillColor: "rgba(77, 0, 102, 0.6)",  shape: "poly", coords: [190,706,185,712,183,719,185,731,183,745,182,769,179,789,181,799,183,817,184,828,188,835,195,833,201,833,206,826,210,819,212,818,213,820,217,826,220,832,225,837,232,840,240,842,243,843,242,835,242,821,242,808,242,797,240,785,239,775,238,762,234,753,234,746,230,739,226,732,222,725,218,719,213,713,208,709,210,710,205,716,204,719,204,724,204,724] },
    { _id:"88", fillColor: "rgba(77, 0, 102, 0.6)", shape: "poly", coords: [282,846,286,843,295,838,299,831,304,823,308,815,311,824,314,829,315,834,322,836,325,836,330,834,336,830,340,822,340,810,340,799,338,788,336,778,333,764,332,758,330,748,329,735,328,727,324,718,320,708,316,712,311,718,307,724,306,727,302,722,304,719,299,716,297,714,292,721,288,733,285,739,280,751,278,767,278,781,276,804,277,829,281,847] },
    { _id:"89",fillColor: "rgba(153, 77, 0, 0.6)",  shape: "poly", coords: [305,717,308,712,312,708,317,706,319,708,311,718,306,724] },
    { _id:"90",fillColor: "rgba(153, 77, 0, 0.6)",  shape: "poly", coords: [190,701,192,697,197,702,203,710,204,715,203,717] },
    { _id:"91", fillColor: "rgba(255, 0, 102, 0.6)",  shape: "poly", coords: [293,554,288,564,287,585,288,605,290,622,291,641,292,669,291,682,289,700,285,717,283,734,279,745,282,746,290,720,293,709,298,692,303,678,309,658,311,640,310,615,308,592,304,570,299,559] },
    { _id:"92",fillColor: "rgba(255, 0, 102, 0.6)",  shape: "poly", coords: [235,739,233,733,229,724,223,707,220,689,214,666,212,644,210,626,210,614,212,600,214,587,215,574,213,560,209,551,205,548,201,551,195,560,193,574,193,590,193,606,192,631,195,652,202,671,211,697,218,714,235,741] },
    { _id:"93", fillColor: "rgba(102, 140, 255, 0.6)", shape: "poly", coords: [285,596,283,612,281,627,279,649,280,670,281,692,277,699,278,711,280,729,281,738,287,705,290,666] },
    { _id:"94",fillColor: "rgba(102, 140, 255, 0.6)", shape: "poly", coords: [216,587,219,607,223,624,227,641,229,661,230,682,232,695,233,715,235,734,228,717,220,687,217,668,214,645,211,617] },
    { _id:"95", fillColor: "rgba(0, 102, 0, 0.6)", shape: "poly", coords: [257,542,261,546,269,551,278,553,290,554,290,559,287,576,285,598,280,613,280,628,278,646,278,669,280,692,278,696,275,689,269,668] },
    { _id:"96",fillColor: "rgba(0, 102, 0, 0.6)", shape: "poly", coords: [209,546,219,543,228,541,236,538,237,541,242,553,247,560,249,573,246,597,243,614,238,633,238,648,238,664,235,683,232,691,224,613] },
    { _id:"97",fillColor: "rgba(255, 204, 102, 0.6)", shape: "poly", coords: [296,554,305,554,314,554,319,557,323,565,326,573,329,582,332,593,334,611,334,621,333,639,333,656,333,677,332,692,332,709,330,722,328,728,324,713,319,704,314,693,312,682,314,659,313,636,313,619,311,599,310,581,307,569,303,560,300,551] },
    { _id:"98",fillColor: "rgba(255, 204, 102, 0.6)", shape: "poly", coords: [201,544,187,546,181,550,175,564,174,571,173,584,173,602,173,619,174,638,175,655,178,672,179,692,182,708,184,713,187,707,190,696,193,684,195,672,195,655,193,643,193,628,193,615,193,598,193,587,196,566,199,549] },
    { _id:"99",fillColor: "rgba(92, 214, 92, 0.6)", shape: "poly", coords: [337,528,343,544,344,560,345,578,345,607,341,624,338,647,337,664,335,633,336,605,335,589,331,577,330,558,334,537] },
    { _id:"100", fillColor: "rgba(92, 214, 92, 0.6)", shape: "poly", coords: [163,519,168,537,169,550,173,568,171,584,171,599,171,614,172,630,174,649,169,630,166,615,163,595,159,578,159,553,159,542] },
    { _id:"101", fillColor: "rgba(0, 102, 153, 0.6)", shape: "poly", coords: [245,532,241,536,240,546,244,552,248,559,248,549] },
    { _id:"102", fillColor: "rgba(0, 102, 153, 0.6)",shape: "poly", coords: [254,541,255,552,255,561,259,562,258,544] },
    { _id:"103",fillColor: "rgba(166, 255, 77, 0.6)", shape: "poly", coords: [337,472,333,483,333,501,337,517,340,533,345,556,347,578,348,599,346,618,342,633,340,649,344,632,346,605,350,576,352,562,350,549,350,531,346,506] },
    { _id:"104",fillColor: "rgba(166, 255, 77, 0.6)", shape: "poly", coords: [158,554,158,542,158,528,157,511,158,499,162,488,166,470,168,459,167,483] },
    { _id:"105",fillColor: "rgba(255, 0, 0, 0.6)", shape: "poly", coords: [295,441,305,449,313,460,321,472,328,489,329,514,323,526,314,541,305,549,294,553,280,551,269,548,262,542,254,535,249,529,241,529,237,534,229,538,219,541,210,542,201,540,192,538,187,536,180,526,177,517,176,499,172,485,173,472,175,463,180,455,187,447,195,441,201,437,206,436,214,436,219,442,228,450,231,457,239,467,243,476,247,484,253,479,259,465,267,454,280,447,290,443] },
    { _id:"106", fillColor: "rgba(0, 204, 163, 0.6)",shape: "poly", coords: [324,430,326,439,328,449,328,462,328,472,328,484,325,476,321,467,317,461,313,455,308,447,301,443,298,441,294,439] },
    { _id:"107",fillColor: "rgba(0, 204, 163, 0.6)", shape: "poly", coords: [171,462,172,452,174,439,177,430,179,423,182,420,190,422,194,426,198,429,206,432,198,436,189,442,184,450] },
    { _id:"108",fillColor: "rgba(255, 153, 255, 0.6)", shape: "poly", coords: [310,423,310,417,313,408,315,402,319,411,324,416,326,418,314,426,312,425] },
    { _id:"109", fillColor: "rgba(255, 153, 255, 0.6)",shape: "poly", coords: [183,411,192,402,199,406,198,415,196,425] },
    { _id:"110", fillColor: "rgba(102, 0, 0, 0.6)",shape: "poly", coords: [301,266,313,268,325,268,336,268,345,264,346,275,346,286,345,296,345,309,343,320,337,329,335,342,335,358,331,370,326,382,323,390,319,399,319,403,315,404,311,409,309,417,309,425,304,433,296,433,278,438,267,446,258,458,260,457,254,469,250,475,246,471,241,465,235,455,227,445,219,437,210,432,202,426,200,418,200,404,196,399,191,391,189,378,188,367,185,354,182,341,177,331,170,320,168,308,166,302,165,293,169,280,169,268,180,266,196,266,206,267,211,275,217,286,220,291,232,304,236,320,242,336,250,341,267,331,273,320,281,303,287,291] },
    { _id:"111", fillColor:"rgba(0, 0, 255, 0.6)", shape: "poly", coords: [169,168,174,172,181,178,191,186,198,192,200,208,203,233,205,249,207,261,209,270,214,276,224,289,231,298,234,309,242,326,249,334,255,334,263,329,268,320,274,309,280,297,287,286,293,273,298,264,299,249,302,229,304,214,307,204,309,186,315,180,326,177,334,174,342,169,347,164,350,161,330,161,321,159,309,155,302,153,291,144,283,135,275,130,261,127,247,126,238,126,219,148] },
    { _id:"112", fillColor:"rgba (0, 51, 0, 0.6)", shape: "poly", coords: [347,216,350,222,350,232,349,240,349,249,349,258,346,264,342,263,333,265,325,266,316,267,311,266,331,249,335,239,340,228] },
    { _id:"113",fillColor:"rgba (0, 51, 0, 0.6)", shape: "poly", coords: [187,263,179,264,172,264,166,263,166,255,165,244,165,234,165,225,162,214,168,225,172,239] },
    { _id:"114", fillColor:"rgba (0, 153, 0 0.6)", shape: "poly", coords: [364,211,359,210,350,205,345,207,342,215,339,223,337,232,332,239,327,244,331,229,334,216,335,209,337,198,340,192,347,196,352,194] },
    { _id:"115", fillColor:"rgba (0, 153, 0 0.6)", shape: "poly", coords: [176,237,175,231,175,221,173,209,169,198,167,197,163,198,157,198,155,198,150,202,146,208,144,213,151,209,157,206,162,208,168,220,172,228] },


  ]
}

export default class PlayBack extends Component {
  constructor(props) {
    super(props)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    // this.onMouseLeave = this.onMouseLeave.clearRect
  }
  onMouseEnter(area, index, event) {
    this.refs.canvas.ctx.fillStyle = area.fillColor
    this.refs.canvas.ctx.fill()
  }
  // onMouseLeave(area, index, event) {
  //   this.refs.canvas.ctx.clearRect = area.clearRect
  //   this.refs.canvas.ctx.fill()
  // }

  render(){
    return(
      <div className='play'>

        <div className="label">
      <h3> Major Posterior Muscles </h3>
    </div>
      <Link to='/playfront'> Anterior</Link>
      <Link to='/studyback'> Study </Link>
      <div className='game'>
        <div className='muscle'>

          <ImageMapper ref="canvas" src={require('../assets/back.jpg')} map={MAP} onMouseEnter={this.onMouseEnter} />

        </div>
        <div className='timer'>
          <Timer />
        </div>
        <div className='generate-muscle'>
          <p> MUSCLE </p>
        </div>
      </div>


      </div>
    )
  }
}
