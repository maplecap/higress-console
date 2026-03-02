export interface LlmProvider {
  key?: string;
  version?: number;
  name: string;
  type: string;
  protocol?: string;
  proxyName?: string;
  tokens: string[];
  capabilities?: Record<string, string>;
  rawConfigs?: Record<string, any>;
  tokenFailoverConfig?: TokeFailoverConfig;
}

export interface TokeFailoverConfig {
  enabled?: boolean;
  failureThreshold?: number;
  successThreshold?: number;
  healthCheckInterval?: number;
  healthCheckTimeout?: number;
  healthCheckModel?: string;
}

export enum LlmProviderProtocol {
  OPENAI_V1 = 'openai/v1',
}
