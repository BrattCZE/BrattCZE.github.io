define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Romové',  //Will be used in the user feedback 
				nameForLogging : 'Romové', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b01.jpg'}, 
					{image : 'b02.jpg'}, 
					{image : 'b03.jpg'}, 
					{image : 'b04.jpg'}, 
					{image : 'b05.jpg'}, 
					{image : 'b06.jpg'}, 
					{image : 'b07.jpg'}, 
					{image : 'b08.jpg'}, 
					{image : 'b09.jpg'}, 
					{image : 'b10.jpg'}, 
					{image : 'b11.jpg'}, 
					{image : 'b12.jpg'}]

			}, 
			{
				nameForFeedback : 'Běloši',  //Will be used in the user feedback 
				nameForLogging : 'Běloši', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'w01.jpg'}, 
					{image : 'w02.jpg'}, 
					{image : 'w03.jpg'}, 
					{image : 'w04.jpg'}, 
					{image : 'w05.jpg'}, 
					{image : 'w06.jpg'}, 
					{image : 'w07.jpg'}, 
					{image : 'w08.jpg'}, 
					{image : 'w09.jpg'}, 
					{image : 'w10.jpg'}, 
					{image : 'w11.jpg'}, 
					{image : 'w12.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		},
		sortingLabel1 : 'příjemnější', //Response is coded as 0. 
		sortingLabel2 : 'nepříjemnější',  //Response is coded as 1.
		randomizeLabelSides : false, //IF false, then label1 is on the left, and label2 is on the right.
		exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Vaším úkolem bude zhodnotit vzhled obrazců, které pro Vás mohou mít abstraktní povahu (např. čínské piktogramy). Stiskněte klávesu <B>rightKey</B> pokud targetCat je vizuálně rightAttribute než průměrný targetCat. ' + 
			'Stiskněte klávesu <b>leftKey</b> pokud je vizuálně leftAttribute než průměrný.<br/><br/>' + 
			'Jednotlivé položky se velmi rychle zobrazí a zmizí.  ' + 
			'Je důležité zdůraznit, že fotografie reálných objektů (např. obličejů) mohou někdy ovlivnit úsudek lidí při hodnocení abstraktních obrazců. Proto nás zajímá do jaké míry jsou lidé schopni vyhnout se těmto vlivům při hodnocení abstraktních obrazců. Zkuste proto prosím vyvinout co nejvyšší úsilí k tomu, abyste se vyhnuli ovlivnění fotografiemi reálných objektů. Dejte nám prosím Vaše upřímné hodnocení abstraktních obrazců bez ohledu na fotografie, které jim předchází.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Až na to budete připraveni, stisknutím tlačítka <b>mezerník</b> spustíte pár cvičných pokusů.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[1. kolo ze nBlocks]</p></div>',
			firstBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			"Jde to rychle, co? Nevadí, pokud si některé nestihnete detailně prohlédnout" + 
			'Řiďte se Vaším vnitřním pocitem.<br/><br/>' + 
			'Soustřeďte se na každý targetCat a hodnoťe, jestli je vizuálně rightAttribute než dle Vašeho názoru průměrný targetCat stisknutím klávesy <b>rightKey</b>, ' + 
			'nebo vizuálně leftAttribute než průměr stisknutím klávesy <b>leftKey</b>.<br/><br/>' + 
			'Hodnoťte pouze targetCat a ne položky, které jim předcházejí. ' + 
			'Někdy Vám budou moci připadat rozptylující. To je v pořádku.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Připraveni? Stiskněte <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[2. kolo ze nBlocks]</p></div>',
			middleBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Pokračujte do dalšího kola úkolu. ' + 
			'Pravidla jsou stále stejná:<br/><br/>' + 
			'Soustřeďte se na každý targetCat a hodnoťe, jestli je vizuálně rightAttribute než dle Vašeho názoru průměrný targetCat stisknutím klávesy <b>rightKey</b>, ' + 
			'nebo vizuálně leftAttribute než průměr stisknutím klávesy <b>leftKey</b>.<br/><br/>' + 
			'Hodnoťte pouze targetCat a ne položky, které jim předcházejí. ' + 
			'Tyto položky Vás mohou rozptylovat. Řiďte se však při hodnocení Vaším vnitřním pocitem.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Připraveni? Stiskněte <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Připraveni na FINÁLNÍ kolo? ' + 
			'Pravidla sou pořád a stále stejná:<br/><br/>' + 
			'Soustřeďte se na každý targetCat a hodnoťe, jestli je vizuálně rightAttribute než dle Vašeho názoru průměrný targetCat stisknutím klávesy <b>rightKey</b>, ' + 
			'nebo vizuálně leftAttribute než průměr stisknutím klávesy <b>leftKey</b>.<br/><br/>' + 
			'Hodnoťte pouze targetCat a ne položky, které jim předcházejí. ' + 
			'Tyto položky Vás mohou rozptylovat. Řiďte se však při hodnocení Vaším vnitřním pocitem.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Připraveni? Stiskněte <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlockss]</p></div>',
		 targetCat : 'čínský piktogram', //The name of the targets (used in the instructions)
	});
});
