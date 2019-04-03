"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Role",
    embedded: false
  },
  {
    name: "TodoList",
    embedded: false
  },
  {
    name: "Todo",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "MessageComment",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Document",
    embedded: false
  },
  {
    name: "DocumentComment",
    embedded: false
  },
  {
    name: "Folder",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
