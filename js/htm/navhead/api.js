/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 $(function(){

	oHTML(
		[
			href('api.html','API',gM('Launch')+'" class="fixl fixt pd10'),
			(!/https?:/.test(loch)?
				[	href('./js','JavaScript'),
					href('./css',gM('CSS')),
					href('./js/i18n',gM('i18n')),
				].join(' | '):''),

			detail(gM('Native Math Function')+' (JavaScript)',
				API(tooltip['Math Function (Native JavaScript)']),
			),
			API(tooltip['API']),
		
			detail(gM('3rd-party'),
				XML.wrapE('q','Standing on the shoulders of giants!')+
				detail(href('./js/lib','Javascript'),
					ul(ZLR(zlr2('base64 jquery katex qrcode qrcode-decoder zlr echarts effects js-yaml terrain webslides aframe aframe-ar zdog','.js'))),1)+
				detail(href('./css/fonts','Fonts'),
					ul(ZLR(zlr2('KaTeX MaterialIcons-Regular','.woff2'))),1)
			,1), 
		
		].join(br)
	,1);
 });