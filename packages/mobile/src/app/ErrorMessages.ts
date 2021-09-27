export enum ErrorMessages {
  TRANSACTION_FAILED = 'transactionFailed',
  TRANSACTION_TIMEOUT = 'transactionTimeout',
  EXCHANGE_FAILED = 'exchangeFailed',
  INVALID_INVITATION = 'invalidInvite',
  INCORRECT_PIN = 'incorrectPin',
  PIN_INPUT_CANCELED = 'pinInputCanceled',
  SET_PIN_FAILED = 'setPinFailed',
  NSF_GOLD = 'notEnoughGoldError',
  NSF_STABLE = 'notEnoughStableError',
  NSF_TO_SEND = 'needMoreFundsToSend',
  INSUFFICIENT_BALANCE = 'insufficientBalance',
  INVALID_AMOUNT = 'invalidAmount',
  INVALID_BACKUP_PHRASE = 'backupKeyFlow6:invalidBackupPhrase',
  INVALID_WORDS_IN_BACKUP_PHRASE = 'backupKeyFlow6:invalidWordsInBackupPhrase',
  IMPORT_BACKUP_FAILED = 'backupKeyFlow6:importBackupFailed',
  BACKUP_QUIZ_FAILED = 'backupKeyFlow6:backupQuizFailed',
  FAILED_FETCH_MNEMONIC = 'backupKeyFlow6:failedFetchMnemonic',
  INVALID_PHONE_NUMBER = 'invalidPhone',
  MISSING_FULL_NAME = 'missingFullName',
  NOT_READY_FOR_CODE = 'nuxVerification2:notReadyForCode',
  EMPTY_ATTESTATION_CODE = 'nuxVerification2:emptyVerificationCode',
  INVALID_ATTESTATION_CODE = 'nuxVerification2:invalidVerificationCode',
  REPEAT_ATTESTATION_CODE = 'nuxVerification2:repeatVerificationCode',
  REVEAL_ATTESTATION_FAILURE = 'nuxVerification2:revealAttestationFailure',
  VERIFICATION_FAILURE = 'nuxVerification2:verificationFailure',
  CANT_VERIFY_REVOKED_ACCOUNT = 'nuxVerification2:cantVerifyRevokedAccount',
  VERIFICATION_TIMEOUT = 'nuxVerification2:verificationTimeout',
  ADDRESS_LOOKUP_FAILURE = 'addressLookupFailure',
  ODIS_QUOTA_ERROR = 'odisQuotaError',
  SALT_FETCH_FAILURE = 'saltFetchFailure',
  SALT_QUOTA_EXCEEDED = 'saltQuotaExceededError',
  MAX_ACTIONABLE_ATTESTATIONS_EXCEEDED = 'maxActionableAttestationsExceededError',
  ODIS_INSUFFICIENT_BALANCE = 'odisInsufficientBalance',
  MATCHMAKING_QUOTA_EXCEEDED = 'matchmakingQuotaExceededError',
  INVALID_ACCOUNT = 'invalidAccount',
  ACCOUNT_UNLOCK_FAILED = 'global:accountUnlockFailed',
  CANT_SELECT_INVALID_PHONE = 'cantSelectInvalidPhone',
  CAN_NOT_REQUEST_FROM_UNVERIFIED = 'canNotRequestFromUnverified',
  REFRESH_FAILED = 'refreshFailedUnexpectedly',
  INVITE_FAILED = 'inviteFailed',
  INVITE_OPEN_APP_FAILED = 'inviteOpenAppFailed',
  SEND_PAYMENT_FAILED = 'sendPaymentFailed',
  PAYMENT_LIMIT_REACHED = 'paymentLimitReached',
  REQUEST_LIMIT = 'requestLimitError',
  PAYMENT_REQUEST_FAILED = 'paymentRequestFailed',
  ESCROW_TRANSFER_FAILED = 'escrowTransferFailed',
  ESCROW_WITHDRAWAL_FAILED = 'escrowWithdrawalFailed',
  RECLAIMING_ESCROWED_PAYMENT_FAILED = 'reclaimingEscrowedPaymentFailed',
  EXCHANGE_RATE_FAILED = 'exchangeFlow9:errorRefreshingRate',
  EXCHANGE_RATE_CHANGE = 'exchangeFlow9:exchangeRateChange',
  EMPTY_INVITE_CODE = 'inviteFlow11:emptyInviteCode',
  REDEEM_INVITE_FAILED = 'inviteFlow11:redeemFailed',
  REDEEM_INVITE_TIMEOUT = 'inviteFlow11:redeemInviteTimeout',
  ACCOUNT_SETUP_FAILED = 'inviteFlow11:accountSetupFailed',
  FIREBASE_DISABLED = 'dev:firebaseDisabled',
  FIREBASE_FAILED = 'firebaseFailed',
  IMPORT_CONTACTS_FAILED = 'importContactsFailed',
  GAS_PRICE_UPDATE_FAILED = 'gasPriceUpdateFailed',
  QR_FAILED_INVALID_ADDRESS = 'qrFailedInvalidAddress',
  QR_FAILED_INVALID_RECIPIENT = 'qrFailedInvalidRecipient',
  QR_FAILED_NO_PHONE_NUMBER = 'qrFailedNoPhoneNumber',
  CORRUPTED_CHAIN_DELETED = 'corruptedChainDeleted',
  CONTRACT_KIT_INIT_FAILED = 'contractKitInitFailed',
  CALCULATE_FEE_FAILED = 'calculateFeeFailed',
  FAILED_TO_SWITCH_SYNC_MODES = 'failedToSwitchSyncModes',
  PAYMENT_REQUEST_UPDATE_FAILED = 'paymentRequestFlow:paymentRequestUpdateFailed',
  ADDRESS_VALIDATION_ERROR = 'addressValidationError',
  ADDRESS_VALIDATION_NO_MATCH = 'addressValidationNoMatch',
  ADDRESS_VALIDATION_FULL_POORLY_FORMATTED = 'addressValidationFullPoorlyFormatted',
  ADDRESS_VALIDATION_PARTIAL_POORLY_FORMATTED = 'addressValidationPartialPoorlyFormatted',
  ADDRESS_VALIDATION_FULL_OWN_ADDRESS = 'addressValidationFullOwnAddress',
  ADDRESS_VALIDATION_PARTIAL_OWN_ADDRESS = 'addressValidationPartialOwnAddress',
  KEYCHAIN_STORAGE_ERROR = 'keychainStorageError',
  PROVIDER_RATE_FETCH_FAILED = 'providerRateFetchFailed',
  ACCOUNT_CLEAR_FAILED = 'accountClearFailed',
  GETH_FETCH_ACCOUNTS = 'gethFetchAccounts',
  GETH_ACCOUNT_ALREADY_EXISTS = 'gethAccountAlreadyExists',
  GETH_UNEXPECTED_ADDRESS_ON_ADD = 'gethUnexpectedAddressOnAdd',
  COUNTRY_NOT_AVAILABLE = 'countryNotAvailable',
  MAX_ESCROW_TRANSFER_EXCEEDED = 'maxEscrowTransferExceeded',
  FETCH_FAILED = 'fetchFailed',
  PICTURE_LOAD_FAILED = 'pictureLoadFailed',
  SIMPLEX_PURCHASE_FETCH_FAILED = 'simplexPurchaseFetchFailed',
  PROVIDER_FETCH_FAILED = 'providerFetchFailed',
  CASH_OUT_LIMIT_EXCEEDED = 'cashOutLimitExceeded',
  RAISE_LIMIT_EMAIL_NOT_SENT = 'accountScreen10:raiseLimitEmailNotSent',
  WC2_UNSUPPORTED = 'walletConnect:v2Unsupported',
}
