
import * as JQuery from 'jquery';
import { Animators, Sequence, Animator, Factory } from './types/anim8js';
import { AttributesDom } from 'anim8js-dom';

declare module 'anim8js-jquery'
{
  
  export type SubjectJQuery = JQuery;

  export type AnimatorJQuery = Animator<AttributesDom, SubjectJQuery>;

  export type AnimatorsJQuery = Animators<AttributesDom, SubjectJQuery>;

  export type SequenceJQuery = Sequence<AttributesDom, SubjectJQuery>;

  export class FactoryJQuery<A = AttributesDom, S = SubjectJQuery> extends Factory<A, S>
  {
    public priority: 10;
  }

}
