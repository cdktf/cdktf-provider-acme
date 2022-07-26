// https://www.terraform.io/docs/providers/acme/r/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#account_key_pem Certificate#account_key_pem}
  */
  readonly accountKeyPem: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#certificate_p12_password Certificate#certificate_p12_password}
  */
  readonly certificateP12Password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#certificate_request_pem Certificate#certificate_request_pem}
  */
  readonly certificateRequestPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#common_name Certificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#disable_complete_propagation Certificate#disable_complete_propagation}
  */
  readonly disableCompletePropagation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#id Certificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#key_type Certificate#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#min_days_remaining Certificate#min_days_remaining}
  */
  readonly minDaysRemaining?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#must_staple Certificate#must_staple}
  */
  readonly mustStaple?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#pre_check_delay Certificate#pre_check_delay}
  */
  readonly preCheckDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#preferred_chain Certificate#preferred_chain}
  */
  readonly preferredChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#recursive_nameservers Certificate#recursive_nameservers}
  */
  readonly recursiveNameservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}
  */
  readonly revokeCertificateOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#subject_alternative_names Certificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * dns_challenge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#dns_challenge Certificate#dns_challenge}
  */
  readonly dnsChallenge?: CertificateDnsChallenge[] | cdktf.IResolvable;
  /**
  * http_challenge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#http_challenge Certificate#http_challenge}
  */
  readonly httpChallenge?: CertificateHttpChallenge;
  /**
  * http_memcached_challenge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#http_memcached_challenge Certificate#http_memcached_challenge}
  */
  readonly httpMemcachedChallenge?: CertificateHttpMemcachedChallenge;
  /**
  * http_webroot_challenge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#http_webroot_challenge Certificate#http_webroot_challenge}
  */
  readonly httpWebrootChallenge?: CertificateHttpWebrootChallenge;
  /**
  * tls_challenge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#tls_challenge Certificate#tls_challenge}
  */
  readonly tlsChallenge?: CertificateTlsChallenge;
}
export interface CertificateDnsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#config Certificate#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#provider Certificate#provider}
  */
  readonly provider: string;
}

export function certificateDnsChallengeToTerraform(struct?: CertificateDnsChallenge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}

export class CertificateDnsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificateDnsChallenge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateDnsChallenge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._provider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._provider = value.provider;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}

export class CertificateDnsChallengeList extends cdktf.ComplexList {
  public internalValue? : CertificateDnsChallenge[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertificateDnsChallengeOutputReference {
    return new CertificateDnsChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateHttpChallenge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#port Certificate#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#proxy_header Certificate#proxy_header}
  */
  readonly proxyHeader?: string;
}

export function certificateHttpChallengeToTerraform(struct?: CertificateHttpChallengeOutputReference | CertificateHttpChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
  }
}

export class CertificateHttpChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateHttpChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateHttpChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._proxyHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._proxyHeader = value.proxyHeader;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }
}
export interface CertificateHttpMemcachedChallenge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#hosts Certificate#hosts}
  */
  readonly hosts: string[];
}

export function certificateHttpMemcachedChallengeToTerraform(struct?: CertificateHttpMemcachedChallengeOutputReference | CertificateHttpMemcachedChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
  }
}

export class CertificateHttpMemcachedChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateHttpMemcachedChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateHttpMemcachedChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
    }
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }
}
export interface CertificateHttpWebrootChallenge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#directory Certificate#directory}
  */
  readonly directory: string;
}

export function certificateHttpWebrootChallengeToTerraform(struct?: CertificateHttpWebrootChallengeOutputReference | CertificateHttpWebrootChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}

export class CertificateHttpWebrootChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateHttpWebrootChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateHttpWebrootChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
    }
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }
}
export interface CertificateTlsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#port Certificate#port}
  */
  readonly port?: number;
}

