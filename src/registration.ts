// https://www.terraform.io/docs/providers/acme/r/registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#account_key_pem Registration#account_key_pem}
  */
  readonly accountKeyPem: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#email_address Registration#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#id Registration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * external_account_binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#external_account_binding Registration#external_account_binding}
  */
  readonly externalAccountBinding?: RegistrationExternalAccountBinding;
}
export interface RegistrationExternalAccountBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#hmac_base64 Registration#hmac_base64}
  */
  readonly hmacBase64: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#key_id Registration#key_id}
  */
  readonly keyId: string;
}

export function registrationExternalAccountBindingToTerraform(struct?: RegistrationExternalAccountBindingOutputReference | RegistrationExternalAccountBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_base64: cdktf.stringToTerraform(struct!.hmacBase64),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class RegistrationExternalAccountBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrationExternalAccountBinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacBase64 = this._hmacBase64;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrationExternalAccountBinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hmacBase64 = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hmacBase64 = value.hmacBase64;
      this._keyId = value.keyId;
    }
  }

  // hmac_base64 - computed: false, optional: false, required: true
  private _hmacBase64?: string; 
  public get hmacBase64() {
    return this.getStringAttribute('hmac_base64');
  }
  public set hmacBase64(value: string) {
    this._hmacBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacBase64Input() {
    return this._hmacBase64;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/acme/r/registration acme_registration}
*/
export class Registration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "acme_registration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/acme/r/registration acme_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: RegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'acme_registration',
      terraformGeneratorMetadata: {
        providerName: 'acme',
        providerVersion: '2.9.0',
        providerVersionConstraint: '~> 2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountKeyPem = config.accountKeyPem;
    this._emailAddress = config.emailAddress;
    this._id = config.id;
    this._externalAccountBinding.internalValue = config.externalAccountBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_key_pem - computed: false, optional: false, required: true
  private _accountKeyPem?: string; 
  public get accountKeyPem() {
    return this.getStringAttribute('account_key_pem');
  }
  public set accountKeyPem(value: string) {
    this._accountKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyPemInput() {
    return this._accountKeyPem;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // registration_url - computed: true, optional: false, required: false
  public get registrationUrl() {
    return this.getStringAttribute('registration_url');
  }

  // external_account_binding - computed: false, optional: true, required: false
  private _externalAccountBinding = new RegistrationExternalAccountBindingOutputReference(this, "external_account_binding");
  public get externalAccountBinding() {
    return this._externalAccountBinding;
  }
  public putExternalAccountBinding(value: RegistrationExternalAccountBinding) {
    this._externalAccountBinding.internalValue = value;
  }
  public resetExternalAccountBinding() {
    this._externalAccountBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountBindingInput() {
    return this._externalAccountBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_key_pem: cdktf.stringToTerraform(this._accountKeyPem),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      id: cdktf.stringToTerraform(this._id),
      external_account_binding: registrationExternalAccountBindingToTerraform(this._externalAccountBinding.internalValue),
    };
  }
}
