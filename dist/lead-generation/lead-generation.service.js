"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadGenerationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const form_entity_1 = require("../entities/form.entity");
const question_entity_1 = require("../entities/question.entity");
const submission_entity_1 = require("../entities/submission.entity");
let LeadGenerationService = class LeadGenerationService {
    constructor(formRepository, questionRepository, submissionRepository) {
        this.formRepository = formRepository;
        this.questionRepository = questionRepository;
        this.submissionRepository = submissionRepository;
    }
    async saveFormWithQuestions(formTitle, questions) {
        const form = this.formRepository.create({ title: formTitle, questions });
        return await this.formRepository.save(form);
    }
    async getAllForms() {
        return await this.formRepository.find();
    }
    async getFormById(id) {
        return await this.formRepository.findOne({
            where: { id },
            relations: ['questions'],
        });
    }
    async submitForm(formId, answers) {
        const form = await this.formRepository.findOne({ where: { id: formId } });
        if (!form)
            throw new Error('Form not found');
        const submission = new submission_entity_1.Submission();
        submission.form = form;
        submission.answers = answers;
        return await this.submissionRepository.save(submission);
    }
};
exports.LeadGenerationService = LeadGenerationService;
exports.LeadGenerationService = LeadGenerationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_entity_1.Form)),
    __param(1, (0, typeorm_1.InjectRepository)(question_entity_1.Question)),
    __param(2, (0, typeorm_1.InjectRepository)(submission_entity_1.Submission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LeadGenerationService);
//# sourceMappingURL=lead-generation.service.js.map