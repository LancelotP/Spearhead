export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
 **/
  DateTime: Date,
  /** Obfuscated id */
  ResourceId: string,
  /** A JSON */
  JSON: any,
};

export type Action = {
   __typename?: 'Action',
  type: ActionType,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  author: User,
  target?: Maybe<ActonTarget>,
};

export enum ActionType {
  SaleParticipationCreate = 'SALE_PARTICIPATION_CREATE',
  SaleParticipationApplicationAccept = 'SALE_PARTICIPATION_APPLICATION_ACCEPT',
  SaleParticipationApplicationReject = 'SALE_PARTICIPATION_APPLICATION_REJECT',
  SaleParticipationNdaSign = 'SALE_PARTICIPATION_NDA_SIGN',
  SaleParticipationLoiDepositCreate = 'SALE_PARTICIPATION_LOI_DEPOSIT_CREATE',
  SaleParticipationLoiDepositAccept = 'SALE_PARTICIPATION_LOI_DEPOSIT_ACCEPT',
  SaleParticipationLoiDepositReject = 'SALE_PARTICIPATION_LOI_DEPOSIT_REJECT',
  RentalParticipationCreate = 'RENTAL_PARTICIPATION_CREATE'
}

export type ActonTarget = SaleParticipation | LoiDeposit;

export type ChatMessage = {
   __typename?: 'ChatMessage',
  content: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  author: User,
};

export type ChatMessageCreateInput = {
  chatRoomId: Scalars['ID'],
  content: Scalars['String'],
};

export type ChatRoom = {
   __typename?: 'ChatRoom',
  id: Scalars['ID'],
  messages: Array<ChatMessage>,
  lastMessage?: Maybe<ChatMessage>,
  companies: Array<Company>,
};

export type Company = Resource & {
   __typename?: 'Company',
  id: Scalars['ID'],
  name: Scalars['String'],
  fictitious: Scalars['Boolean'],
  viewerIsMember: Scalars['Boolean'],
  viewerIsManager: Scalars['Boolean'],
  viewerIsAdmin: Scalars['Boolean'],
  members: Array<User>,
  sales: Array<Sale>,
  estates: Array<Estate>,
  participations: Array<SaleParticipation>,
  viewerRentalParticipations: Array<RentalParticipation>,
};

export type DataRoom = Resource & {
   __typename?: 'DataRoom',
  id: Scalars['ID'],
  folders: Array<DataRoomFolder>,
  files: Array<DataRoomFile>,
};


export type DataRoomFoldersArgs = {
  parentId?: Maybe<Scalars['ID']>
};


export type DataRoomFilesArgs = {
  parentId?: Maybe<Scalars['ID']>
};

export type DataRoomFile = Resource & {
   __typename?: 'DataRoomFile',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  createdAt: Scalars['Date'],
  updatedAt: Scalars['Date'],
  parent?: Maybe<DataRoomFolder>,
  dataRoom: DataRoom,
  file: File,
  creator: User,
};

export type DataRoomFileCreateInput = {
  dataRoomId: Scalars['ID'],
  parentId?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  fileId: Scalars['ID'],
};

export type DataRoomFileDeleteInput = {
  dataRoomFileId: Scalars['ID'],
};

export type DataRoomFileMoveInput = {
  dataRoomFileId: Scalars['ID'],
  parentId?: Maybe<Scalars['ID']>,
};

export type DataRoomFileUpdateInput = {
  dataRoomFileId: Scalars['ID'],
  name: Scalars['String'],
};

export type DataRoomFolder = Resource & {
   __typename?: 'DataRoomFolder',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  parent?: Maybe<DataRoomFolder>,
  dataRoom: DataRoom,
  breadcrumb: Array<DataRoomFolder>,
  subFolderCount: Scalars['Int'],
  subFilesCount: Scalars['Int'],
};

