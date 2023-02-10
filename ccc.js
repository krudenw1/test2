

function waitForText(element, text, callback, freq) {
    if (!element || !callback || typeof text !== 'string')
        throw new TypeError('Bad value');
    var interval = window.setInterval(test, freq || 200);
    function test() {
        if (!element.parentNode) // node detached, don't hold onto this
            window.clearInterval(interval);
        if (element.textContent === text) {
            window.clearInterval(interval);
            callback.call(element);
        }
    }
}

function pageFullyLoaded () {
    //window.liveView.ChatInfo.nNormalTextLengthLimit=1299
    //window.$('#write_area').unbind('cut copy paste')
    //console.log ("==> Page is fully loaded, including images.", new Date() );
    //console.log(document.location.href);
}

var myfunc = function(){
    //window.$('#write_area').unbind('cut copy paste')

    //document.getElementById('da_video').src = ''
};
//setTimeout(myfunc, 5000);


async function haha() {
    //window.alert = () => window.location.reload();

    console.log ("==> Page is fully loaded, including images.", new Date() );
    console.log(document.location.href);

    if( location.href.includes(url1) || location.href.includes(url2) )
    {

        //mobileOrderView('cwareSsgGoods', 'goods', '', 'N');
        //setTimeout(function(){
        //     goOptionGoodsOrder('cwareSsgGoods');
        //}, 1000);

        //첫구매
        waitForKeyElements ("#optionFirstDiv > div > div > div > button.btn.red", function(){document.querySelector("#optionFirstDiv > div > div > div > button.btn.red").click();},true);
        //둘재구매버튼
        waitForKeyElements ("#goOrder", function(){document.querySelector("#goOrder").click();},true);
        //iframe
        //waitForKeyElements ("#ct > div.app_popup.dimed > div > div > iframe", function(){mpg = document.querySelector("#ct > div.app_popup.dimed > div > div > iframe").src;},true);

    }

    else if(location.href.includes("m.shinsegaetvshopping.com/home?viewType"))
    {


        //window.location.href='https://m.shinsegaetvshopping.com/member/login';
        //console.log(document.body.innerHTML);
        //홈주소오류 불편어쩌고 뜨는거 막나테스트해봐야함
        if(document.body.innerHTML.includes("불편을 드려서 대단히"))
        {
            setTimeout(function() {window.location.reload()}, 100);
        }
        else

        {
            //로그아웃하면 홈으로보냄
            //로긴함수실행 알아서 비로그인시 로그인으로보냄
            javascript:Login();
        }
        //document.body.innerHTML
        //javascript:Login();

    }
    else if(location.href.includes("m.shinsegaetvshopping.com/member/login"))
    {
        //로그인
        document.getElementById("memId").value = id;
        document.getElementById("passwd").value = pw;
        document.getElementById("loginButton").click();



        //javascript:Login();
        //window.location.href='https://m.shinsegaetvshopping.com/member/login';

    }
    else if(location.href.includes("m.shinsegaetvshopping.com/broadcast/main") || location.href.includes("order/finish") )
    {
        //로그인후 메인페이지 or 주문완료페이지시 상품페이지로 보냄

        //javascript:Login();
        window.location.href='https://' + url2;

    }

    //https://
    else if(location.href.includes("/order/purchase"))
    {
        //팝업뜨면 새로고침 되려나모르겠다..

        //window.alert = () => location.reload();

        var newAudio = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
        newAudio.play();

        //var player3 = document.createElement('audio');
        //player3.src = 'https://assets.mixkit.co/sfx/preview/mixkit-facility-alarm-908.mp3';
        //player.preload = 'auto';
        //player3.play()

        let par1 = document.getElementById("web_popup1");
        par1.innerHTML = '<div style="color:blue"><div>';
        var jbBtn = document.createElement( 'button' );
        var jbBtnText = document.createTextNode( 'ssg' );
        jbBtn.appendChild( jbBtnText );
        jbBtn.setAttribute("style", "font-size:20pt;color:blue;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn);
        var jbBtn2 = document.createElement( 'button' );
        var jbBtnText2 = document.createTextNode( 'kakao' );
        jbBtn2.appendChild( jbBtnText2 );
        jbBtn2.setAttribute("style", "font-size:20pt;color:blue;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn2);

        var jbBtn3 = document.createElement( 'button' );
        var jbBtnText3 = document.createTextNode( 'payco' );
        jbBtn3.appendChild( jbBtnText3 );
        jbBtn3.setAttribute("style", "font-size:20pt;color:blue;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn3);

        var jbBtn4 = document.createElement( 'button' );
        var jbBtnText4 = document.createTextNode( 'smile' );
        jbBtn4.appendChild( jbBtnText4 );
        jbBtn4.setAttribute("style", "font-size:20pt;color:blue;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn4);

        var jbBtn5 = document.createElement( 'button' );
        var jbBtnText5 = document.createTextNode( '빠른' );
        jbBtn5.appendChild( jbBtnText5 );
        jbBtn5.setAttribute("style", "font-size:20pt;color:blue;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn5);

        var jbBtn6 = document.createElement( 'button' );
        var jbBtnText6 = document.createTextNode( '일반' );
        jbBtn6.appendChild( jbBtnText6 );
        jbBtn6.setAttribute("style", "font-size:20pt;color:blue;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn6);

        var jbBtn7 = document.createElement( 'button' );
        var jbBtnText7 = document.createTextNode( 'kcp' );
        jbBtn7.appendChild( jbBtnText7 );
        jbBtn7.setAttribute("style", "font-size:20pt;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn7);

        var jbBtn8 = document.createElement( 'button' );
        var jbBtnText8 = document.createTextNode( '토스' );
        jbBtn8.appendChild( jbBtnText8 );
        jbBtn8.setAttribute("style", "font-size:20pt;margin-left: 10px;margin-right: 10px;");
        par1.appendChild(jbBtn8);

        //var jbBtn9= document.createElement( 'button' );
        //var jbBtnText9 = document.createTextNode( '리로그인' );
        //jbBtn9.appendChild( jbBtnText9 );
        //jbBtn9.setAttribute("style", "font-size:20pt;margin-left: 10px;margin-right: 10px;");
        //par1.appendChild(jbBtn9);


        jbBtn.addEventListener ("click", function() {pay("ssgpay");}, false);
        jbBtn2.addEventListener ("click", function() {pay("kakao");}, false);
        jbBtn3.addEventListener ("click", function() {pay("payco");}, false);
        jbBtn4.addEventListener ("click", function() {pay("smilepay");}, false);
        jbBtn5.addEventListener ("click", function() {pay("tvpay");}, false);
        jbBtn6.addEventListener ("click", function() {pay("card");}, false);
        jbBtn7.addEventListener ("click", function() {pay2("kcp");}, false);
        jbBtn8.addEventListener ("click", function() {pay2("toss");}, false);
        //jbBtn9.addEventListener ("click", function() {relogin("toss");}, false);
        //나에게 안보내기
        if(sendtome == 1)
        {
            $("input[id*='giftME']").prop('checked',false);

            document.getElementById("giftconName").value = name;
            document.getElementById("giftconHp2").value = phone;
        }
        else
        {
            $("input[id*='giftME']").prop('checked',true);
        }

        //무한루프를 위한
        let kcpvalue = await GM.getValue("checkKCP", "0")
        let tossvalue = await GM.getValue("checkTOSS", "0")
        if(kcpvalue == 1)
        {
            console.log('kcp또클릭');
            //alert("aa");
            //setTimeout(function() {pay2("kcp");}, 3000);
            //속도빠르게 개선을위해 위에꺼보다 아래껄루
            waitForKeyElements ("#web_popup1 > button:nth-child(8)", function(){pay2("kcp");},true);

        }
        else if(tossvalue == 1)
        {
            console.log('toss또클릭');
            //alert("aa");
            //setTimeout(function() {pay2("toss");}, 3000);
            //속도빠르게 개선을위해 위에꺼보다 아래껄루
            waitForKeyElements ("#web_popup1 > button:nth-child(9)", function(){pay2("toss");},true);
        }

    }

    //무한루프 빠져나오기용 마이페이지나 최근본상품 페이지가면 탈출하게
    else if(location.href.includes("m.shinsegaetvshopping.com/mypage"))
    {
        console.log('탈출');
        await GM.setValue("checkKCP", "0");
        await GM.setValue("checkTOSS", "0");

    }
    //무한루프 빠져나오기용 마이페이지나 최근본상품 페이지가면 탈출하게
    else if(location.href.includes("m.shinsegaetvshopping.com/display/recent"))
    {
        console.log('탈출');
        await GM.setValue("checkKCP", "0");
        await GM.setValue("checkTOSS", "0");

    }
    //일반카드결제중 나이스페이pg잡힌거 이건무조건 뒤로 다른간편페이도 이주소를 써서 더체크해야하네
    else if(location.href.includes("web.nicepay.co.kr/v3/smart/auth/card"))
    {

        console.log('나이스페이 닥뒤로');
        //setTimeout(function(){window.history.back(); return false ;}, 100);
        //뒤로가기대신 리로그인
        setTimeout(function(){relogin("toss");}, 100);

    }
    //일반카드결제중 kcp잡힘
    else if(location.href.includes("smpay.kcp.co.kr"))
    {
        //if(GM_getValue("checkKCP") === 1)
        //if(GM_getValue("checkTOSS") === 1)
        //console.log('kcp');
        //console.log('CARDCHECKKCP'+CARDCHECKKCP);
        //console.log('CARDCHECKTOSS'+CARDCHECKTOSS);
        let kcpvalue = await GM.getValue("checkKCP", "0")
        let tossvalue = await GM.getValue("checkTOSS", "0")
        console.log('CARDCHECKKCP'+kcpvalue);
        console.log('CARDCHECKTOSS'+tossvalue);
        if(tossvalue==1)
        {
            console.log('kcp뒤로');
            //setTimeout(function(){window.history.back(); return false ;}, 100);
            //뒤로가기대신 리로그인
            setTimeout(function(){relogin("toss");}, 100);
        }
        else if(kcpvalue==1)
        {
            console.log('kcp성공');
            //성공했으니 2담는다
            await GM.setValue("checkKCP", "2");


            var newAudio1 = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
            newAudio1.play();

            var player = document.createElement('audio');
            player.src = 'https://assets.mixkit.co/sfx/preview/mixkit-facility-alarm-908.mp3';
            //player.preload = 'auto';
            player.play()



            //CARDCHECKKCP=2;
        }
    }
    //일반카드결제중 toss잡힘
    else if(location.href.includes("vbv.shinhancard.com"))
    {
        console.log('토스');
        //console.log(await GM.getValue("checkKCP"));

        //console.log('CARDCHECKTOSS'+localStorage.getItem("checkKCP"));
        //let kcpvalue1 = await GM.getValue("checkKCP", "0")
        //console.log('ㅅㅂ좀'+kcpvalue1);
        let kcpvalue = await GM.getValue("checkKCP", "0")
        let tossvalue = await GM.getValue("checkTOSS", "0")
        console.log('CARDCHECKKCP'+kcpvalue);
        console.log('CARDCHECKTOSS'+tossvalue);

        //console.log(await GM.getValue("checkKCP"));
        //console.log('CARDCHECKTOSS'+CARDCHECKTOSS);
        if(kcpvalue == 1)
        {
            console.log('토스 뒤로');
            //setTimeout(function(){window.history.back(); return false ;}, 100);
            //뒤로가기대신 리로그인
            setTimeout(function(){relogin("toss");}, 100);
        }
        else if(tossvalue == 1)
        {
            console.log('토스 성공');
            await GM.setValue("checkTOSS", "2")
            var player2 = document.createElement('audio');
            player2.src = 'https://assets.mixkit.co/sfx/preview/mixkit-facility-alarm-908.mp3';
            //player.preload = 'auto';
            player2.play()


            //CARDCHECKTOSS=2;
        }
    }
    else
    {
        //window.location.href = 'https://'+url;
    }

  
}


 async function pay(payname) {
        console.log(payname);

        if ( payname == 'tvpay' )
        {
            console.log(payname);
            hcLayer.show('layerOKPoint');
            document.getElementById("useOcbCardNo1").value = okcard1;
            document.getElementById("useOcbCardNo2").value = okcard2;
            document.getElementById("useOcbCardNo3").value = okcard3;
            document.getElementById("useOcbCardNo4").value = okcard4;
            $('#allCheckUseOcbPoint').prop('checked',true);
            document.getElementById("popUseOcbCardPasswd").value = okpassword;
            checkOcbPoint();
            document.getElementById("ocbPointAmt").click();
            //컬쳐결제페이지
            if (location.href.includes("display/detail/30116362"))
            {
                jQuery("#useOcbPointAmt").val(okpointculture);
                jQuery("#ocbPointAmt").val(okpointculture);
            }
            //신세계결제페이지
            else if (location.href.includes("display/detail/30117529"))
            {
                jQuery("#useOcbPointAmt").val(okpointsinse);
                jQuery("#ocbPointAmt").val(okpointsinse);
            }
            displayPrice();
            //빠른속도를 위해 무작정 3초기달리는대신에 이거씀
            //document.querySelector("#final_Payco > div.fi_button > button")
            //결제버튼보일때
            waitForKeyElements ("#final_Payco > div.fi_button > button", function(){
                $("[id*='pay_list_tab']").attr('style','display: block;');
                //$("li[id*='easyPay']").click();
                $('span:contains("간편결제")').click();
                //$("li[class*='tv_pay pay']").click();
                //$('span:contains( "빠른결제" )').click();
                $('span:contains("빠른결제")').click();
                payMethodClick01(payname);

                //$("input[id*='agreeChk']").attr('checked',true);
                // $("input[id*='agreeChkPolicy']").attr('checked',true);
                //$("input[id*='agreelabel']").attr('checked',true);
                //$("input[id*='agreeMemPolicy']").attr('checked',true);
                $("input[id*='agreeChk']").click();
                $("input[id*='agreeChkPolicy']").click();
                $("input[id*='agreelabel']").click();
                $("input[id*='agreeMemPolicy']").click();
                $("input[id*='agreeChk']").prop('checked',true);
                $("input[id*='agreeChkPolicy']").prop('checked',true);
                $("input[id*='agreelabel']").prop('checked',true);
                $("input[id*='agreeMemPolicy']").prop('checked',true);

            },true);

            //document.querySelector("#final_Payco > div.fi_price > div.fi_p_con > div.price > em").textContent


            //빠른결제만 동의해제되서 다시한번더함
            //setTimeout(function(){

            //$("input[id*='agreeChk']").attr('checked',true);
            // $("input[id*='agreeChkPolicy']").attr('checked',true);
            //$("input[id*='agreelabel']").attr('checked',true);
            //$("input[id*='agreeMemPolicy']").attr('checked',true);
            //$("input[id*='agreeChk']").click();
            //$("input[id*='agreeChkPolicy']").click();
            //$("input[id*='agreelabel']").click();
            //$("input[id*='agreeMemPolicy']").click();
            // $("input[id*='agreeChk']").prop('checked',true);
            // $("input[id*='agreeChkPolicy']").prop('checked',true);
            // $("input[id*='agreelabel']").prop('checked',true);
            //  $("input[id*='agreeMemPolicy']").prop('checked',true);
            //}, 4000);
        }
        else if ( payname == 'smilepay' )
        {




            //스페는 포인트쓰는게다름
            //컬쳐결제페이지
            if (location.href.includes("display/detail/30116362"))
            {

                console.log(payname);
                setTimeout(function(){
                    payMethodClick01(payname);
                    $("input[id*='smileAgree']").prop('checked',true);
                    $("input[id*='agreeChkPolicy']").prop('checked',true);
                    $("input[id*='agreeGoodlabel_Smilepay']").click();
                    $("input[id*='agreeMemPolicy']").click();
                    orderSave('01');
                }, 2000);

            }
            else if (location.href.includes("display/detail/30117529"))
            {

                hcLayer.show('layerOKPoint');
                document.getElementById("useOcbCardNo1").value = okcard1;
                document.getElementById("useOcbCardNo2").value = okcard2;
                document.getElementById("useOcbCardNo3").value = okcard3;
                document.getElementById("useOcbCardNo4").value = okcard4;
                $('#allCheckUseOcbPoint').prop('checked',true);
                document.getElementById("popUseOcbCardPasswd").value = okpassword;
                checkOcbPoint();
                document.getElementById("ocbPointAmt").click();
                jQuery("#useOcbPointAmt").val(okpointsinse);
                jQuery("#ocbPointAmt").val(okpointsinse);
                displayPrice();
                setTimeout(function(){
                    payMethodClick01(payname);
                    $("input[id*='smileAgree']").prop('checked',true);
                    $("input[id*='agreeChkPolicy']").prop('checked',true);
                    $("input[id*='agreeGoodlabel_Smilepay']").click();
                    $("input[id*='agreeMemPolicy']").click();
                    orderSave('01');
                }, 3000);

            }
        }
        else if ( payname == 'card' )
        {
            //전역변수 카드체크1
            //await GM.setValue("checkKCP", "1"); //이거주석끄면 무한온
            let kcpvalue1 = await GM.getValue("checkKCP", "0")
            console.log('ㅅㅂ좀'+kcpvalue1);
            //localStorage.setItem("checkKCP", "1");
            //console.log('체크?'+localStorage.getItem("checkKCP"));
            hcLayer.show('layerOKPoint');
            document.getElementById("useOcbCardNo1").value = okcard1;
            document.getElementById("useOcbCardNo2").value = okcard2;
            document.getElementById("useOcbCardNo3").value = okcard3;
            document.getElementById("useOcbCardNo4").value = okcard4;
            $('#allCheckUseOcbPoint').prop('checked',true);
            document.getElementById("popUseOcbCardPasswd").value = okpassword;
            checkOcbPoint();
            document.getElementById("ocbPointAmt").click();
            //컬쳐결제페이지
            if (location.href.includes("display/detail/30116362"))
            {
                jQuery("#useOcbPointAmt").val(okpointculture);
                jQuery("#ocbPointAmt").val(okpointculture);
            }
            //신세계결제페이지
            else if (location.href.includes("display/detail/30117529"))
            {
                jQuery("#useOcbPointAmt").val(okpointsinse);
                jQuery("#ocbPointAmt").val(okpointsinse);
            }
            displayPrice();
            setTimeout(function(){
                $("[id*='pay_list_tab']").attr('style','display: block;');
                //jQuery('#settleVanCode').val("0120");
                //jQuery('#settleGbName').empty().append("신용");
                //jQuery("#payMethodCode").val("1");
                $("a[href*='javascript:payMethodClick01']").click();
                //document.querySelector("#pay_list_tab2 > ul.pay_tab.tab_ui.new.no_cash > li.credit_card > a > span");
                payMethodClick01(payname);
                $("select[id*='cardCode']").val('14').prop("selected",true);
                $("select[id*='cardquota']").val('00').prop("selected",true);
                $("input[id*='agreeChk']").prop('checked',true);
                $("input[id*='agreeChkPolicy']").prop('checked',true);
                $("input[id*='agreelabel']").prop('checked',true);
                $("input[id*='agreeMemPolicy']").prop('checked',true);
                orderSave('01');
            }, 3000);
        }
        else
        {
            //document.querySelector("#web_popup1 > button:nth-child(7)")
            waitForKeyElements ("#web_popup1 > button:nth-child(7)", function(){
                //ok포인트넣어져서 '사용' 텍스트써져있는거체크
                hcLayer.show('layerOKPoint');
                document.getElementById("useOcbCardNo1").value = okcard1;
                document.getElementById("useOcbCardNo2").value = okcard2;
                document.getElementById("useOcbCardNo3").value = okcard3;
                document.getElementById("useOcbCardNo4").value = okcard4;
                $('#allCheckUseOcbPoint').prop('checked',true);
                document.getElementById("popUseOcbCardPasswd").value = okpassword;
                checkOcbPoint();
                document.getElementById("ocbPointAmt").click();
                //컬쳐결제페이지
                if (location.href.includes("display/detail/30116362"))
                {
                    jQuery("#useOcbPointAmt").val(okpointculture);
                    jQuery("#ocbPointAmt").val(okpointculture);
                }
                //신세계결제페이지
                else if (location.href.includes("display/detail/30117529"))
                {
                    jQuery("#useOcbPointAmt").val(okpointsinse);
                    jQuery("#ocbPointAmt").val(okpointsinse);
                }
                displayPrice();



            },true);


            //document.querySelector("#allPointUseArea > spna")
            ////오케이 적용 부분 엘레멘트 텍스트 사용 일때까지 대기한후 함수 실행
            // say you want the first <p> in the DOM tree
            var elm = document.querySelector("#allPointUseArea > spna");
            // attach the condition
            //waitForText(elm, '9,999', () => console.log('Text appears'));
            //서버가 못따라간다 딜레이넣어야함
            waitForText(elm, '사용', () => {
                setTimeout(function(){
                    payMethodClick01(payname);
                    $("select[id*='cardCode']").val('14').prop("selected",true);
                    $("select[id*='cardquota']").val('00').prop("selected",true);
                    $("input[id*='agreeChk']").prop('checked',true);
                    $("input[id*='agreeChkPolicy']").prop('checked',true);
                    $("input[id*='agreelabel']").prop('checked',true);
                    $("input[id*='agreeMemPolicy']").prop('checked',true);
                    orderSave('01');
                }, 500);

            });









        }
    }

    async function pay2(payname) {
        console.log(payname);

        if ( payname == 'kcp' )
        {


            //document.querySelector("#web_popup1 > button:nth-child(7)")
            waitForKeyElements ("#web_popup1 > button:nth-child(7)", function(){
                //팝업뜨면 새로고침 되려나모르겠다..

                //window.alert = () => location.reload();
                //전역변수 카드체크1
                //waitfor안이라 await없어도되나봄?
                //await GM.setValue("checkKCP", "1"); //이거주석끄면 무한온
                //let kcpvalue1 = await GM.getValue("checkKCP", "0")

                GM.setValue("checkKCP", "1"); //이거주석끄면 무한온
                let kcpvalue1 = GM.getValue("checkKCP", "0")
                console.log('ㅅㅂ좀'+kcpvalue1);
                //localStorage.setItem("checkKCP", "1");
                //console.log('체크?'+localStorage.getItem("checkKCP"));
                hcLayer.show('layerOKPoint');
                document.getElementById("useOcbCardNo1").value = okcard1;
                document.getElementById("useOcbCardNo2").value = okcard2;
                document.getElementById("useOcbCardNo3").value = okcard3;
                document.getElementById("useOcbCardNo4").value = okcard4;
                $('#allCheckUseOcbPoint').prop('checked',true);
                document.getElementById("popUseOcbCardPasswd").value = okpassword;
                checkOcbPoint();
                document.getElementById("ocbPointAmt").click();
                //컬쳐결제페이지
                if (location.href.includes("display/detail/30116362"))
                {
                    jQuery("#useOcbPointAmt").val(okpointculture);
                    jQuery("#ocbPointAmt").val(okpointculture);
                }
                //신세계결제페이지
                else if (location.href.includes("display/detail/30117529"))
                {
                    jQuery("#useOcbPointAmt").val(okpointsinse);
                    jQuery("#ocbPointAmt").val(okpointsinse);
                }
                displayPrice();



            },true);






            //document.querySelector("#allPointUseArea > spna")
            ////오케이 적용 부분 엘레멘트 텍스트 사용 일때까지 대기한후 함수 실행
            // say you want the first <p> in the DOM tree
            var elm = document.querySelector("#allPointUseArea > spna");
            // attach the condition
            //waitForText(elm, '9,999', () => console.log('Text appears'));
            //서버가 못따라간다 딜레이넣어야함
            waitForText(elm, '사용', () => {
                setTimeout(function(){
                    $("[id*='pay_list_tab']").attr('style','display: block;');
                    //jQuery('#settleVanCode').val("0120");
                    //jQuery('#settleGbName').empty().append("신용");
                    //jQuery("#payMethodCode").val("1");
                    $("a[href*='javascript:payMethodClick01']").click();
                    //document.querySelector("#pay_list_tab2 > ul.pay_tab.tab_ui.new.no_cash > li.credit_card > a > span");
                    payMethodClick01('card');
                    $("select[id*='cardCode']").val('14').prop("selected",true);
                    $("select[id*='cardquota']").val('00').prop("selected",true);
                    $("input[id*='agreeChk']").prop('checked',true);
                    $("input[id*='agreeChkPolicy']").prop('checked',true);
                    $("input[id*='agreelabel']").prop('checked',true);
                    $("input[id*='agreeMemPolicy']").prop('checked',true);
                    orderSave('01');
                }, 500);
            });




        }
        else if ( payname == 'toss' )
        {
            //팝업뜨면 새로고침 되려나모르겠다..

            //window.alert = () => location.reload();
            //전역변수 카드체크1
            await GM.setValue("checkTOSS", "1"); //이거주석끄면 무한온

            //let kcpvalue1 = await GM.getValue("checkKCP", "0")
            //console.log('ㅅㅂ좀'+kcpvalue1);
            //localStorage.setItem("checkKCP", "1");
            //console.log('체크?'+localStorage.getItem("checkKCP"));
            hcLayer.show('layerOKPoint');
            document.getElementById("useOcbCardNo1").value = okcard1;
            document.getElementById("useOcbCardNo2").value = okcard2;
            document.getElementById("useOcbCardNo3").value = okcard3;
            document.getElementById("useOcbCardNo4").value = okcard4;
            $('#allCheckUseOcbPoint').prop('checked',true);
            document.getElementById("popUseOcbCardPasswd").value = okpassword;
            checkOcbPoint();
            document.getElementById("ocbPointAmt").click();
            //컬쳐결제페이지
            if (location.href.includes("display/detail/30116362"))
            {
                jQuery("#useOcbPointAmt").val(okpointculture);
                jQuery("#ocbPointAmt").val(okpointculture);
            }
            //신세계결제페이지
            else if (location.href.includes("display/detail/30117529"))
            {
                jQuery("#useOcbPointAmt").val(okpointsinse);
                jQuery("#ocbPointAmt").val(okpointsinse);
            }
            displayPrice();
            setTimeout(function(){
                $("[id*='pay_list_tab']").attr('style','display: block;');
                //jQuery('#settleVanCode').val("0120");
                //jQuery('#settleGbName').empty().append("신용");
                //jQuery("#payMethodCode").val("1");
                $("a[href*='javascript:payMethodClick01']").click();
                //document.querySelector("#pay_list_tab2 > ul.pay_tab.tab_ui.new.no_cash > li.credit_card > a > span");
                payMethodClick01('card');
                $("select[id*='cardCode']").val('14').prop("selected",true);
                $("select[id*='cardquota']").val('00').prop("selected",true);
                $("input[id*='agreeChk']").prop('checked',true);
                $("input[id*='agreeChkPolicy']").prop('checked',true);
                $("input[id*='agreelabel']").prop('checked',true);
                $("input[id*='agreeMemPolicy']").prop('checked',true);


            }, 3000);

        }

    }

    async function relogin(aa)
    {
        window.location.href = 'https://m.shinsegaetvshopping.com/member/logout';

        if ( window.location == 'https://m.shinsegaetvshopping.com/member/logout' ) {
            window.location.href='https://m.shinsegaetvshopping.com/member/login';
        }


        //window.location.replace("https://m.shinsegaetvshopping.com/member/login");







    }
	
