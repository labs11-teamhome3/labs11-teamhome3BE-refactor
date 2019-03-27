module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateTeam {
  count: Int!
}

type AggregateTodo {
  count: Int!
}

type AggregateTodoList {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createTodoList(data: TodoListCreateInput!): TodoList!
  updateTodoList(data: TodoListUpdateInput!, where: TodoListWhereUniqueInput!): TodoList
  updateManyTodoLists(data: TodoListUpdateManyMutationInput!, where: TodoListWhereInput): BatchPayload!
  upsertTodoList(where: TodoListWhereUniqueInput!, create: TodoListCreateInput!, update: TodoListUpdateInput!): TodoList!
  deleteTodoList(where: TodoListWhereUniqueInput!): TodoList
  deleteManyTodoLists(where: TodoListWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  todoList(where: TodoListWhereUniqueInput!): TodoList
  todoLists(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoList]!
  todoListsConnection(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoListConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  todoList(where: TodoListSubscriptionWhereInput): TodoListSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  teamName: String!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  todoLists(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoList!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  teamName: String!
  members: UserCreateManyWithoutInTeamInput
  todoLists: TodoListCreateManyWithoutInTeamInput
}

input TeamCreateOneWithoutMembersInput {
  create: TeamCreateWithoutMembersInput
  connect: TeamWhereUniqueInput
}

input TeamCreateOneWithoutTodoListsInput {
  create: TeamCreateWithoutTodoListsInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutMembersInput {
  teamName: String!
  todoLists: TodoListCreateManyWithoutInTeamInput
}

input TeamCreateWithoutTodoListsInput {
  teamName: String!
  members: UserCreateManyWithoutInTeamInput
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  teamName_ASC
  teamName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: ID!
  teamName: String!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  teamName: String
  members: UserUpdateManyWithoutInTeamInput
  todoLists: TodoListUpdateManyWithoutInTeamInput
}

input TeamUpdateManyMutationInput {
  teamName: String
}

input TeamUpdateOneWithoutMembersInput {
  create: TeamCreateWithoutMembersInput
  update: TeamUpdateWithoutMembersDataInput
  upsert: TeamUpsertWithoutMembersInput
  delete: Boolean
  disconnect: Boolean
  connect: TeamWhereUniqueInput
}

input TeamUpdateOneWithoutTodoListsInput {
  create: TeamCreateWithoutTodoListsInput
  update: TeamUpdateWithoutTodoListsDataInput
  upsert: TeamUpsertWithoutTodoListsInput
  delete: Boolean
  disconnect: Boolean
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutMembersDataInput {
  teamName: String
  todoLists: TodoListUpdateManyWithoutInTeamInput
}

input TeamUpdateWithoutTodoListsDataInput {
  teamName: String
  members: UserUpdateManyWithoutInTeamInput
}

input TeamUpsertWithoutMembersInput {
  update: TeamUpdateWithoutMembersDataInput!
  create: TeamCreateWithoutMembersInput!
}

input TeamUpsertWithoutTodoListsInput {
  update: TeamUpdateWithoutTodoListsDataInput!
  create: TeamCreateWithoutTodoListsInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  teamName: String
  teamName_not: String
  teamName_in: [String!]
  teamName_not_in: [String!]
  teamName_lt: String
  teamName_lte: String
  teamName_gt: String
  teamName_gte: String
  teamName_contains: String
  teamName_not_contains: String
  teamName_starts_with: String
  teamName_not_starts_with: String
  teamName_ends_with: String
  teamName_not_ends_with: String
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  todoLists_every: TodoListWhereInput
  todoLists_some: TodoListWhereInput
  todoLists_none: TodoListWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
}

type Todo {
  id: ID!
  description: String!
  partOf: TodoList
  completed: Boolean
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  description: String!
  partOf: TodoListCreateOneWithoutTodosInput
  completed: Boolean
}

input TodoCreateManyWithoutPartOfInput {
  create: [TodoCreateWithoutPartOfInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutPartOfInput {
  description: String!
  completed: Boolean
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

type TodoList {
  id: ID!
  createdAt: DateTime!
  description: String!
  ownedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  assignedTo(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
  completed: Boolean
  inTeam: Team
}

type TodoListConnection {
  pageInfo: PageInfo!
  edges: [TodoListEdge]!
  aggregate: AggregateTodoList!
}

input TodoListCreateInput {
  description: String!
  ownedBy: UserCreateManyWithoutTodoListsOwnedInput
  assignedTo: UserCreateManyWithoutTodoListsAssignedInput
  todos: TodoCreateManyWithoutPartOfInput
  completed: Boolean
  inTeam: TeamCreateOneWithoutTodoListsInput
}

input TodoListCreateManyWithoutAssignedToInput {
  create: [TodoListCreateWithoutAssignedToInput!]
  connect: [TodoListWhereUniqueInput!]
}

input TodoListCreateManyWithoutInTeamInput {
  create: [TodoListCreateWithoutInTeamInput!]
  connect: [TodoListWhereUniqueInput!]
}

input TodoListCreateManyWithoutOwnedByInput {
  create: [TodoListCreateWithoutOwnedByInput!]
  connect: [TodoListWhereUniqueInput!]
}

input TodoListCreateOneWithoutTodosInput {
  create: TodoListCreateWithoutTodosInput
  connect: TodoListWhereUniqueInput
}

input TodoListCreateWithoutAssignedToInput {
  description: String!
  ownedBy: UserCreateManyWithoutTodoListsOwnedInput
  todos: TodoCreateManyWithoutPartOfInput
  completed: Boolean
  inTeam: TeamCreateOneWithoutTodoListsInput
}

input TodoListCreateWithoutInTeamInput {
  description: String!
  ownedBy: UserCreateManyWithoutTodoListsOwnedInput
  assignedTo: UserCreateManyWithoutTodoListsAssignedInput
  todos: TodoCreateManyWithoutPartOfInput
  completed: Boolean
}

input TodoListCreateWithoutOwnedByInput {
  description: String!
  assignedTo: UserCreateManyWithoutTodoListsAssignedInput
  todos: TodoCreateManyWithoutPartOfInput
  completed: Boolean
  inTeam: TeamCreateOneWithoutTodoListsInput
}

input TodoListCreateWithoutTodosInput {
  description: String!
  ownedBy: UserCreateManyWithoutTodoListsOwnedInput
  assignedTo: UserCreateManyWithoutTodoListsAssignedInput
  completed: Boolean
  inTeam: TeamCreateOneWithoutTodoListsInput
}

type TodoListEdge {
  node: TodoList!
  cursor: String!
}

enum TodoListOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  completed_ASC
  completed_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoListPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  completed: Boolean
}

input TodoListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  AND: [TodoListScalarWhereInput!]
  OR: [TodoListScalarWhereInput!]
  NOT: [TodoListScalarWhereInput!]
}

type TodoListSubscriptionPayload {
  mutation: MutationType!
  node: TodoList
  updatedFields: [String!]
  previousValues: TodoListPreviousValues
}

input TodoListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoListWhereInput
  AND: [TodoListSubscriptionWhereInput!]
  OR: [TodoListSubscriptionWhereInput!]
  NOT: [TodoListSubscriptionWhereInput!]
}

input TodoListUpdateInput {
  description: String
  ownedBy: UserUpdateManyWithoutTodoListsOwnedInput
  assignedTo: UserUpdateManyWithoutTodoListsAssignedInput
  todos: TodoUpdateManyWithoutPartOfInput
  completed: Boolean
  inTeam: TeamUpdateOneWithoutTodoListsInput
}

input TodoListUpdateManyDataInput {
  description: String
  completed: Boolean
}

input TodoListUpdateManyMutationInput {
  description: String
  completed: Boolean
}

input TodoListUpdateManyWithoutAssignedToInput {
  create: [TodoListCreateWithoutAssignedToInput!]
  delete: [TodoListWhereUniqueInput!]
  connect: [TodoListWhereUniqueInput!]
  set: [TodoListWhereUniqueInput!]
  disconnect: [TodoListWhereUniqueInput!]
  update: [TodoListUpdateWithWhereUniqueWithoutAssignedToInput!]
  upsert: [TodoListUpsertWithWhereUniqueWithoutAssignedToInput!]
  deleteMany: [TodoListScalarWhereInput!]
  updateMany: [TodoListUpdateManyWithWhereNestedInput!]
}

input TodoListUpdateManyWithoutInTeamInput {
  create: [TodoListCreateWithoutInTeamInput!]
  delete: [TodoListWhereUniqueInput!]
  connect: [TodoListWhereUniqueInput!]
  set: [TodoListWhereUniqueInput!]
  disconnect: [TodoListWhereUniqueInput!]
  update: [TodoListUpdateWithWhereUniqueWithoutInTeamInput!]
  upsert: [TodoListUpsertWithWhereUniqueWithoutInTeamInput!]
  deleteMany: [TodoListScalarWhereInput!]
  updateMany: [TodoListUpdateManyWithWhereNestedInput!]
}

input TodoListUpdateManyWithoutOwnedByInput {
  create: [TodoListCreateWithoutOwnedByInput!]
  delete: [TodoListWhereUniqueInput!]
  connect: [TodoListWhereUniqueInput!]
  set: [TodoListWhereUniqueInput!]
  disconnect: [TodoListWhereUniqueInput!]
  update: [TodoListUpdateWithWhereUniqueWithoutOwnedByInput!]
  upsert: [TodoListUpsertWithWhereUniqueWithoutOwnedByInput!]
  deleteMany: [TodoListScalarWhereInput!]
  updateMany: [TodoListUpdateManyWithWhereNestedInput!]
}

input TodoListUpdateManyWithWhereNestedInput {
  where: TodoListScalarWhereInput!
  data: TodoListUpdateManyDataInput!
}

input TodoListUpdateOneWithoutTodosInput {
  create: TodoListCreateWithoutTodosInput
  update: TodoListUpdateWithoutTodosDataInput
  upsert: TodoListUpsertWithoutTodosInput
  delete: Boolean
  disconnect: Boolean
  connect: TodoListWhereUniqueInput
}

input TodoListUpdateWithoutAssignedToDataInput {
  description: String
  ownedBy: UserUpdateManyWithoutTodoListsOwnedInput
  todos: TodoUpdateManyWithoutPartOfInput
  completed: Boolean
  inTeam: TeamUpdateOneWithoutTodoListsInput
}

input TodoListUpdateWithoutInTeamDataInput {
  description: String
  ownedBy: UserUpdateManyWithoutTodoListsOwnedInput
  assignedTo: UserUpdateManyWithoutTodoListsAssignedInput
  todos: TodoUpdateManyWithoutPartOfInput
  completed: Boolean
}

input TodoListUpdateWithoutOwnedByDataInput {
  description: String
  assignedTo: UserUpdateManyWithoutTodoListsAssignedInput
  todos: TodoUpdateManyWithoutPartOfInput
  completed: Boolean
  inTeam: TeamUpdateOneWithoutTodoListsInput
}

input TodoListUpdateWithoutTodosDataInput {
  description: String
  ownedBy: UserUpdateManyWithoutTodoListsOwnedInput
  assignedTo: UserUpdateManyWithoutTodoListsAssignedInput
  completed: Boolean
  inTeam: TeamUpdateOneWithoutTodoListsInput
}

input TodoListUpdateWithWhereUniqueWithoutAssignedToInput {
  where: TodoListWhereUniqueInput!
  data: TodoListUpdateWithoutAssignedToDataInput!
}

input TodoListUpdateWithWhereUniqueWithoutInTeamInput {
  where: TodoListWhereUniqueInput!
  data: TodoListUpdateWithoutInTeamDataInput!
}

input TodoListUpdateWithWhereUniqueWithoutOwnedByInput {
  where: TodoListWhereUniqueInput!
  data: TodoListUpdateWithoutOwnedByDataInput!
}

input TodoListUpsertWithoutTodosInput {
  update: TodoListUpdateWithoutTodosDataInput!
  create: TodoListCreateWithoutTodosInput!
}

input TodoListUpsertWithWhereUniqueWithoutAssignedToInput {
  where: TodoListWhereUniqueInput!
  update: TodoListUpdateWithoutAssignedToDataInput!
  create: TodoListCreateWithoutAssignedToInput!
}

input TodoListUpsertWithWhereUniqueWithoutInTeamInput {
  where: TodoListWhereUniqueInput!
  update: TodoListUpdateWithoutInTeamDataInput!
  create: TodoListCreateWithoutInTeamInput!
}

input TodoListUpsertWithWhereUniqueWithoutOwnedByInput {
  where: TodoListWhereUniqueInput!
  update: TodoListUpdateWithoutOwnedByDataInput!
  create: TodoListCreateWithoutOwnedByInput!
}

input TodoListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  ownedBy_every: UserWhereInput
  ownedBy_some: UserWhereInput
  ownedBy_none: UserWhereInput
  assignedTo_every: UserWhereInput
  assignedTo_some: UserWhereInput
  assignedTo_none: UserWhereInput
  todos_every: TodoWhereInput
  todos_some: TodoWhereInput
  todos_none: TodoWhereInput
  completed: Boolean
  completed_not: Boolean
  inTeam: TeamWhereInput
  AND: [TodoListWhereInput!]
  OR: [TodoListWhereInput!]
  NOT: [TodoListWhereInput!]
}

input TodoListWhereUniqueInput {
  id: ID
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  completed_ASC
  completed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoPreviousValues {
  id: ID!
  description: String!
  completed: Boolean
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
  OR: [TodoSubscriptionWhereInput!]
  NOT: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  description: String
  partOf: TodoListUpdateOneWithoutTodosInput
  completed: Boolean
}

input TodoUpdateManyDataInput {
  description: String
  completed: Boolean
}

input TodoUpdateManyMutationInput {
  description: String
  completed: Boolean
}

input TodoUpdateManyWithoutPartOfInput {
  create: [TodoCreateWithoutPartOfInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutPartOfInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutPartOfInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutPartOfDataInput {
  description: String
  completed: Boolean
}

input TodoUpdateWithWhereUniqueWithoutPartOfInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutPartOfDataInput!
}

input TodoUpsertWithWhereUniqueWithoutPartOfInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutPartOfDataInput!
  create: TodoCreateWithoutPartOfInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  partOf: TodoListWhereInput
  completed: Boolean
  completed_not: Boolean
  AND: [TodoWhereInput!]
  OR: [TodoWhereInput!]
  NOT: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  name: String!
  todoListsOwned(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoList!]
  todoListsAssigned(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoList!]
  inTeam: Team
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  todoListsOwned: TodoListCreateManyWithoutOwnedByInput
  todoListsAssigned: TodoListCreateManyWithoutAssignedToInput
  inTeam: TeamCreateOneWithoutMembersInput
}

input UserCreateManyWithoutInTeamInput {
  create: [UserCreateWithoutInTeamInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTodoListsAssignedInput {
  create: [UserCreateWithoutTodoListsAssignedInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTodoListsOwnedInput {
  create: [UserCreateWithoutTodoListsOwnedInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateWithoutInTeamInput {
  name: String!
  todoListsOwned: TodoListCreateManyWithoutOwnedByInput
  todoListsAssigned: TodoListCreateManyWithoutAssignedToInput
}

input UserCreateWithoutTodoListsAssignedInput {
  name: String!
  todoListsOwned: TodoListCreateManyWithoutOwnedByInput
  inTeam: TeamCreateOneWithoutMembersInput
}

input UserCreateWithoutTodoListsOwnedInput {
  name: String!
  todoListsAssigned: TodoListCreateManyWithoutAssignedToInput
  inTeam: TeamCreateOneWithoutMembersInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  todoListsOwned: TodoListUpdateManyWithoutOwnedByInput
  todoListsAssigned: TodoListUpdateManyWithoutAssignedToInput
  inTeam: TeamUpdateOneWithoutMembersInput
}

input UserUpdateManyDataInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateManyWithoutInTeamInput {
  create: [UserCreateWithoutInTeamInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutInTeamInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutInTeamInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTodoListsAssignedInput {
  create: [UserCreateWithoutTodoListsAssignedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTodoListsAssignedInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTodoListsAssignedInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTodoListsOwnedInput {
  create: [UserCreateWithoutTodoListsOwnedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTodoListsOwnedInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTodoListsOwnedInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithoutInTeamDataInput {
  name: String
  todoListsOwned: TodoListUpdateManyWithoutOwnedByInput
  todoListsAssigned: TodoListUpdateManyWithoutAssignedToInput
}

input UserUpdateWithoutTodoListsAssignedDataInput {
  name: String
  todoListsOwned: TodoListUpdateManyWithoutOwnedByInput
  inTeam: TeamUpdateOneWithoutMembersInput
}

input UserUpdateWithoutTodoListsOwnedDataInput {
  name: String
  todoListsAssigned: TodoListUpdateManyWithoutAssignedToInput
  inTeam: TeamUpdateOneWithoutMembersInput
}

input UserUpdateWithWhereUniqueWithoutInTeamInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutInTeamDataInput!
}

input UserUpdateWithWhereUniqueWithoutTodoListsAssignedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTodoListsAssignedDataInput!
}

input UserUpdateWithWhereUniqueWithoutTodoListsOwnedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTodoListsOwnedDataInput!
}

input UserUpsertWithWhereUniqueWithoutInTeamInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutInTeamDataInput!
  create: UserCreateWithoutInTeamInput!
}

input UserUpsertWithWhereUniqueWithoutTodoListsAssignedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTodoListsAssignedDataInput!
  create: UserCreateWithoutTodoListsAssignedInput!
}

input UserUpsertWithWhereUniqueWithoutTodoListsOwnedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTodoListsOwnedDataInput!
  create: UserCreateWithoutTodoListsOwnedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  todoListsOwned_every: TodoListWhereInput
  todoListsOwned_some: TodoListWhereInput
  todoListsOwned_none: TodoListWhereInput
  todoListsAssigned_every: TodoListWhereInput
  todoListsAssigned_some: TodoListWhereInput
  todoListsAssigned_none: TodoListWhereInput
  inTeam: TeamWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    