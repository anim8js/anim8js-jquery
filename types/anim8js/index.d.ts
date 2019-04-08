
export * from 'anim8js';
import { FactoryJQuery, SubjectJQuery, AnimatorJQuery, AnimatorsJQuery } from 'anim8js-jquery';

declare module 'anim8js'
{

  export interface Factories
  {
    'jquery': FactoryJQuery;
  }

  export function anim8 (subject: SubjectJQuery): AnimatorJQuery;
  export function anim8s (subject: SubjectJQuery): AnimatorsJQuery;
  export function m8 (subject: SubjectJQuery): AnimatorJQuery;
  export function m8s (subject: SubjectJQuery): AnimatorsJQuery;

  export default function anim8 (subject: SubjectJQuery): AnimatorJQuery;
  export default function anim8s (subject: SubjectJQuery): AnimatorsJQuery;
  export default function m8 (subject: SubjectJQuery): AnimatorJQuery;
  export default function m8s (subject: SubjectJQuery): AnimatorsJQuery;

}