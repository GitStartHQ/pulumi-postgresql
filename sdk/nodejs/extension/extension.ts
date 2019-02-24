// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Extension extends pulumi.CustomResource {
    /**
     * Get an existing Extension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExtensionState, opts?: pulumi.CustomResourceOptions): Extension {
        return new Extension(name, <any>state, { ...opts, id: id });
    }

    public readonly name: pulumi.Output<string>;
    /**
     * Sets the schema of an extension
     */
    public readonly schema: pulumi.Output<string>;
    /**
     * Sets the version number of the extension
     */
    public readonly version: pulumi.Output<string>;

    /**
     * Create a Extension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ExtensionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ExtensionArgs | ExtensionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ExtensionState = argsOrState as ExtensionState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["schema"] = state ? state.schema : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ExtensionArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["schema"] = args ? args.schema : undefined;
            inputs["version"] = args ? args.version : undefined;
        }
        super("postgresql:extension/extension:Extension", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Extension resources.
 */
export interface ExtensionState {
    readonly name?: pulumi.Input<string>;
    /**
     * Sets the schema of an extension
     */
    readonly schema?: pulumi.Input<string>;
    /**
     * Sets the version number of the extension
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    readonly name?: pulumi.Input<string>;
    /**
     * Sets the schema of an extension
     */
    readonly schema?: pulumi.Input<string>;
    /**
     * Sets the version number of the extension
     */
    readonly version?: pulumi.Input<string>;
}