export type DataRoomFolderCreateInput = {
  dataRoomId: Scalars['ID'],
  parentId?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type DataRoomFolderDeleteInput = {
  dataRoomFolderId: Scalars['ID'],
};

export type DataRoomFolderMoveInput = {
  dataRoomFolderId: Scalars['ID'],
  parentId?: Maybe<Scalars['ID']>,
};

export type DataRoomFolderUpdateInput = {
  dataRoomFolderId: Scalars['ID'],
  name: Scalars['String'],
};



export enum DetentionRegime {
  FullOwnership = 'FULL_OWNERSHIP',
  SplitOwnership = 'SPLIT_OWNERSHIP',
  VolumeLot = 'VOLUME_LOT'
}

export type Estate = Resource & {
   __typename?: 'Estate',
  id: Scalars['ID'],
  name: Scalars['String'],
  address: Scalars['String'],
  reference?: Maybe<Scalars['String']>,
  acquisitionDate?: Maybe<Scalars['Date']>,
  valueExpertise?: Maybe<Scalars['Float']>,
  valueBook?: Maybe<Scalars['Float']>,
  acquisitionPrice?: Maybe<Scalars['String']>,
  surfaceOffice?: Maybe<Scalars['Float']>,
  surfaceHome?: Maybe<Scalars['Float']>,
  surfaceShop?: Maybe<Scalars['Float']>,
  parkingExtCount?: Maybe<Scalars['Float']>,
  parkingIntCount?: Maybe<Scalars['Float']>,
  surfaceWarehouse?: Maybe<Scalars['Float']>,
  surfaceArchive?: Maybe<Scalars['Float']>,
  surfaceRestaurant?: Maybe<Scalars['Float']>,
  floors?: Maybe<Scalars['Float']>,
  type?: Maybe<EstateType>,
  detentionRegime?: Maybe<DetentionRegime>,
  viewerCanCreateSale: Scalars['Boolean'],
  viewerIsAdmin: Scalars['Boolean'],
  viewerIsMember: Scalars['Boolean'],
  sale?: Maybe<Sale>,
  dataRoom: DataRoom,
  lots: Array<Lot>,
  rentalParticipations: Array<RentalParticipation>,
  viewerRentalParticipations: Array<RentalParticipation>,
};

export type EstateCreateInput = {
  name: Scalars['String'],
  address: Scalars['String'],
};

export enum EstateType {
  Offices = 'OFFICES',
  Shops = 'SHOPS',
  Logistics = 'LOGISTICS',
  Housing = 'HOUSING',
  Hotel = 'HOTEL',
  Mixed = 'MIXED',
  Other = 'OTHER'
}

export type EstateUpdateInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  reference?: Maybe<Scalars['String']>,
  valueExpertise?: Maybe<Scalars['Float']>,
  valueBook?: Maybe<Scalars['Float']>,
  acquisitionDate?: Maybe<Scalars['Date']>,
  acquisitionPrice?: Maybe<Scalars['String']>,
  surfaceOffice?: Maybe<Scalars['Float']>,
  surfaceHome?: Maybe<Scalars['Float']>,
  surfaceShop?: Maybe<Scalars['Float']>,
  parkingExtCount?: Maybe<Scalars['Float']>,
  parkingIntCount?: Maybe<Scalars['Float']>,
  surfaceWarehouse?: Maybe<Scalars['Float']>,
  surfaceArchive?: Maybe<Scalars['Float']>,
  surfaceRestaurant?: Maybe<Scalars['Float']>,
  floors?: Maybe<Scalars['Float']>,
  detentionRegime?: Maybe<DetentionRegime>,
  type?: Maybe<EstateType>,
};

export type File = {
   __typename?: 'File',
  name: Scalars['String'],
  id: Scalars['ID'],
  src: Scalars['String'],
};


export type Lease = {
   __typename?: 'Lease',
  endDate?: Maybe<Scalars['Date']>,
  reminderDate?: Maybe<Scalars['Date']>,
  nextDeadline?: Maybe<Scalars['Date']>,
  baseRent?: Maybe<Scalars['Float']>,
  indexedRent?: Maybe<Scalars['Float']>,
  type?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lessor: Company,
  tenant: Company,
  lot: Company,
};

export type LeaseProject = {
   __typename?: 'LeaseProject',
  engine: Scalars['String'],
  name: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  lastVersion: LeaseProjectVersion,
  versions: Array<LeaseProjectVersion>,
};

export type LeaseProjectCreateInput = {
  name: Scalars['String'],
};

