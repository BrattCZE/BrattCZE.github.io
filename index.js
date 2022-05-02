<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000; min-height: 16.0px}
    span.s1 {font: 12.0px Helvetica; -webkit-text-stroke: 0px #000000}
    span.s2 {font-kerning: none}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1"><span class="s1">&lt;script&gt;</span><span class="s2">define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span>var API = new APIConstructor();</span></p>
<p class="p2"><span class="s2"><span class="Apple-tab-span">	</span></span></p>
<p class="p2"><span class="s2"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span>return ampExtension({</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>primeCats :<span class="Apple-converted-space">  </span>[</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nameForFeedback : 'Black people',<span class="Apple-converted-space">  </span>//Will be used in the user feedback<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nameForLogging : 'Black people', //Will be used in the logging</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>//An array of all media objects for this category.</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>mediaArray : [</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-converted-space">    </span>{image : 'b01.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b02.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b03.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b04.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b05.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b06.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b07.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b08.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b09.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b10.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b11.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'b12.jpg'}]</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nameForFeedback : 'White people',<span class="Apple-converted-space">  </span>//Will be used in the user feedback<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nameForLogging : 'White people', //Will be used in the logging</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>//An array of all media objects for this category.</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>mediaArray : [</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-converted-space">    </span>{image : 'w01.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w02.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w03.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w04.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w05.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w06.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w07.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w08.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w09.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w10.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w11.jpg'},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{image : 'w12.jpg'}]</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>],</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>examplePrimeStimulus :<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nameForLogging : 'examplePrime', //Will be used in the logging</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>//An array of all media objects for this category.</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>base_url : {//Where are your images at?</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>image : 'https://baranan.github.io/minno-tasks/images/ampImages'</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s2">});</span></p>
<p class="p1"><span class="s2">&lt;/script&gt;</span></p>
</body>
</html>
