"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonProperty = exports.JsonObject = exports.JsonConverter = void 0;
var json_convert_options_1 = require("./json-convert-options");
var any_1 = require("./any");
/**
 * Decorator of a class that is a custom converter.
 *
 * @param target the class
 */
function JsonConverter(target) {
    target[json_convert_options_1.Settings.MAPPER_PROPERTY] = "";
}
exports.JsonConverter = JsonConverter;
/**
 * Decorator of a class that comes from a JSON object.
 *
 * @param target the class identifier or the class
 *
 * @returns
 *
 * @throws Error
 */
function JsonObject(target) {
    // target is the constructor or the custom class name
    var classIdentifier = "";
    var decorator = function (target) {
        target.prototype[json_convert_options_1.Settings.CLASS_IDENTIFIER] = classIdentifier.length > 0 ? classIdentifier : target.name;
        var mapping = target.prototype[json_convert_options_1.Settings.MAPPING_PROPERTY];
        // Make sure we replace the mapping names of all properties of this class
        if (!mapping)
            return;
        var unmappedKeys = Object.keys(mapping)
            .filter(function (val) { return val.indexOf(json_convert_options_1.Settings.CLASS_IDENTIFIER + ".") === 0; });
        for (var _i = 0, unmappedKeys_1 = unmappedKeys; _i < unmappedKeys_1.length; _i++) {
            var key = unmappedKeys_1[_i];
            mapping[key.replace(json_convert_options_1.Settings.CLASS_IDENTIFIER, target.prototype[json_convert_options_1.Settings.CLASS_IDENTIFIER])] =
                mapping[key];
            // We must delete the mapping without associated class since it will
            // cause issues with inheritance of mappings and overrides.
            delete mapping[key];
        }
    };
    var type = typeof target;
    switch (type) {
        // Decorator was @JsonObject(classId)
        case "string":
            classIdentifier = target;
            return decorator;
        // Decorator was @JsonObject
        // Decorator was @JsonObject()
        // Decorator was @JsonObject(123)
        case "function":
        case "undefined":
        default:
            throw new Error("Fatal error in JsonConvert. " +
                "It is mandatory to pass a string as parameter in the @JsonObject decorator.\n\n" +
                "Use @JsonObject(classId) where classId is a string.\n\n");
    }
}
exports.JsonObject = JsonObject;
/**
 * Decorator of a class property that comes from a JSON object.
 *
 * The second param can be either a type or a class of a custom converter.
 *
 * Use the following notation for the type:
 * - Primitive type: String|Number|Boolean
 * - Custom type: YourClassName
 * - Array type: [String|Number|Boolean|YourClassName]
 *
 * If you decide to use a custom converter, make sure this class implements the interface JsonCustomConvert from this package.
 *
 * @param jsonPropertyName optional param (default: classPropertyName) the property name in the expected JSON object
 * @param conversionOption optional param (default: Any), should be either the expected type (String|Boolean|Number|etc) or a custom converter class implementing JsonCustomConvert
 * @param isOptional optional param (default: false), if true, the json property does not have to be present in the object
 *
 * @returns
 *
 * @throws Error
 */
function JsonProperty() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return function (target, classPropertyName) {
        // target is the class
        var jsonPropertyName = classPropertyName;
        var conversionOption = any_1.Any;
        var isOptional = false;
        var exportNull = false;
        switch (params.length) {
            case 1:
                if (params[0] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as first parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Leave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                jsonPropertyName = params[0];
                break;
            case 2:
                if (params[0] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as first parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Leave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                if (params[1] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as second parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Use \"Any\" to allow any type. You can import this class from \"json2typescript\".\n\n");
                jsonPropertyName = params[0];
                conversionOption = params[1];
                break;
            case 3:
                if (params[0] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as first parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Leave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                if (params[1] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as second parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Use \"Any\" to allow any type. You can import this class from \"json2typescript\".\n\n");
                jsonPropertyName = params[0];
                conversionOption = params[1];
                isOptional = params[2];
                break;
            case 4:
                if (params[0] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as first parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Leave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                if (params[1] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as second parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Use \"Any\" to allow any type. You can import this class from \"json2typescript\".\n\n");
                if (params[2] === undefined)
                    throw new Error("Fatal error in JsonConvert. " +
                        "It is not allowed to explicitly pass \"undefined\" as second parameter in the @JsonProperty decorator.\n\n" +
                        "\tClass property: \n" +
                        "\t\t" + classPropertyName + "\n\n" +
                        "Use \"Any\" to allow any type. You can import this class from \"json2typescript\".\n\n");
                jsonPropertyName = params[0];
                conversionOption = params[1];
                isOptional = params[2];
                exportNull = params[3];
                break;
            default:
                break;
        }
        if (typeof (target[json_convert_options_1.Settings.MAPPING_PROPERTY]) === "undefined") {
            target[json_convert_options_1.Settings.MAPPING_PROPERTY] = [];
        }
        var jsonPropertyMappingOptions = new json_convert_options_1.MappingOptions();
        jsonPropertyMappingOptions.classPropertyName = classPropertyName;
        jsonPropertyMappingOptions.jsonPropertyName = jsonPropertyName;
        jsonPropertyMappingOptions.isOptional = isOptional ? isOptional : false;
        jsonPropertyMappingOptions.exportNull = exportNull ? exportNull : false;
        // Check if conversionOption is a type or a custom converter.
        if (typeof (conversionOption) !== "undefined" && conversionOption !== null && typeof (conversionOption[json_convert_options_1.Settings.MAPPER_PROPERTY]) !== "undefined") {
            jsonPropertyMappingOptions.customConverter = new conversionOption();
        }
        else {
            jsonPropertyMappingOptions.expectedJsonType = conversionOption;
        }
        // Save the mapping info
        if (typeof (target[json_convert_options_1.Settings.MAPPING_PROPERTY][json_convert_options_1.Settings.CLASS_IDENTIFIER + "." + classPropertyName]) === "undefined") {
            target[json_convert_options_1.Settings.MAPPING_PROPERTY][json_convert_options_1.Settings.CLASS_IDENTIFIER + "." + classPropertyName] = jsonPropertyMappingOptions;
        }
        else {
            throw new Error("Fatal error in JsonConvert. " +
                "It is not allowed to add multiple decorators for the same property.\n\n" +
                "\tClass property: \n" +
                "\t\t" + classPropertyName + "\n\n");
        }
    };
}
exports.JsonProperty = JsonProperty;
//# sourceMappingURL=json-convert-decorators.js.map