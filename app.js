var body=document.getElementsByTagName("body")[0];body.style.backgroundColor="#FF608C";function height0(b){return document.getElementById(b).offsetHeight}window.onscroll=function(){var a=window.pageYOffset;a<=height0("sec01")?body.style.backgroundColor="#FF608C":a>height0("sec01")&&a<=height0("sec01")+height0("sec02")?body.style.backgroundColor="white":a>height0("sec01")+height0("sec02")&&a<=height0("sec01")+height0("sec02")+height0("sec03")?(body.style.backgroundColor="#00C1B5",document.getElementById("#whiteBackgoundLink0").style.color="white"):a>height0("sec01")+height0("sec02")+height0("sec03")&&a<=height0("sec01")+height0("sec02")+height0("sec03")+height0("sec04")?body.style.backgroundColor="#FF6519":a>height0("sec01")+height0("sec02")+height0("sec03")+height0("sec04")&&a<=height0("sec01")+height0("sec02")+height0("sec03")+height0("sec04")+height0("sec05")?body.style.backgroundColor="#FFBE00":a>height0("sec01")+height0("sec02")+height0("sec03")+height0("sec04")+height0("sec05")&&a<=height0("sec01")+height0("sec02")+height0("sec03")+height0("sec04")+height0("sec05")+height0("sec06")?body.style.backgroundColor="#1D3FBB":body.style.backgroundColor="#E30512"},console.log(body.style.backgroundColor),"white"==body.style.backgroundColor&&(document.getElementById("#whiteBackgoundLink0").style.color="#FF608C");