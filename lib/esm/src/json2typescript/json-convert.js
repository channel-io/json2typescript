import { OperationMode, PropertyMatchingRule, ValueCheckingMode } from "./json-convert-enums";
import { Settings } from "./json-convert-options";
import { Any } from "./any";
/**
 * Offers a simple API for mapping JSON objects to TypeScript/JavaScript classes and vice versa.
 *
 * @see https://www.npmjs.com/package/json2typescript full documentation on NPM
 */
var JsonConvert = /** @class */ (function () {
    /////////////////
    // CONSTRUCTOR //
    /////////////////
    /**
     * Constructor.
     *
     * To learn more about the params, check the documentation of the equally named class properties.
     *
     * @param operationMode optional param (default: OperationMode.ENABLE)
     * @param valueCheckingMode optional param (default: ValueCheckingMode.ALLOW_OBJECT_NULL)
     * @param ignorePrimitiveChecks optional param (default: false)
     * @param propertyMatchingRule optional param (default: PropertyMatchingRule.CASE_STRICT)
     */
    function JsonConvert(operationMode, valueCheckingMode, ignorePrimitiveChecks, propertyMatchingRule) {
        ////////////////
        // PROPERTIES //
        ////////////////
        /**
         * Determines how the JsonConvert class instance should operate.
         *
         * You may assign three different values:
         * - OperationMode.DISABLE: json2typescript will be disabled, no type checking or mapping is done
         * - OperationMode.ENABLE: json2typescript is enabled, but only errors are logged
         * - OperationMode.LOGGING: json2typescript is enabled and detailed information is logged
         */
        this._operationMode = OperationMode.ENABLE;
        /**
         * Determines which types are allowed to be null.
         *
         * You may assign three different values:
         * - ValueCheckingMode.ALLOW_NULL: all given values in the JSON are allowed to be null
         * - ValueCheckingMode.ALLOW_OBJECT_NULL: objects in the JSON are allowed to be null, primitive types are not allowed to be null
         * - ValueCheckingMode.DISALLOW_NULL: no null values are tolerated in the JSON
         */
        this._valueCheckingMode = ValueCheckingMode.ALLOW_OBJECT_NULL;
        /**
         * Determines whether primitive types should be checked.
         * If true, it will be allowed to assign primitive to other primitive types.
         */
        this._ignorePrimitiveChecks = false;
        /**
         * Determines the rule of how JSON properties shall be matched with class properties during deserialization.
         *
         * You may assign the following values:
         * - PropertyMatchingRule.CASE_STRICT: JSON properties need to match exactly the names in the decorators
         * - PropertyMatchingRule.CASE_INSENSITIVE: JSON properties need to match names in the decorators, but names they are not case sensitive
         */
        this._propertyMatchingRule = PropertyMatchingRule.CASE_STRICT;
        /**
         * Determines whether the check for "required" properties should be ignored, making all
         * mapped values optional, whether or not the isOptional property mapping parameter is set.
         * If true, any missing properties when serializing or deserializing will be ignored, as if they
         * were marked optional.
         */
        this._ignoreRequiredCheck = false;
        if (operationMode !== undefined && operationMode in OperationMode)
            this.operationMode = operationMode;
        if (valueCheckingMode !== undefined && valueCheckingMode in ValueCheckingMode)
            this.valueCheckingMode = valueCheckingMode;
        if (ignorePrimitiveChecks !== undefined)
            this.ignorePrimitiveChecks = ignorePrimitiveChecks;
        if (propertyMatchingRule !== undefined)
            this.propertyMatchingRule = propertyMatchingRule;
    }
    Object.defineProperty(JsonConvert.prototype, "operationMode", {
        /**
         * Determines how the JsonConvert class instance should operate.
         *
         * You may assign three different values:
         * - OperationMode.DISABLE: json2typescript will be disabled, no type checking or mapping is done
         * - OperationMode.ENABLE: json2typescript is enabled, but only errors are logged
         * - OperationMode.LOGGING: json2typescript is enabled and detailed information is logged
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        get: function () {
            return this._operationMode;
        },
        /**
         * Determines how the JsonConvert class instance should operate.
         *
         * You may assign three different values:
         * - OperationMode.DISABLE: json2typescript will be disabled, no type checking or mapping is done
         * - OperationMode.ENABLE: json2typescript is enabled, but only errors are logged
         * - OperationMode.LOGGING: json2typescript is enabled and detailed information is logged
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        set: function (value) {
            if (value in OperationMode)
                this._operationMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JsonConvert.prototype, "valueCheckingMode", {
        /**
         * Determines which types are allowed to be null.
         *
         * You may assign three different values:
         * - ValueCheckingMode.ALLOW_NULL: all given values in the JSON are allowed to be null
         * - ValueCheckingMode.ALLOW_OBJECT_NULL: objects in the JSON are allowed to be null, primitive types are not allowed to be null
         * - ValueCheckingMode.DISALLOW_NULL: no null values are tolerated in the JSON
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        get: function () {
            return this._valueCheckingMode;
        },
        /**
         * Determines which types are allowed to be null.
         *
         * You may assign three different values:
         * - ValueCheckingMode.ALLOW_NULL: all given values in the JSON are allowed to be null
         * - ValueCheckingMode.ALLOW_OBJECT_NULL: objects in the JSON are allowed to be null, primitive types are not allowed to be null
         * - ValueCheckingMode.DISALLOW_NULL: no null values are tolerated in the JSON
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        set: function (value) {
            if (value in ValueCheckingMode)
                this._valueCheckingMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JsonConvert.prototype, "ignorePrimitiveChecks", {
        /**
         * Determines whether primitive types should be checked.
         * If true, it will be allowed to assign primitive to other primitive types.
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        get: function () {
            return this._ignorePrimitiveChecks;
        },
        /**
         * Determines whether primitive types should be checked.
         * If true, it will be allowed to assign primitive to other primitive types.
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        set: function (value) {
            this._ignorePrimitiveChecks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JsonConvert.prototype, "propertyMatchingRule", {
        /**
         * Determines the rule of how JSON properties shall be matched with class properties during deserialization.
         *
         * You may assign the following values:
         * - PropertyMatchingRule.CASE_STRICT: JSON properties need to match exactly the names in the decorators
         * - PropertyMatchingRule.CASE_INSENSITIVE: JSON properties need to match names in the decorators, but names they are not case sensitive
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        get: function () {
            return this._propertyMatchingRule;
        },
        /**
         * Determines the rule of how JSON properties shall be matched with class properties during deserialization.
         *
         * You may assign the following values:
         * - PropertyMatchingRule.CASE_STRICT: JSON properties need to match exactly the names in the decorators
         * - PropertyMatchingRule.CASE_INSENSITIVE: JSON properties need to match names in the decorators, but names they are not case sensitive
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        set: function (value) {
            if (value in PropertyMatchingRule)
                this._propertyMatchingRule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JsonConvert.prototype, "ignoreRequiredCheck", {
        /**
         * Determines whether the check for "required" properties should be ignored, making all
         * mapped values optional, whether or not the isOptional property mapping parameter is set.
         * If true, any missing properties (undefined) when serializing or deserializing will be
         * ignored, as if they were marked optional.
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        get: function () {
            return this._ignoreRequiredCheck;
        },
        /**
         * Determines whether the check for "required" properties should be ignored, making all
         * mapped values optional, whether or not the isOptional property mapping parameter is set.
         * If true, any missing properties (undefined) when serializing or deserializing will be
         * ignored, as if they were marked optional.
         *
         * @see https://www.npmjs.com/package/json2typescript full documentation
         */
        set: function (value) {
            this._ignoreRequiredCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    ////////////////////
    // PUBLIC METHODS //
    ////////////////////
    /**
     * Tries to serialize a TypeScript object or array of objects to JSON using the mappings defined on
     * the specified class reference.  Note that if a class reference is provided, it will be used as
     * the source of property mapping for serialization, even if the object or one of its elements is
     * an instance of a different class with its own mappings.  Also, ONLY the properties from the
     * class reference will be serialized - any additional properties on the object(s) will be silently
     * ignored.
     *
     * @param data object or array of objects
     * @param classReference the class reference which provides the property mappings to use
     *
     * @returns the JSON object
     *
     * @throws an Error in case of failure
     *
     * @see https://www.npmjs.com/package/json2typescript full documentation
     */
    JsonConvert.prototype.serialize = function (data, classReference) {
        if (this.operationMode === OperationMode.DISABLE) {
            return data;
        }
        // Call the appropriate method depending on the type
        if (data instanceof Array) {
            return this.serializeArray(data, classReference);
        }
        else if (typeof data === "object") { // careful: an array is an object in TypeScript!
            return this.serializeObject(data, classReference);
        }
        else {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter data in JsonConvert.serialize() is not in valid format (object or array)." +
                "\n");
        }
    };
    /**
     * Tries to serialize a TypeScript object to a JSON object using either the mappings on the
     * provided class reference, if present, or on the provided object.  Note that if a class
     * reference is provided, it will be used as the source of property mapping for serialization,
     * even if the object is itself an instance of a different class with its own mappings.
     * Also, ONLY the properties from the class reference will be serialized - any additional
     * properties on the object will be silently ignored.
     *
     * @param data object containing the values to be mapped to a JSON object, must be an
     *             instance of a class with JSON mappings if no class reference is provided
     * @param classReference optional class reference which provides the property mappings to use
     *
     * @returns the JSON object
     *
     * @throws an Error in case of failure
     *
     * @see https://www.npmjs.com/package/json2typescript full documentation
     */
    JsonConvert.prototype.serializeObject = function (data, classReference) {
        if (this.operationMode === OperationMode.DISABLE) {
            return data;
        }
        // Check if the passed type is allowed
        if (data === undefined) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter instance in JsonConvert.serializeObject() is undefined. This is not a valid JSON format." +
                "\n");
        }
        else if (data === null) {
            if (this.valueCheckingMode === ValueCheckingMode.DISALLOW_NULL) {
                throw new Error("Fatal error in JsonConvert. " +
                    "Passed parameter instance in JsonConvert.serializeObject() is undefined. You have specified to disallow null values." +
                    "\n");
            }
            else {
                return data;
            }
        }
        else if (typeof (data) !== "object" || data instanceof Array) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter instance in JsonConvert.serializeObject() is not of type object." +
                "\n");
        }
        // Now serialize and return the plain object
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("----------");
            console.log("Receiving JavaScript instance:");
            console.log(data);
        }
        var jsonObject = {};
        var instance;
        if (!!classReference) {
            instance = new classReference();
        }
        else {
            instance = data;
        }
        // Loop through all initialized class properties on the mapping instance
        for (var _i = 0, _a = Object.keys(instance); _i < _a.length; _i++) {
            var propertyKey = _a[_i];
            try {
                this.serializeObject_loopProperty(data, instance, propertyKey, jsonObject);
            }
            catch (ex) {
                if (this.operationMode === OperationMode.LOGGING) {
                    console.log("Failed to serialize property:");
                    console.log(ex);
                    console.log("----------");
                }
                throw ex;
            }
        }
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("Returning JSON object:");
            console.log(jsonObject);
            console.log("----------");
        }
        return jsonObject;
    };
    /**
     * Tries to serialize a TypeScript array to a JSON array using either the mappings on the
     * provided class reference, if present, or on the provided object.  Note that if a class
     * reference is provided, ALL objects in the array will be serialized using the mappings
     * from that class reference, even if they're actually instances of a different class.
     * Also, ONLY the properties from the class reference will be serialized - any additional
     * properties on the objects will be silently ignored.
     *
     * @param dataArray array of objects containing the values to be mapped to a JSON object, which
     *                  must be instances of classes with JSON mappings if no class reference is provided
     * @param classReference optional class reference which provides the property mappings to use
     *
     * @returns the JSON array
     *
     * @throws an Error in case of failure
     *
     * @see https://www.npmjs.com/package/json2typescript full documentation
     */
    JsonConvert.prototype.serializeArray = function (dataArray, classReference) {
        if (this.operationMode === OperationMode.DISABLE) {
            return dataArray;
        }
        // Check if the passed type is allowed
        if (dataArray === undefined) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter instanceArray in JsonConvert.serializeArray() is undefined. This is not a valid JSON format." +
                "\n");
        }
        else if (dataArray === null) {
            if (this.valueCheckingMode === ValueCheckingMode.DISALLOW_NULL) {
                throw new Error("Fatal error in JsonConvert. " +
                    "Passed parameter instanceArray in JsonConvert.serializeArray() is undefined. You have specified to disallow null values." +
                    "\n");
            }
            else {
                return dataArray;
            }
        }
        else if (typeof (dataArray) !== "object" || dataArray instanceof Array === false) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter instanceArray in JsonConvert.serializeArray() is not of type array." +
                "\n");
        }
        // Now serialize and return the plain object
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("----------");
            console.log("Receiving JavaScript array:");
            console.log(dataArray);
        }
        var jsonArray = [];
        // Loop through all array elements
        for (var _i = 0, _a = dataArray; _i < _a.length; _i++) {
            var dataObject = _a[_i];
            jsonArray.push(this.serializeObject(dataObject, classReference));
        }
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("Returning JSON array:");
            console.log(jsonArray);
            console.log("----------");
        }
        return jsonArray;
    };
    /**
     * Tries to deserialize given JSON to a TypeScript object or array of objects.
     *
     * @param json the JSON as object or array
     * @param classReference the class reference
     *
     * @returns the deserialized data (TypeScript instance or array of TypeScript instances)
     *
     * @throws an Error in case of failure
     *
     * @see https://www.npmjs.com/package/json2typescript full documentation
     */
    JsonConvert.prototype.deserialize = function (json, classReference) {
        if (this.operationMode === OperationMode.DISABLE) {
            return json;
        }
        // Call the appropriate method depending on the type
        if (json instanceof Array) {
            return this.deserializeArray(json, classReference);
        }
        else if (typeof json === "object") { // careful: an array is an object in TypeScript!
            return this.deserializeObject(json, classReference);
        }
        else {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter json in JsonConvert.deserialize() is not in valid JSON format (object or array)." +
                "\n");
        }
    };
    /**
     * Tries to deserialize a JSON object to a TypeScript object.
     *
     * @param jsonObject the JSON object
     * @param classReference the class reference
     *
     * @returns the deserialized TypeScript instance
     *
     * @throws an Error in case of failure
     *
     * @see https://www.npmjs.com/package/json2typescript full documentation
     */
    JsonConvert.prototype.deserializeObject = function (jsonObject, classReference) {
        if (this.operationMode === OperationMode.DISABLE) {
            return jsonObject;
        }
        // Check if the passed type is allowed
        if (jsonObject === undefined) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter jsonObject in JsonConvert.deserializeObject() is undefined. This is not a valid JSON format." +
                "\n");
        }
        else if (jsonObject === null) {
            if (this.valueCheckingMode === ValueCheckingMode.DISALLOW_NULL) {
                throw new Error("Fatal error in JsonConvert. " +
                    "Passed parameter jsonObject in JsonConvert.deserializeObject() is undefined. You have specified to disallow null values." +
                    "\n");
            }
            else {
                return jsonObject;
            }
        }
        else if (typeof (jsonObject) !== "object" || jsonObject instanceof Array) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter jsonObject in JsonConvert.deserializeObject() is not of type object." +
                "\n");
        }
        // Now deserialize and return the instance
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("----------");
            console.log("Receiving JSON object:");
            console.log(jsonObject);
        }
        var instance = new classReference();
        // Loop through all initialized class properties
        for (var _i = 0, _a = Object.keys(instance); _i < _a.length; _i++) {
            var propertyKey = _a[_i];
            try {
                this.deserializeObject_loopProperty(instance, propertyKey, jsonObject);
            }
            catch (ex) {
                if (this.operationMode === OperationMode.LOGGING) {
                    console.log("Failed to deserialize property:");
                    console.log(ex);
                    console.log("----------");
                }
                throw ex;
            }
        }
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("Returning CLASS instance:");
            console.log(instance);
            console.log("----------");
        }
        return instance;
    };
    /**
     * Tries to deserialize a JSON array to a TypeScript array.
     *
     * @param jsonArray the JSON array
     * @param classReference the object class
     *
     * @returns the deserialized array of TypeScript instances
     *
     * @throws an Error in case of failure
     *
     * @see https://www.npmjs.com/package/json2typescript full documentation
     */
    JsonConvert.prototype.deserializeArray = function (jsonArray, classReference) {
        if (this.operationMode === OperationMode.DISABLE) {
            return jsonArray;
        }
        // Check if the passed type is allowed
        if (jsonArray === undefined) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter jsonArray in JsonConvert.deserializeObject() is undefined. This is not a valid JSON format." +
                "\n");
        }
        else if (jsonArray === null) {
            if (this.valueCheckingMode === ValueCheckingMode.DISALLOW_NULL) {
                throw new Error("Fatal error in JsonConvert. " +
                    "Passed parameter jsonArray in JsonConvert.deserializeObject() is undefined. You have specified to disallow null values." +
                    "\n");
            }
            else {
                return jsonArray;
            }
        }
        else if (typeof (jsonArray) !== "object" || jsonArray instanceof Array === false) {
            throw new Error("Fatal error in JsonConvert. " +
                "Passed parameter jsonArray in JsonConvert.deserializeArray() is not of type array." +
                "\n");
        }
        // Now deserialize and return the array
        if (this.operationMode === OperationMode.DISABLE) {
            return jsonArray;
        }
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("----------");
            console.log("Receiving JSON array:");
            console.log(jsonArray);
        }
        var array = [];
        // Loop through all array elements
        for (var _i = 0, jsonArray_1 = jsonArray; _i < jsonArray_1.length; _i++) {
            var jsonObject = jsonArray_1[_i];
            array.push(this.deserializeObject(jsonObject, classReference));
        }
        if (this.operationMode === OperationMode.LOGGING) {
            console.log("Returning array of CLASS instances:");
            console.log(array);
            console.log("----------");
        }
        return array;
    };
    /////////////////////
    // PRIVATE METHODS //
    /////////////////////
    /**
     * Tries to find the JSON mapping for a given class property from the given instance used for mapping,
     * and finally assign the value from the given dataObject
     *
     * @param dataObject the object containing the value to be assigned
     * @param instance the instance of the class used for mapping
     * @param classPropertyName the property name
     * @param json the JSON object
     * @throws throws an Error in case of failure
     */
    JsonConvert.prototype.serializeObject_loopProperty = function (dataObject, instance, classPropertyName, json) {
        // Check if a JSON-object mapping is possible for a property
        var mappingOptions = this.getClassPropertyMappingOptions(instance, classPropertyName);
        if (mappingOptions === null) {
            return;
        }
        // Get expected and real values
        var jsonPropertyName = mappingOptions.jsonPropertyName;
        var expectedJsonType = mappingOptions.expectedJsonType;
        var isOptional = mappingOptions.isOptional;
        var customConverter = mappingOptions.customConverter;
        var exportNull = mappingOptions.exportNull;
        var classInstancePropertyValue = dataObject[classPropertyName];
        // Check if the class property value exists
        if (typeof (classInstancePropertyValue) === "undefined") {
            if (isOptional || this._ignoreRequiredCheck)
                return;
            throw new Error("Fatal error in JsonConvert. " +
                "Failed to map the JavaScript instance of class \"" + instance[Settings.CLASS_IDENTIFIER] + "\" to JSON because the defined class property \"" + classPropertyName + "\" does not exist or is not defined:\n\n" +
                "\tClass property: \n\t\t" + classPropertyName + "\n\n" +
                "\tJSON property: \n\t\t" + jsonPropertyName + "\n\n");
        }
        // If the json value is null, result must be null
        if (exportNull && classInstancePropertyValue === null) {
            json[jsonPropertyName] = classInstancePropertyValue;
            return;
        }
        // Check if the property is optional
        // If the json value is null, we don't assign it in that case
        if (isOptional && classInstancePropertyValue === null)
            return;
        // Map the property
        try {
            json[jsonPropertyName] = customConverter !== null ? customConverter.serialize(classInstancePropertyValue) : this.verifyProperty(expectedJsonType, classInstancePropertyValue, true);
        }
        catch (e) {
            throw new Error("Fatal error in JsonConvert. " +
                "Failed to map the JavaScript instance of class \"" + instance[Settings.CLASS_IDENTIFIER] + "\" to JSON because of a type error.\n\n" +
                "\tClass property: \n\t\t" + classPropertyName + "\n\n" +
                "\tClass property value: \n\t\t" + classInstancePropertyValue + "\n\n" +
                "\tExpected type: \n\t\t" + this.getExpectedType(expectedJsonType) + "\n\n" +
                "\tRuntime type: \n\t\t" + this.getTrueType(classInstancePropertyValue) + "\n\n" +
                "\tJSON property: \n\t\t" + jsonPropertyName + "\n\n" +
                e.message + "\n");
        }
    };
    /**
     * Tries to find the JSON mapping for a given class property and finally assign the value.
     *
     * @param instance the instance of the class
     * @param classPropertyName the property name
     * @param json the JSON object
     *
     * @throws throws an Error in case of failure
     */
    JsonConvert.prototype.deserializeObject_loopProperty = function (instance, classPropertyName, json) {
        var mappingOptions = this.getClassPropertyMappingOptions(instance, classPropertyName);
        if (mappingOptions === null) {
            return;
        }
        // Get expected and real values
        var jsonPropertyName = mappingOptions.jsonPropertyName;
        var expectedJsonType = mappingOptions.expectedJsonType;
        var isOptional = mappingOptions.isOptional;
        var customConverter = mappingOptions.customConverter;
        var exportNull = mappingOptions.exportNull;
        var jsonValue = undefined;
        try {
            jsonValue = this.getObjectValue(json, jsonPropertyName);
        }
        catch (_a) {
        }
        // Check if the json value exists
        if (typeof (jsonValue) === "undefined") {
            if (isOptional || this._ignoreRequiredCheck)
                return;
            throw new Error("Fatal error in JsonConvert. " +
                "Failed to map the JSON object to the class \"" + instance[Settings.CLASS_IDENTIFIER] + "\" because the defined JSON property \"" + jsonPropertyName + "\" does not exist:\n\n" +
                "\tClass property: \n\t\t" + classPropertyName + "\n\n" +
                "\tJSON property: \n\t\t" + jsonPropertyName + "\n\n");
        }
        // Check if the property is optional
        // If the json value is null, result must be null
        if (exportNull && jsonValue === null) {
            instance[classPropertyName] = jsonValue;
            return;
        }
        // Check if the property is optional
        // If the json value is null, we don't assign it in that case
        if (isOptional && jsonValue === null)
            return;
        // Map the property
        try {
            instance[classPropertyName] = customConverter !== null ? customConverter.deserialize(jsonValue) : this.verifyProperty(expectedJsonType, jsonValue);
        }
        catch (e) {
            throw new Error("Fatal error in JsonConvert. " +
                "Failed to map the JSON object to the class \"" + instance[Settings.CLASS_IDENTIFIER] + "\" because of a type error.\n\n" +
                "\tClass property: \n\t\t" + classPropertyName + "\n\n" +
                "\tExpected type: \n\t\t" + this.getExpectedType(expectedJsonType) + "\n\n" +
                "\tJSON property: \n\t\t" + jsonPropertyName + "\n\n" +
                "\tJSON type: \n\t\t" + this.getJsonType(jsonValue) + "\n\n" +
                "\tJSON value: \n\t\t" + JSON.stringify(jsonValue) + "\n\n" +
                e.message + "\n");
        }
    };
    ////////////////////
    // HELPER METHODS //
    ////////////////////
    /**
     * Gets the mapping options of a given class property.
     *
     * @param instance any class instance
     * @param {string} propertyName any property name
     *
     * @returns {MappingOptions|null}
     */
    JsonConvert.prototype.getClassPropertyMappingOptions = function (instance, propertyName) {
        var mappings = instance[Settings.MAPPING_PROPERTY];
        // Check if mapping is defined
        if (typeof (mappings) === "undefined")
            return null;
        /* Find mapping by iterating up the prototype chain to find a matching mapping, rather than
         * just searching by property name. */
        var prototype = Object.getPrototypeOf(instance);
        /* According to documentation, we'll hit null when we've iterated all the way up to the base
         * Object, but check for undefined as well in case prototype has been manually set to
         * undefined.  Note that javascript detects circular prototype references and will cause a
         * TypeError, so no need to check for self, the prototype chain will eventually terminate. */
        while (prototype !== null && prototype !== undefined) {
            var classIdentifier = prototype[Settings.CLASS_IDENTIFIER];
            if (!!classIdentifier) {
                var mappingName = classIdentifier + "." + propertyName;
                if (typeof (mappings[mappingName]) !== "undefined") {
                    return mappings[mappingName];
                }
            }
            prototype = Object.getPrototypeOf(prototype);
        }
        return null;
    };
    /**
     * Compares the type of a given value with an internal expected json type.
     * Either returns the resulting value or throws an exception.
     *
     * @param expectedJsonType the expected json type for the property
     * @param value the property value to verify
     * @param serialize optional param (default: false), if given, we are in serialization mode
     *
     * @returns returns the resulted mapped property
     *
     * @throws an error in case of failure
     */
    JsonConvert.prototype.verifyProperty = function (expectedJsonType, value, serialize) {
        // Map immediately if we don't care about the type
        if (expectedJsonType === Any || expectedJsonType === null || expectedJsonType === Object) {
            return value;
        }
        // Check if attempt and expected was 1-d
        if (expectedJsonType instanceof Array === false && value instanceof Array === false) {
            // Check the type
            if (typeof (expectedJsonType) !== "undefined" && expectedJsonType.prototype.hasOwnProperty(Settings.CLASS_IDENTIFIER)) { // only decorated custom objects have this injected property
                // Check if we have null value
                if (value === null) {
                    if (this.valueCheckingMode !== ValueCheckingMode.DISALLOW_NULL)
                        return null;
                    else
                        throw new Error("\tReason: Given value is null.");
                }
                if (serialize)
                    return this.serializeObject(value, expectedJsonType);
                else
                    return this.deserializeObject(value, expectedJsonType);
            }
            else if (expectedJsonType === Any || expectedJsonType === null || expectedJsonType === Object) { // general object
                // Check if we have null value
                if (value === null) {
                    if (this.valueCheckingMode !== ValueCheckingMode.DISALLOW_NULL)
                        return null;
                    else
                        throw new Error("\tReason: Given value is null.");
                }
                return value;
            }
            else if (expectedJsonType === String || expectedJsonType === Number || expectedJsonType === Boolean) { // otherwise check for a primitive type
                // Check if we have null value
                if (value === null) {
                    if (this.valueCheckingMode === ValueCheckingMode.ALLOW_NULL)
                        return null;
                    else
                        throw new Error("\tReason: Given value is null.");
                }
                // Check if the types match
                if ( // primitive types match
                (expectedJsonType === String && typeof (value) === "string") ||
                    (expectedJsonType === Number && typeof (value) === "number") ||
                    (expectedJsonType === Boolean && typeof (value) === "boolean")) {
                    return value;
                }
                else { // primitive types mismatch
                    if (this.ignorePrimitiveChecks)
                        return value;
                    throw new Error("\tReason: Given object does not match the expected primitive type.");
                }
            }
            else { // other weird types
                throw new Error("\tReason: Expected type is unknown. There might be multiple reasons for this:\n" +
                    "\t- You are missing the decorator @JsonObject (for object mapping)\n" +
                    "\t- You are missing the decorator @JsonConverter (for custom mapping) before your class definition\n" +
                    "\t- Your given class is undefined in the decorator because of circular dependencies");
            }
        }
        // Check if expected was n-d
        if (expectedJsonType instanceof Array) {
            if (value === null) {
                if (this.valueCheckingMode !== ValueCheckingMode.DISALLOW_NULL)
                    return null;
                else
                    throw new Error("\tReason: Given value is null.");
            }
            // Check that value is not primitive
            if (value instanceof Object) {
                var array = [];
                // No data given, so return empty value
                if (value.length === 0) {
                    return array;
                }
                // We obviously don't care about the type, so return the value as is
                if (expectedJsonType.length === 0) {
                    return value;
                }
                // Copy the expectedJsonType array so we don't change the class-level mapping based on the value of this property
                var jsonType = expectedJsonType.slice(0);
                // Check if attempt was n-d
                if (value instanceof Array) {
                    // Loop through the data. Both type and value are at least of length 1
                    var autofillType = jsonType.length < value.length;
                    for (var i = 0; i < value.length; i++) {
                        if (autofillType && i >= jsonType.length) {
                            jsonType[i] = jsonType[i - 1];
                        }
                        array[i] = this.verifyProperty(jsonType[i], value[i], serialize);
                    }
                    return array;
                    // Otherwise attempt was 1-d
                }
                else {
                    // Loop through the data. Both type and value are at least of length 1
                    var autofillType = jsonType.length < Object.keys(value).length;
                    var i = 0;
                    for (var key in value) {
                        if (autofillType && i >= jsonType.length) {
                            jsonType[i] = jsonType[i - 1];
                        }
                        array[key] = this.verifyProperty(jsonType[i], value[key]);
                        i++;
                    }
                    return array;
                }
            }
            else {
                throw new Error("\tReason: Expected type is array, but given value is primitive.");
            }
        }
        // Check if attempt was n-d and expected as 1-d
        if (value instanceof Array) {
            throw new Error("\tReason: Given value is array, but expected a non-array type.");
        }
        // All other attempts are fatal
        throw new Error("\tReason: Mapping failed because of an unknown error.");
    };
    /**
     * Gets the value of an object for a given value.
     * If the object does not have the specific key, an Error is thrown.
     *
     * @param data
     * @param key
     *
     * @returns returns the value
     *
     * @throws an Error in case of the key was not found in the object
     */
    JsonConvert.prototype.getObjectValue = function (data, key) {
        // If we do not care about the case of the key, ad
        if (this.propertyMatchingRule === PropertyMatchingRule.CASE_INSENSITIVE) {
            // Create a mapping of the keys: keys[lowercase]=normalcase
            var keyMapping = Object.keys(data).reduce(function (keys, key) {
                keys[key.toLowerCase()] = key;
                return keys;
            }, {});
            // Define the new key
            key = keyMapping[key.toLowerCase()];
        }
        // Throw an error if the key is not in the object
        if (key in data === false) {
            throw new Error();
        }
        return data[key];
    };
    ///////////////////////////
    // JSON2TYPESCRIPT TYPES //
    ///////////////////////////
    /**
     * Returns a string representation of the expected json type.
     *
     * @param expectedJsonType the expected type given from the decorator
     *
     * @returns {string} the string representation
     */
    JsonConvert.prototype.getExpectedType = function (expectedJsonType) {
        var type = "";
        if (expectedJsonType instanceof Array) {
            type = "[";
            for (var i = 0; i < expectedJsonType.length; i++) {
                if (i > 0)
                    type += ",";
                type += this.getExpectedType(expectedJsonType[i]);
            }
            type += "]";
            return type;
        }
        else {
            if (expectedJsonType === Any || expectedJsonType === null || expectedJsonType === Object) {
                return "any";
            }
            else if (expectedJsonType === String || expectedJsonType === Boolean || expectedJsonType === Number) {
                return (new expectedJsonType()).constructor.name.toLowerCase();
            }
            else if (typeof expectedJsonType === "function") {
                return (new expectedJsonType()).constructor.name;
            }
            else if (expectedJsonType === undefined) {
                return "undefined";
            }
            else {
                return "?????";
            }
        }
    };
    /**
     * Returns a string representation of the JSON value type.
     *
     * @param jsonValue the JSON value
     *
     * @returns {string} the string representation
     */
    JsonConvert.prototype.getJsonType = function (jsonValue) {
        if (jsonValue === null)
            return "null";
        var type = "";
        if (jsonValue instanceof Array) {
            type = "[";
            for (var i = 0; i < jsonValue.length; i++) {
                if (i > 0)
                    type += ",";
                type += this.getJsonType(jsonValue[i]);
            }
            type += "]";
            return type;
        }
        else {
            return typeof (jsonValue);
        }
    };
    /**
     * Returns a string representation of the true TypeScript type.
     *
     * @param trueValue the true value
     *
     * @returns {string} the string representation
     */
    JsonConvert.prototype.getTrueType = function (trueValue) {
        return typeof (trueValue);
    };
    return JsonConvert;
}());
export { JsonConvert };
//# sourceMappingURL=json-convert.js.map