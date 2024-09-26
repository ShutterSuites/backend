"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadGenerationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const form_entity_1 = require("../entities/form.entity");
const question_entity_1 = require("../entities/question.entity");
const lead_generation_controller_1 = require("./lead-generation.controller");
const lead_generation_service_1 = require("./lead-generation.service");
const submission_entity_1 = require("../entities/submission.entity");
let LeadGenerationModule = class LeadGenerationModule {
};
exports.LeadGenerationModule = LeadGenerationModule;
exports.LeadGenerationModule = LeadGenerationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([form_entity_1.Form, question_entity_1.Question, submission_entity_1.Submission])],
        controllers: [lead_generation_controller_1.LeadGenerationController],
        providers: [lead_generation_service_1.LeadGenerationService],
    })
], LeadGenerationModule);
//# sourceMappingURL=lead-generation.module.js.map