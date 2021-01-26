"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var router = express_1.Router();
router.get('/heroes', function (req, resp) {
    var query = "SELECT * FROM heroes;";
    mysql_1.default.ejecutarQuery(query, function (err, results) {
        if (err) {
            resp.status(400).json({
                ok: false,
                err: err
            });
        }
        else {
            resp.status(200).json({
                ok: true,
                heroes: results
            });
        }
    });
});
router.get('/heroes/:id', function (req, resp) {
    var id = req.params.id;
    var escapeId = mysql_1.default.instance.cnn.escape(id);
    var query = "\n        SELECT \n            * \n        FROM \n            heroes\n        WHERE id = " + escapeId + ";\n    ";
    mysql_1.default.ejecutarQuery(query, function (err, results) {
        if (err) {
            resp.status(400).json({
                ok: false,
                err: err
            });
        }
        else {
            resp.status(200).json({
                ok: true,
                heroe: results[0]
            });
        }
    });
});
exports.default = router;
