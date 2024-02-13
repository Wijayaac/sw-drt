// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-affiliate/index.js
import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-affiliate',
	category: 'text-image',
	label: 'Voucher Affiliate Section',
	className: 'gp-affiliate',
	component: 'sw-cms-block-gp-affiliate',
	previewComponent: 'sw-cms-preview-gp-affiliate',
	defaultConfig: {
		marginBottom: '0',
		marginTop: '0',
		marginLeft: '0',
		marginRight: '0',
		sizingMode: 'boxed',
	},
	slots: {
		'first-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'first-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'second-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'second-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'third-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'third-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'fourth-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'fourth-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'fifth-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'fifth-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'six-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'six-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'seventh-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'seventh-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
		'eight-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'eight-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<div class="gp-voucher__item-content">
											<p class="gp-voucher__item-name">30% off on products</p>
											<p class="gp-voucher__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<button class="gp-voucher__item-button">GET OFFER</button>
										</div>
										`.trim(),
					},
				},
			},
		},
	}
})
