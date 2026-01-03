/** @odoo-module **/

import { loadFields } from "@point_of_sale/app/models/pos_model";
import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";

// Load template fields
loadFields("product.template", [
    "description",
    "description_sale",
]);

patch(PosStore.prototype, {
    async _processData(loadedData) {
        await super._processData(...arguments);

        const templates = loadedData["product.template"] || [];

        const templateById = {};
        for (const tmpl of templates) {
            templateById[tmpl.id] = tmpl;
        }

        // Attach template description to product
        for (const product of this.db.get_products()) {
            const tmplId = product.product_tmpl_id?.[0];
            const tmpl = templateById[tmplId];

            if (tmpl) {
                product.description_sale = tmpl.description_sale;
                product.description = tmpl.description;
            }
        }
    },
});
