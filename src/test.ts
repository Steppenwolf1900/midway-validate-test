import { Rule, RuleType } from '@midwayjs/validate';

export class Test {
  @Rule(
    RuleType.string().min(1).max(24).required().messages({
      'any.required': 'name必填',
    })
  )
  name: string;
}
