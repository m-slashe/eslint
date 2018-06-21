/**
 * @fileoverview Seila
 * @author Murilo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/teste"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("teste", rule, {
    valid: [
        "$translate.instant('SOME_KEY')",
        '{ property: 5 }'
    ],
    invalid: [
        {
            code: "'SOME_KEY'",
            errors: [{
                message: "Não use string cravadas",
                type: "Literal"
            }]
        },
        {
            code: "var teste = { \"property\": \"value\" }",
            errors: [{
                message: "Não use string cravadas",
                type: "Literal"
            }]
        }
    ]
});
