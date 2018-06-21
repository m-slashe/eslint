/**
 * @fileoverview Seila
 * @author Murilo
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Seila",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
      return {
        Literal(node) {
            if(typeof node.value === 'string'){
                const parent = node.parent;
                if(parent && parent.key === node){
                    return;
                }
                if(parent && parent.callee){
                    let callee = parent.callee;
                    if(callee.object.name === '$translate' && callee.property.name === 'instant'){
                        return;
                    }       
              }     
              context.report(node, 'Não use string cravadas');
            }
        }
      };
    }
};
