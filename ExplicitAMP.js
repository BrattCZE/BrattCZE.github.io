define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function (APIConstructor, ampExtension) {

    var API = new APIConstructor();
    var baranUrl = "https://brattcze.github.io/Foto/";
    var bretaUrl = "https://baranan.github.io/minno-tasks/images/ampImages/"

    var obj = {
        primeCats: [
            {
                nameForLogging : 'chinese',  //Will be used in the logging
                //An array of all media objects for this category. The default is pic1-pic200.jpg
                mediaArray : [
                    {image : 'pic1.jpg'}, {image : 'pic2.jpg'}, {image : 'pic3.jpg'}, {image : 'pic4.jpg'}, {image : 'pic5.jpg'}, {image : 'pic6.jpg'}, {image : 'pic7.jpg'}, {image : 'pic8.jpg'}, {image : 'pic9.jpg'},
                    {image : 'pic10.jpg'}, {image : 'pic11.jpg'}, {image : 'pic12.jpg'}, {image : 'pic13.jpg'}, {image : 'pic14.jpg'}, {image : 'pic15.jpg'}, {image : 'pic16.jpg'}, {image : 'pic17.jpg'}, {image : 'pic18.jpg'}, {image : 'pic19.jpg'},
                    {image : 'pic20.jpg'}, {image : 'pic21.jpg'}, {image : 'pic22.jpg'}, {image : 'pic23.jpg'}, {image : 'pic24.jpg'}, {image : 'pic25.jpg'}, {image : 'pic26.jpg'}, {image : 'pic27.jpg'}, {image : 'pic28.jpg'}, {image : 'pic29.jpg'},
                    {image : 'pic30.jpg'}, {image : 'pic31.jpg'}, {image : 'pic32.jpg'}, {image : 'pic33.jpg'}, {image : 'pic34.jpg'}, {image : 'pic35.jpg'}, {image : 'pic36.jpg'}, {image : 'pic37.jpg'}, {image : 'pic38.jpg'}, {image : 'pic39.jpg'},
                    {image : 'pic40.jpg'}, {image : 'pic41.jpg'}, {image : 'pic42.jpg'}, {image : 'pic43.jpg'}, {image : 'pic44.jpg'}, {image : 'pic45.jpg'}, {image : 'pic46.jpg'}, {image : 'pic47.jpg'}, {image : 'pic48.jpg'}, {image : 'pic49.jpg'},
                    {image : 'pic50.jpg'}, {image : 'pic51.jpg'}, {image : 'pic52.jpg'}, {image : 'pic53.jpg'}, {image : 'pic54.jpg'}, {image : 'pic55.jpg'}, {image : 'pic56.jpg'}, {image : 'pic57.jpg'}, {image : 'pic58.jpg'}, {image : 'pic59.jpg'},
                    {image : 'pic60.jpg'}, {image : 'pic61.jpg'}, {image : 'pic62.jpg'}, {image : 'pic63.jpg'}, {image : 'pic64.jpg'}, {image : 'pic65.jpg'}, {image : 'pic66.jpg'}, {image : 'pic67.jpg'}, {image : 'pic68.jpg'}, {image : 'pic69.jpg'},
                    {image : 'pic70.jpg'}, {image : 'pic71.jpg'}, {image : 'pic72.jpg'}, {image : 'pic73.jpg'}, {image : 'pic74.jpg'}, {image : 'pic75.jpg'}, {image : 'pic76.jpg'}, {image : 'pic77.jpg'}, {image : 'pic78.jpg'}, {image : 'pic79.jpg'},
                    {image : 'pic80.jpg'}, {image : 'pic81.jpg'}, {image : 'pic82.jpg'}, {image : 'pic83.jpg'}, {image : 'pic84.jpg'}, {image : 'pic85.jpg'}, {image : 'pic86.jpg'}, {image : 'pic87.jpg'}, {image : 'pic88.jpg'}, {image : 'pic89.jpg'},
                    {image : 'pic90.jpg'}, {image : 'pic91.jpg'}, {image : 'pic92.jpg'}, {image : 'pic93.jpg'}, {image : 'pic94.jpg'}, {image : 'pic95.jpg'}, {image : 'pic96.jpg'}, {image : 'pic97.jpg'}, {image : 'pic98.jpg'}, {image : 'pic99.jpg'},
                    {image : 'pic110.jpg'}, {image : 'pic111.jpg'}, {image : 'pic112.jpg'}, {image : 'pic113.jpg'}, {image : 'pic114.jpg'}, {image : 'pic115.jpg'}, {image : 'pic116.jpg'}, {image : 'pic117.jpg'}, {image : 'pic118.jpg'}, {image : 'pic119.jpg'},
                    {image : 'pic120.jpg'}, {image : 'pic121.jpg'}, {image : 'pic122.jpg'}, {image : 'pic123.jpg'}, {image : 'pic124.jpg'}, {image : 'pic125.jpg'}, {image : 'pic126.jpg'}, {image : 'pic127.jpg'}, {image : 'pic128.jpg'}, {image : 'pic129.jpg'},
                    {image : 'pic130.jpg'}, {image : 'pic131.jpg'}, {image : 'pic132.jpg'}, {image : 'pic133.jpg'}, {image : 'pic134.jpg'}, {image : 'pic135.jpg'}, {image : 'pic136.jpg'}, {image : 'pic137.jpg'}, {image : 'pic138.jpg'}, {image : 'pic139.jpg'},
                    {image : 'pic140.jpg'}, {image : 'pic141.jpg'}, {image : 'pic142.jpg'}, {image : 'pic143.jpg'}, {image : 'pic144.jpg'}, {image : 'pic145.jpg'}, {image : 'pic146.jpg'}, {image : 'pic147.jpg'}, {image : 'pic148.jpg'}, {image : 'pic149.jpg'},
                    {image : 'pic150.jpg'}, {image : 'pic151.jpg'}, {image : 'pic152.jpg'}, {image : 'pic153.jpg'}, {image : 'pic154.jpg'}, {image : 'pic155.jpg'}, {image : 'pic156.jpg'}, {image : 'pic157.jpg'}, {image : 'pic158.jpg'}, {image : 'pic159.jpg'},
                    {image : 'pic160.jpg'}, {image : 'pic161.jpg'}, {image : 'pic162.jpg'}, {image : 'pic163.jpg'}, {image : 'pic164.jpg'}, {image : 'pic165.jpg'}, {image : 'pic166.jpg'}, {image : 'pic167.jpg'}, {image : 'pic168.jpg'}, {image : 'pic169.jpg'},
                    {image : 'pic170.jpg'}, {image : 'pic171.jpg'}, {image : 'pic172.jpg'}, {image : 'pic173.jpg'}, {image : 'pic174.jpg'}, {image : 'pic175.jpg'}, {image : 'pic176.jpg'}, {image : 'pic177.jpg'}, {image : 'pic178.jpg'}, {image : 'pic179.jpg'},
                    {image : 'pic180.jpg'}, {image : 'pic181.jpg'}, {image : 'pic182.jpg'}, {image : 'pic183.jpg'}, {image : 'pic184.jpg'}, {image : 'pic185.jpg'}, {image : 'pic186.jpg'}, {image : 'pic187.jpg'}, {image : 'pic188.jpg'}, {image : 'pic189.jpg'},
                    {image : 'pic190.jpg'}, {image : 'pic191.jpg'}, {image : 'pic192.jpg'}, {image : 'pic193.jpg'}, {image : 'pic194.jpg'}, {image : 'pic195.jpg'}, {image : 'pic196.jpg'}, {image : 'pic197.jpg'}, {image : 'pic198.jpg'}, {image : 'pic199.jpg'},
                    {image : 'pic200.jpg'}
                ]

            }
        ],
        targetCats :  [
            {
                nameForFeedback: 'Romov??',  //Will be used in the user feedback
                nameForLogging: 'Romov??', //Will be used in the logging
                //An array of all media objects for this category.
                mediaArray: [
                    {image: 'b01.jpg'},
                    {image: 'b02.jpg'},
                    {image: 'b03.jpg'},
                    {image: 'b04.jpg'},
                    {image: 'b05.jpg'},
                    {image: 'b06.jpg'},
                    {image: 'b07.jpg'},
                    {image: 'b08.jpg'},
                    {image: 'b09.jpg'},
                    {image: 'b10.jpg'},
                    {image: 'b11.jpg'},
                    {image: 'b12.jpg'},
                    {image: 'b13.jpg'},
                    {image: 'b14.jpg'},
                    {image: 'b15.jpg'},
                    {image: 'b16.jpg'},
                    {image: 'b17.jpg'},
                    {image: 'b18.jpg'},
                    {image: 'b19.jpg'},
                    {image: 'w01.jpg'},
                    {image: 'w02.jpg'},
                    {image: 'w03.jpg'},
                    {image: 'w04.jpg'},
                    {image: 'w05.jpg'},
                    {image: 'w06.jpg'},
                    {image: 'w07.jpg'},
                    {image: 'w08.jpg'},
                    {image: 'w09.jpg'},
                    {image: 'w10.jpg'},
                    {image: 'w11.jpg'},
                    {image: 'w12.jpg'},
                    {image: 'w13.jpg'},
                    {image: 'w14.jpg'},
                    {image: 'w15.jpg'},
                    {image: 'w16.jpg'},
                    {image: 'w17.jpg'},
                    {image: 'w18.jpg'},
                    {image: 'w19.jpg'},]
            }
        ],
        exampleMaskStimulus : {
            css : {color:'000000', 'font-size':'3em'},
            media : {image:'ampmaskr.jpg'}
        },
        examplePrimeStimulus:
            {
                nameForLogging: 'examplePrime', //Will be used in the logging
                //An array of all media objects for this category.
                mediaArray: [{image: 'ampchair.jpg'}, {image: 'amplamp.jpg'}, {image: 'ampumbrella.jpg'}]
            },

        maskStimulus : {
            css : {color:'000000', 'font-size':'3em'},
            media : {image:'ampmask.jpg'}
        },
        base_url: {//Where are your images at?
            image: ''
        },
        sortingLabel1: 'p????jemn??j????', //Response is coded as 0.
        sortingLabel2: 'nep????jemn??j????',  //Response is coded as 1.
        randomizeLabelSides: false, //IF false, then label1 is on the left, and label2 is on the right.
        exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' +
            'Te?? Va????m ??kolem bude pro zm??nu hodnotit obli??eje. Stiskn??te kl??vesu <B>rightKey</B> pokud targetCat je vizu??ln?? rightAttribute ne?? pr??m??rn?? targetCat. ' +
            'Stiskn??te kl??vesu <b>leftKey</b> pokud je vizu??ln?? leftAttribute ne?? pr??m??rn??.<br/><br/>' +
            'Jednotliv?? polo??ky se velmi rychle zobraz?? a zmiz??.  ' +
            'Stejn?? jako v p??echoz?? ????sti v??zkumu vych??z??me z toho, ??e ????nsk?? piktogramy, kter?? jste hodnotili v minul?? ????sti, V??s mohou ovlivnit p??i hodnocen?? vizu??ln?? p????jemnosti jednotliv??ch obli??ej??. Op??t n??s zaj??m??, jak dob??e jsou lid?? schopni izolovat tento vliv p??i hodnocen?? n??jak??ho objektu. Pokuste se proto pros??m co nejv??ce izolovat tento vliv. V t??to ????sti n??s zaj??m?? Va??e up????mn?? hodnocen?? vizu??ln?? l??bivosti prom??tan??ch obli??ej??.<br/><br/></p>' +
            '<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' +
            'A?? na to budete p??ipraveni, stisknut??m tla????tka <b>mezern??k</b> spust??te p??r cvi??n??ch pokus??.</p>' +
            '<p style="font-size:12px; text-align:center; font-family:arial">' +
            '<color="000000">[1. kolo ze nBlocks]</p></div>',
        firstBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' +
            "Jde to rychle, co? Nevad??, pokud si n??kter?? nestihnete detailn?? prohl??dnout. " +
            '??i??te se Va????m vnit??n??m pocitem.<br/><br/>' +
            'Soust??e??te se na ka??d?? targetCat a hodno??e, jestli je vizu??ln?? rightAttribute ne?? dle Va??eho n??zoru pr??m??rn?? targetCat stisknut??m kl??vesy <b>rightKey</b>, ' +
            'nebo vizu??ln?? leftAttribute ne?? pr??m??r stisknut??m kl??vesy <b>leftKey</b>.<br/><br/>' +
            'Hodno??te pouze targetCat a ne polo??ky, kter?? jim p??edch??zej??. ' +
            'N??kdy V??m budou moci p??ipadat rozptyluj??c??. To je v po????dku.<br/><br/>' +
            '<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' +
            'P??ipraveni? Stiskn??te <b>mezern??k</b>.</p>' +
            '<p style="font-size:12px; text-align:center; font-family:arial">' +
            '<color="000000">[2. kolo ze nBlocks]</p></div>',
        middleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' +
            'Pokra??ujte do dal????ho kola ??kolu. ' +
            'Pravidla jsou st??le stejn??:<br/><br/>' +
            'Soust??e??te se na ka??d?? targetCat a hodno??e, jestli je vizu??ln?? rightAttribute ne?? dle Va??eho n??zoru pr??m??rn?? targetCat stisknut??m kl??vesy <b>rightKey</b>, ' +
            'nebo vizu??ln?? leftAttribute ne?? pr??m??r stisknut??m kl??vesy <b>leftKey</b>.<br/><br/>' +
            'Hodno??te pouze targetCat a ne polo??ky, kter?? jim p??edch??zej??. ' +
            'Tyto polo??ky V??s mohou rozptylovat. ??i??te se v??ak p??i hodnocen?? Va????m vnit??n??m pocitem.<br/><br/>' +
            '<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' +
            'P??ipraveni? Stiskn??te <b>mezern??k</b>.</p>' +
            '<p style="font-size:12px; text-align:center; font-family:arial">' +
            '<color="000000">[blockNum. kolo ze nBlocks]</p></div>',
        lastBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' +
            'P??ipraveni na FIN??LN?? kolo? ' +
            'Pravidla sou po????d a st??le stejn??:<br/><br/>' +
            'Soust??e??te se na ka??d?? targetCat a hodno??e, jestli je vizu??ln?? rightAttribute ne?? dle Va??eho n??zoru pr??m??rn?? targetCat stisknut??m kl??vesy <b>rightKey</b>, ' +
            'nebo vizu??ln?? leftAttribute ne?? pr??m??r stisknut??m kl??vesy <b>leftKey</b>.<br/><br/>' +
            'Hodno??te pouze targetCat a ne polo??ky, kter?? jim p??edch??zej??. ' +
            'Tyto polo??ky V??s mohou rozptylovat. ??i??te se v??ak p??i hodnocen?? Va????m vnit??n??m pocitem.<br/><br/>' +
            '<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' +
            'P??ipraveni? Stiskn??te <b>mezern??k</b>.</p>' +
            '<p style="font-size:12px; text-align:center; font-family:arial">' +
            '<color="000000">[blockNum. kolo ze nBlocks]</p></div>',
        targetCat: 'obli??ej', //The name of the targets (used in the instructions)
        endText: '<div><p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial"><color="FFFFFF">' +
            '??sp????n?? jste splnili ??kol. Skv??l?? pr??ce!<br/><br/>Zm????kn??te "mezern??k" pro pokra??ov??n?? do dal???? ????sti v??zkumu.</p></div>',
        targetDuration: 300,//Duration of target presentation.
        exampleBlock_targetDuration: 300,
        trialsInBlock : [33,33,34], //Number of trials in each block

    };


    for (let i = 0; i < obj.targetCats[0].mediaArray.length; i++) {
        obj.targetCats[0].mediaArray[i].image = baranUrl + obj.targetCats[0].mediaArray[i].image;
    }

    for (let i = 0; i < obj.primeCats.length; i++) {
        for (let j = 0; j < obj.primeCats[i].mediaArray.length; j++) {
            obj.primeCats[i].mediaArray[j].image = bretaUrl + obj.primeCats[i].mediaArray[j].image;
        }
    }

    for (let i = 0; i < obj.examplePrimeStimulus.mediaArray.length; i++) {
        obj.examplePrimeStimulus.mediaArray[i].image = bretaUrl +  obj.examplePrimeStimulus.mediaArray[i].image;
    }

    obj.exampleMaskStimulus.media.image = bretaUrl + obj.exampleMaskStimulus.media.image;
    obj.maskStimulus.media.image = bretaUrl + obj.maskStimulus.media.image;

    return ampExtension(obj);
});
