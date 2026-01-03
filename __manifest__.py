{
    'name': 'POS Product Description',
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Display product description in POS product information popup',
    'description': """
        This module adds product description display to the POS interface.
        Features:
        - Shows product description in product information popup
        - Displays sales description field
        - Easy to use for pharmacy and retail businesses
    """,
    'author': 'Mireau-Jules SAINT-LOUIS',
    'website': '',
    'depends': ['point_of_sale'],
    'data': [],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_product_description/static/src/xml/product_info_popup.xml',
            'pos_product_description/static/src/css/pos_product_description.css',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
