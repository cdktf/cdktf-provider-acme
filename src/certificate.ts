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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  public static readonly tfResourceType: string = "acme_certificate";

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
        providerName: 'acme'
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
    this._keyType = config.keyType;
    this._minDaysRemaining = config.minDaysRemaining;
    this._mustStaple = config.mustStaple;
    this._preCheckDelay = config.preCheckDelay;
    this._preferredChain = config.preferredChain;
    this._recursiveNameservers = config.recursiveNameservers;
    this._revokeCertificateOnDestroy = config.revokeCertificateOnDestroy;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._dnsChallenge = config.dnsChallenge;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _dnsChallenge?: CertificateDnsChallenge[] | cdktf.IResolvable; 
  public get dnsChallenge() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dns_challenge');
  }
  public set dnsChallenge(value: CertificateDnsChallenge[] | cdktf.IResolvable) {
    this._dnsChallenge = value;
  }
  public resetDnsChallenge() {
    this._dnsChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsChallengeInput() {
    return this._dnsChallenge;
  }

  // http_challenge - computed: false, optional: true, required: false
  private _httpChallenge = new CertificateHttpChallengeOutputReference(this, "http_challenge", true);
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
  private _httpMemcachedChallenge = new CertificateHttpMemcachedChallengeOutputReference(this, "http_memcached_challenge", true);
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
  private _httpWebrootChallenge = new CertificateHttpWebrootChallengeOutputReference(this, "http_webroot_challenge", true);
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
  private _tlsChallenge = new CertificateTlsChallengeOutputReference(this, "tls_challenge", true);
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
      key_type: cdktf.stringToTerraform(this._keyType),
      min_days_remaining: cdktf.numberToTerraform(this._minDaysRemaining),
      must_staple: cdktf.booleanToTerraform(this._mustStaple),
      pre_check_delay: cdktf.numberToTerraform(this._preCheckDelay),
      preferred_chain: cdktf.stringToTerraform(this._preferredChain),
      recursive_nameservers: cdktf.listMapper(cdktf.stringToTerraform)(this._recursiveNameservers),
      revoke_certificate_on_destroy: cdktf.booleanToTerraform(this._revokeCertificateOnDestroy),
      subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform)(this._subjectAlternativeNames),
      dns_challenge: cdktf.listMapper(certificateDnsChallengeToTerraform)(this._dnsChallenge),
      http_challenge: certificateHttpChallengeToTerraform(this._httpChallenge.internalValue),
      http_memcached_challenge: certificateHttpMemcachedChallengeToTerraform(this._httpMemcachedChallenge.internalValue),
      http_webroot_challenge: certificateHttpWebrootChallengeToTerraform(this._httpWebrootChallenge.internalValue),
      tls_challenge: certificateTlsChallengeToTerraform(this._tlsChallenge.internalValue),
    };
  }
}
