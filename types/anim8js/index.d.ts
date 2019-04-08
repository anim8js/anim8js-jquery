
export * from 'anim8js';
import { FactoryJQuery, SubjectJQuery, SubjectsJQuery, AnimatorJQuery, AnimatorsJQuery } from 'anim8js-jquery';

declare module 'anim8js'
{

  export interface Factories
  {
    'jquery': FactoryJQuery;
  }

  export function anim8 (subject: SubjectJQuery): AnimatorJQuery;
  export function anim8s (subject: SubjectsJQuery): AnimatorsJQuery;
  export function m8 (subject: SubjectJQuery): AnimatorJQuery;
  export function m8s (subject: SubjectsJQuery): AnimatorsJQuery;

  export default function (subject: SubjectJQuery): AnimatorJQuery;
  export default function (subject: SubjectJQuery[]): AnimatorsJQuery;

}