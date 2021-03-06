/**
 * Offers a simple API for mapping JSON objects to TypeScript/JavaScript classes and vice versa.
 *
 * @see https://www.npmjs.com/package/json2typescript full documentation on NPM
 */
export declare class JsonConvert {
    /**
     * Determines how the JsonConvert class instance should operate.
     *
     * You may assign three different values:
     * - OperationMode.DISABLE: json2typescript will be disabled, no type checking or mapping is done
     * - OperationMode.ENABLE: json2typescript is enabled, but only errors are logged
     * - OperationMode.LOGGING: json2typescript is enabled and detailed information is logged
     */
    private _operationMode;
    operationMode: number;
    /**
     * Determines which types are allowed to be null.
     *
     * You may assign three different values:
     * - ValueCheckingMode.ALLOW_NULL: all given values in the JSON are allowed to be null
     * - ValueCheckingMode.ALLOW_OBJECT_NULL: objects in the JSON are allowed to be null, primitive types are not allowed to be null
     * - ValueCheckingMode.DISALLOW_NULL: no null values are tolerated in the JSON
     */
    private _valueCheckingMode;
    valueCheckingMode: number;
    /**
     * Determines whether primitive types should be checked.
     * If true, it will be allowed to assign primitive to other primitive types.
     */
    private _ignorePrimitiveChecks;
    ignorePrimitiveChecks: boolean;
    /**
     * Determines the rule of how JSON properties shall be matched with class properties during deserialization.
     *
     * You may assign the following values:
     * - PropertyMatchingRule.CASE_STRICT: JSON properties need to match exactly the names in the decorators
     * - PropertyMatchingRule.CASE_INSENSITIVE: JSON properties need to match names in the decorators, but names they are not case sensitive
     */
    private _propertyMatchingRule;
    propertyMatchingRule: number;
    /**
     * Determines whether the check for "required" properties should be ignored, making all
     * mapped values optional, whether or not the isOptional property mapping parameter is set.
     * If true, any missing properties when serializing or deserializing will be ignored, as if they
     * were marked optional.
     */
    private _ignoreRequiredCheck;
    ignoreRequiredCheck: boolean;
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
    constructor(operationMode?: number, valueCheckingMode?: number, ignorePrimitiveChecks?: boolean, propertyMatchingRule?: number);
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
    serialize<T>(data: any | any[], classReference?: {
        new (): T;
    }): any | any[];
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
    serializeObject<T>(data: any, classReference?: {
        new (): T;
    }): any;
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
    serializeArray<T>(dataArray: any[], classReference?: {
        new (): T;
    }): any[];
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
    deserialize<T>(json: any, classReference: {
        new (): T;
    }): T | T[];
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
    deserializeObject<T>(jsonObject: any, classReference: {
        new (): T;
    }): T;
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
    deserializeArray<T>(jsonArray: any[], classReference: {
        new (): T;
    }): T[];
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
    private serializeObject_loopProperty;
    /**
     * Tries to find the JSON mapping for a given class property and finally assign the value.
     *
     * @param instance the instance of the class
     * @param classPropertyName the property name
     * @param json the JSON object
     *
     * @throws throws an Error in case of failure
     */
    private deserializeObject_loopProperty;
    /**
     * Gets the mapping options of a given class property.
     *
     * @param instance any class instance
     * @param {string} propertyName any property name
     *
     * @returns {MappingOptions|null}
     */
    private getClassPropertyMappingOptions;
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
    private verifyProperty;
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
    private getObjectValue;
    /**
     * Returns a string representation of the expected json type.
     *
     * @param expectedJsonType the expected type given from the decorator
     *
     * @returns {string} the string representation
     */
    private getExpectedType;
    /**
     * Returns a string representation of the JSON value type.
     *
     * @param jsonValue the JSON value
     *
     * @returns {string} the string representation
     */
    private getJsonType;
    /**
     * Returns a string representation of the true TypeScript type.
     *
     * @param trueValue the true value
     *
     * @returns {string} the string representation
     */
    private getTrueType;
}