export function certificateTlsChallengeToTerraform(struct?: CertificateTlsChallengeOutputReference | CertificateTlsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class CertificateTlsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateTlsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateTlsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/acme/r/certificate acme_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "acme_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/acme/r/certificate acme_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'acme_certificate',
      terraformGeneratorMetadata: {
        providerName: 'acme',
        providerVersion: '2.10.0',
        providerVersionConstraint: '~> 2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountKeyPem = config.accountKeyPem;
    this._certificateP12Password = config.certificateP12Password;
    this._certificateRequestPem = config.certificateRequestPem;
    this._commonName = config.commonName;
    this._disableCompletePropagation = config.disableCompletePropagation;
    this._id = config.id;
    this._keyType = config.keyType;
    this._minDaysRemaining = config.minDaysRemaining;
    this._mustStaple = config.mustStaple;
    this._preCheckDelay = config.preCheckDelay;
    this._preferredChain = config.preferredChain;
    this._recursiveNameservers = config.recursiveNameservers;
    this._revokeCertificateOnDestroy = config.revokeCertificateOnDestroy;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._dnsChallenge.internalValue = config.dnsChallenge;
    this._httpChallenge.internalValue = config.httpChallenge;
    this._httpMemcachedChallenge.internalValue = config.httpMemcachedChallenge;
    this._httpWebrootChallenge.internalValue = config.httpWebrootChallenge;
    this._tlsChallenge.internalValue = config.tlsChallenge;
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

  // certificate_domain - computed: true, optional: false, required: false
  public get certificateDomain() {
    return this.getStringAttribute('certificate_domain');
  }

  // certificate_p12 - computed: true, optional: false, required: false
  public get certificateP12() {
    return this.getStringAttribute('certificate_p12');
  }

  // certificate_p12_password - computed: false, optional: true, required: false
  private _certificateP12Password?: string; 
  public get certificateP12Password() {
    return this.getStringAttribute('certificate_p12_password');
  }
  public set certificateP12Password(value: string) {
    this._certificateP12Password = value;
  }
  public resetCertificateP12Password() {
    this._certificateP12Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateP12PasswordInput() {
    return this._certificateP12Password;
  }

  // certificate_pem - computed: true, optional: false, required: false
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // certificate_request_pem - computed: false, optional: true, required: false
  private _certificateRequestPem?: string; 
  public get certificateRequestPem() {
    return this.getStringAttribute('certificate_request_pem');
  }
  public set certificateRequestPem(value: string) {
    this._certificateRequestPem = value;
  }
  public resetCertificateRequestPem() {
    this._certificateRequestPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRequestPemInput() {
    return this._certificateRequestPem;
  }

  // certificate_url - computed: true, optional: false, required: false
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // disable_complete_propagation - computed: false, optional: true, required: false
  private _disableCompletePropagation?: boolean | cdktf.IResolvable; 
  public get disableCompletePropagation() {
    return this.getBooleanAttribute('disable_complete_propagation');
  }
  public set disableCompletePropagation(value: boolean | cdktf.IResolvable) {
    this._disableCompletePropagation = value;
  }
  public resetDisableCompletePropagation() {
    this._disableCompletePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCompletePropagationInput() {
    return this._disableCompletePropagation;
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

  // issuer_pem - computed: true, optional: false, required: false
  public get issuerPem() {
    return this.getStringAttribute('issuer_pem');
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // min_days_remaining - computed: false, optional: true, required: false
  private _minDaysRemaining?: number; 
  public get minDaysRemaining() {
    return this.getNumberAttribute('min_days_remaining');
  }
  public set minDaysRemaining(value: number) {
    this._minDaysRemaining = value;
  }
  public resetMinDaysRemaining() {
    this._minDaysRemaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDaysRemainingInput() {
    return this._minDaysRemaining;
  }

  // must_staple - computed: false, optional: true, required: false
  private _mustStaple?: boolean | cdktf.IResolvable; 
  public get mustStaple() {
    return this.getBooleanAttribute('must_staple');
  }
  public set mustStaple(value: boolean | cdktf.IResolvable) {
    this._mustStaple = value;
  }
  public resetMustStaple() {
    this._mustStaple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustStapleInput() {
    return this._mustStaple;
  }

  // pre_check_delay - computed: false, optional: true, required: false
  private _preCheckDelay?: number; 
  public get preCheckDelay() {
    return this.getNumberAttribute('pre_check_delay');
  }
  public set preCheckDelay(value: number) {
    this._preCheckDelay = value;
  }
  public resetPreCheckDelay() {
    this._preCheckDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCheckDelayInput() {
    return this._preCheckDelay;
  }

  // preferred_chain - computed: false, optional: true, required: false
  private _preferredChain?: string; 
  public get preferredChain() {
    return this.getStringAttribute('preferred_chain');
  }
  public set preferredChain(value: string) {
    this._preferredChain = value;
  }
  public resetPreferredChain() {
    this._preferredChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChainInput() {
    return this._preferredChain;
  }

  // private_key_pem - computed: true, optional: false, required: false
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }

  // recursive_nameservers - computed: false, optional: true, required: false
  private _recursiveNameservers?: string[]; 
  public get recursiveNameservers() {
    return this.getListAttribute('recursive_nameservers');
  }
  public set recursiveNameservers(value: string[]) {
    this._recursiveNameservers = value;
  }
  public resetRecursiveNameservers() {
    this._recursiveNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNameserversInput() {
    return this._recursiveNameservers;
  }

  // revoke_certificate_on_destroy - computed: false, optional: true, required: false
  private _revokeCertificateOnDestroy?: boolean | cdktf.IResolvable; 
  public get revokeCertificateOnDestroy() {
    return this.getBooleanAttribute('revoke_certificate_on_destroy');
  }
  public set revokeCertificateOnDestroy(value: boolean | cdktf.IResolvable) {
    this._revokeCertificateOnDestroy = value;
  }
  public resetRevokeCertificateOnDestroy() {
    this._revokeCertificateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeCertificateOnDestroyInput() {
    return this._revokeCertificateOnDestroy;
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
  }

  // dns_challenge - computed: false, optional: true, required: false
  private _dnsChallenge = new CertificateDnsChallengeList(this, "dns_challenge", false);
  public get dnsChallenge() {
    return this._dnsChallenge;
  }
  public putDnsChallenge(value: CertificateDnsChallenge[] | cdktf.IResolvable) {
    this._dnsChallenge.internalValue = value;
  }
  public resetDnsChallenge() {
    this._dnsChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsChallengeInput() {
    return this._dnsChallenge.internalValue;
  }

  // http_challenge - computed: false, optional: true, required: false
  private _httpChallenge = new CertificateHttpChallengeOutputReference(this, "http_challenge");
  public get httpChallenge() {
    return this._httpChallenge;
  }
  public putHttpChallenge(value: CertificateHttpChallenge) {
    this._httpChallenge.internalValue = value;
  }
  public resetHttpChallenge() {
    this._httpChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpChallengeInput() {
    return this._httpChallenge.internalValue;
  }

  // http_memcached_challenge - computed: false, optional: true, required: false
  private _httpMemcachedChallenge = new CertificateHttpMemcachedChallengeOutputReference(this, "http_memcached_challenge");
  public get httpMemcachedChallenge() {
    return this._httpMemcachedChallenge;
  }
  public putHttpMemcachedChallenge(value: CertificateHttpMemcachedChallenge) {
    this._httpMemcachedChallenge.internalValue = value;
  }
  public resetHttpMemcachedChallenge() {
    this._httpMemcachedChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMemcachedChallengeInput() {
    return this._httpMemcachedChallenge.internalValue;
  }

  // http_webroot_challenge - computed: false, optional: true, required: false
  private _httpWebrootChallenge = new CertificateHttpWebrootChallengeOutputReference(this, "http_webroot_challenge");
  public get httpWebrootChallenge() {
    return this._httpWebrootChallenge;
  }
  public putHttpWebrootChallenge(value: CertificateHttpWebrootChallenge) {
    this._httpWebrootChallenge.internalValue = value;
  }
  public resetHttpWebrootChallenge() {
    this._httpWebrootChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpWebrootChallengeInput() {
    return this._httpWebrootChallenge.internalValue;
  }

  // tls_challenge - computed: false, optional: true, required: false
  private _tlsChallenge = new CertificateTlsChallengeOutputReference(this, "tls_challenge");
  public get tlsChallenge() {
    return this._tlsChallenge;
  }
  public putTlsChallenge(value: CertificateTlsChallenge) {
    this._tlsChallenge.internalValue = value;
  }
  public resetTlsChallenge() {
    this._tlsChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsChallengeInput() {
    return this._tlsChallenge.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_key_pem: cdktf.stringToTerraform(this._accountKeyPem),
      certificate_p12_password: cdktf.stringToTerraform(this._certificateP12Password),
      certificate_request_pem: cdktf.stringToTerraform(this._certificateRequestPem),
      common_name: cdktf.stringToTerraform(this._commonName),
      disable_complete_propagation: cdktf.booleanToTerraform(this._disableCompletePropagation),
      id: cdktf.stringToTerraform(this._id),
      key_type: cdktf.stringToTerraform(this._keyType),
      min_days_remaining: cdktf.numberToTerraform(this._minDaysRemaining),
      must_staple: cdktf.booleanToTerraform(this._mustStaple),
      pre_check_delay: cdktf.numberToTerraform(this._preCheckDelay),
      preferred_chain: cdktf.stringToTerraform(this._preferredChain),
      recursive_nameservers: cdktf.listMapper(cdktf.stringToTerraform)(this._recursiveNameservers),
      revoke_certificate_on_destroy: cdktf.booleanToTerraform(this._revokeCertificateOnDestroy),
      subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform)(this._subjectAlternativeNames),
      dns_challenge: cdktf.listMapper(certificateDnsChallengeToTerraform)(this._dnsChallenge.internalValue),
      http_challenge: certificateHttpChallengeToTerraform(this._httpChallenge.internalValue),
      http_memcached_challenge: certificateHttpMemcachedChallengeToTerraform(this._httpMemcachedChallenge.internalValue),
      http_webroot_challenge: certificateHttpWebrootChallengeToTerraform(this._httpWebrootChallenge.internalValue),
      tls_challenge: certificateTlsChallengeToTerraform(this._tlsChallenge.internalValue),
    };
  }
}