export type LeaseProjectVersion = {
   __typename?: 'LeaseProjectVersion',
  version: Scalars['Float'],
  data: Scalars['JSON'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  downloadUrl: Scalars['String'],
  author: User,
  project: LeaseProject,
};

export type LeaseProjectVersionCreateInput = {
  leaseProjectId: Scalars['ID'],
  data: Scalars['JSON'],
};

export type LeaseUpdateInput = {
  leaseId: Scalars['ID'],
  endDate?: Maybe<Scalars['Date']>,
  reminderDate?: Maybe<Scalars['Date']>,
  nextDeadline?: Maybe<Scalars['Date']>,
  type?: Maybe<Scalars['String']>,
  baseRent?: Maybe<Scalars['Float']>,
  indexedRent?: Maybe<Scalars['Float']>,
};

export type LoiDeposit = {
   __typename?: 'LoiDeposit',
  createdAt: Scalars['DateTime'],
  status: LoiDepositStatus,
  id: Scalars['ID'],
  loi: File,
  creator: User,
};

export type LoiDepositCreateInput = {
  saleParticipationId: Scalars['ID'],
  fileId: Scalars['ID'],
};

export enum LoiDepositStatus {
  Sended = 'SENDED',
  Rejected = 'REJECTED',
  Accepted = 'ACCEPTED',
  RevisionAsked = 'REVISION_ASKED'
}

export type Lot = Resource & {
   __typename?: 'Lot',
  id: Scalars['ID'],
  name: Scalars['String'],
  rentable: Scalars['Boolean'],
  availableDate?: Maybe<Scalars['Date']>,
  condition?: Maybe<Scalars['String']>,
  buildingNumber?: Maybe<Scalars['String']>,
  floorNumber?: Maybe<Scalars['String']>,
  compartmentNumber?: Maybe<Scalars['String']>,
  surfaceOffice?: Maybe<Scalars['Float']>,
  surfaceHome?: Maybe<Scalars['Float']>,
  surfaceShop?: Maybe<Scalars['Float']>,
  parkingExtCount?: Maybe<Scalars['Float']>,
  parkingIntCount?: Maybe<Scalars['Float']>,
  surfaceWarehouse?: Maybe<Scalars['Float']>,
  surfaceArchive?: Maybe<Scalars['Float']>,
  surfaceRestaurant?: Maybe<Scalars['Float']>,
  establismentOpenToThePublicCat?: Maybe<Scalars['Float']>,
  visibility?: Maybe<Scalars['String']>,
  indivisibility?: Maybe<Scalars['Float']>,
  estate: Estate,
  lease?: Maybe<Lease>,
};

export type LotCreateInput = {
  estateId: Scalars['ID'],
  name: Scalars['String'],
};

export type LotUpdateInput = {
  lotId: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  tenantName?: Maybe<Scalars['String']>,
  rentable?: Maybe<Scalars['Boolean']>,
  buildingNumber?: Maybe<Scalars['String']>,
  floorNumber?: Maybe<Scalars['String']>,
  compartmentNumber?: Maybe<Scalars['String']>,
  surfaceOffice?: Maybe<Scalars['Float']>,
  surfaceHome?: Maybe<Scalars['Float']>,
  surfaceShop?: Maybe<Scalars['Float']>,
  parkingExtCount?: Maybe<Scalars['Float']>,
  parkingIntCount?: Maybe<Scalars['Float']>,
  surfaceWarehouse?: Maybe<Scalars['Float']>,
  surfaceArchive?: Maybe<Scalars['Float']>,
  surfaceRestaurant?: Maybe<Scalars['Float']>,
  establismentOpenToThePublicCat?: Maybe<Scalars['Float']>,
  availableDate?: Maybe<Scalars['Date']>,
  condition?: Maybe<Scalars['String']>,
  visibility?: Maybe<Scalars['String']>,
  indivisibility?: Maybe<Scalars['Float']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  userCreate: User,
  estateCreate: Estate,
  estateUpdate: Estate,
  saleCreate: Sale,
  saleParticipationCreate: SaleParticipation,
  saleParticipationApplicationAccept: SaleParticipation,
  saleParticipationApplicationReject: SaleParticipation,
  saleParticipationLoiAccept: SaleParticipation,
  saleParticipationLoiReject: SaleParticipation,
  saleParticipationSignNda: SaleParticipation,
  chatMessageCreate: ChatMessage,
  dataRoomFolderCreate: DataRoomFolder,
  dataRoomFolderUpdate: DataRoomFolder,
  dataRoomFolderDelete: DataRoomFolder,
  dataRoomFolderMove: DataRoomFolder,
  dataRoomFileCreate: DataRoomFile,
  dataRoomFileUpdate: DataRoomFile,
  dataRoomFileDelete: DataRoomFile,
  dataRoomFileMove: DataRoomFile,
  loiDepositCreate: LoiDeposit,
  lotCreate: Lot,
  lotUpdate: Lot,
  leaseUpdate: Lease,
  leaseProjectCreate: LeaseProject,
  leaseProjectVersionCreate: LeaseProjectVersion,
  rentalParticipationCreate: RentalParticipation,
};


export type MutationUserCreateArgs = {
  input: UserCreateInput
};


export type MutationEstateCreateArgs = {
  input: EstateCreateInput
};


export type MutationEstateUpdateArgs = {
  input: EstateUpdateInput
};


export type MutationSaleCreateArgs = {
  input: SaleCreateInput
};


export type MutationSaleParticipationCreateArgs = {
  input: SaleParticipationCreateInput
};


export type MutationSaleParticipationApplicationAcceptArgs = {
  input: SaleParticipationApplicationAcceptInput
};


export type MutationSaleParticipationApplicationRejectArgs = {
  input: SaleParticipationApplicationRejectInput
};


export type MutationSaleParticipationLoiAcceptArgs = {
  input: SaleParticipationLoiAcceptInput
};


export type MutationSaleParticipationLoiRejectArgs = {
  input: SaleParticipationLoiRejectInput
};


export type MutationSaleParticipationSignNdaArgs = {
  input: SaleParticipationSignNdaInput
};


export type MutationChatMessageCreateArgs = {
  input: ChatMessageCreateInput
};


export type MutationDataRoomFolderCreateArgs = {
  input: DataRoomFolderCreateInput
};


export type MutationDataRoomFolderUpdateArgs = {
  input: DataRoomFolderUpdateInput
};


export type MutationDataRoomFolderDeleteArgs = {
  input: DataRoomFolderDeleteInput
};


export type MutationDataRoomFolderMoveArgs = {
  input: DataRoomFolderMoveInput
};


export type MutationDataRoomFileCreateArgs = {
  input: DataRoomFileCreateInput
};


export type MutationDataRoomFileUpdateArgs = {
  input: DataRoomFileUpdateInput
};


export type MutationDataRoomFileDeleteArgs = {
  input: DataRoomFileDeleteInput
};


export type MutationDataRoomFileMoveArgs = {
  input: DataRoomFileMoveInput
};


export type MutationLoiDepositCreateArgs = {
  input: LoiDepositCreateInput
};


export type MutationLotCreateArgs = {
  input: LotCreateInput
};


export type MutationLotUpdateArgs = {
  input: LotUpdateInput
};


export type MutationLeaseUpdateArgs = {
  input: LeaseUpdateInput
};


export type MutationLeaseProjectCreateArgs = {
  input: LeaseProjectCreateInput
};


export type MutationLeaseProjectVersionCreateArgs = {
  input: LeaseProjectVersionCreateInput
};


export type MutationRentalParticipationCreateArgs = {
  input: RentalParticipationCreateInput
};

export type Node = {
  id: Scalars['ResourceId'],
};

export type Query = {
   __typename?: 'Query',
  viewer?: Maybe<User>,
  estate?: Maybe<Estate>,
  rentals: Array<Estate>,
  sales: Array<Sale>,
  sale?: Maybe<Sale>,
  company?: Maybe<Company>,
  chatRoom?: Maybe<ChatRoom>,
  dataRoom?: Maybe<DataRoom>,
  dataRoomFolder?: Maybe<DataRoomFolder>,
  dataRoomFile?: Maybe<DataRoomFile>,
  lot?: Maybe<Lot>,
  leaseProject?: Maybe<LeaseProject>,
  rentalParticipation?: Maybe<RentalParticipation>,
};


export type QueryEstateArgs = {
  estateId: Scalars['ID']
};


export type QuerySaleArgs = {
  saleId: Scalars['ID']
};


export type QueryCompanyArgs = {
  companyId: Scalars['ID']
};


export type QueryChatRoomArgs = {
  chatRoomId: Scalars['ID']
};


export type QueryDataRoomArgs = {
  dataRoomId: Scalars['ID']
};


export type QueryDataRoomFolderArgs = {
  dataRoomFolderId: Scalars['ID']
};


export type QueryDataRoomFileArgs = {
  dataRoomFileId: Scalars['ID']
};


export type QueryLotArgs = {
  lotId: Scalars['ID']
};


export type QueryLeaseProjectArgs = {
  leaseProjectId: Scalars['ID']
};


export type QueryRentalParticipationArgs = {
  rentalParticipationId: Scalars['ResourceId']
};

export type RentalParticipation = Node & {
   __typename?: 'RentalParticipation',
  id: Scalars['ResourceId'],
  viewerIsMember: Scalars['Boolean'],
  viewerIsLessor: Scalars['Boolean'],
  viewerIsTenant: Scalars['Boolean'],
  name: Scalars['String'],
  estate: Estate,
  lots: Array<Lot>,
  company: Company,
  history: Array<Action>,
  chatRoom: ChatRoom,
};

export type RentalParticipationCreateInput = {
  estateId: Scalars['ID'],
  lotIds: Array<Scalars['ID']>,
  content: Scalars['String'],
};

export type Resource = {
  id: Scalars['ID'],
};


export type Sale = Resource & {
   __typename?: 'Sale',
  id: Scalars['ID'],
  loiDepositDate: Scalars['Date'],
  nda: File,
  seller?: Maybe<Company>,
  targetPrice: Scalars['String'],
  estate?: Maybe<Estate>,
  participations: Array<SaleParticipation>,
  viewerParticipation?: Maybe<SaleParticipation>,
};

export type SaleCreateInput = {
  estateId: Scalars['ID'],
  isPublic: Scalars['Boolean'],
  loiDepositDate: Scalars['Date'],
  targetPrice: Scalars['String'],
  ndaId: Scalars['String'],
  memoId: Scalars['String'],
};

export type SaleParticipation = Resource & {
   __typename?: 'SaleParticipation',
  id: Scalars['ID'],
  status: SaleParticipationStatus,
  ndaSignedAt?: Maybe<Scalars['Date']>,
  company: Company,
  sale: Sale,
  chatRoom: ChatRoom,
  loiDeposits: Array<LoiDeposit>,
  actions: Array<Action>,
  rejected: Scalars['Boolean'],
};

export type SaleParticipationApplicationAcceptInput = {
  saleParticipationId: Scalars['ID'],
};

export type SaleParticipationApplicationRejectInput = {
  saleParticipationId: Scalars['ID'],
};

export type SaleParticipationCreateInput = {
  saleId: Scalars['ID'],
};

export type SaleParticipationLoiAcceptInput = {
  saleParticipationId: Scalars['ID'],
  loiDepositId: Scalars['ID'],
};

export type SaleParticipationLoiRejectInput = {
  saleParticipationId: Scalars['ID'],
  loiDepositId: Scalars['ID'],
};

export type SaleParticipationSignNdaInput = {
  saleParticipationId: Scalars['ID'],
};

export enum SaleParticipationStatus {
  Application = 'APPLICATION',
  ApplicationRejected = 'APPLICATION_REJECTED',
  AwaitingNda = 'AWAITING_NDA',
  LoiAwaiting = 'LOI_AWAITING',
  LoiSended = 'LOI_SENDED',
  LoiRejected = 'LOI_REJECTED',
  LoiAccepted = 'LOI_ACCEPTED'
}

export type Subscription = {
   __typename?: 'Subscription',
  estateAdded: Estate,
  leaseProjectVersionCreated: LeaseProjectVersion,
};


export type SubscriptionLeaseProjectVersionCreatedArgs = {
  leaseProjectId: Scalars['ID']
};

export type User = Resource & {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  phoneNumber?: Maybe<Scalars['String']>,
  isViewer: Scalars['Boolean'],
  company: Company,
  leaseProjects: Array<LeaseProject>,
};

export type UserCreateInput = {
  email: Scalars['String'],
  sub: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  companyName: Scalars['String'],
  phoneNumber: Scalars['String'],
};
