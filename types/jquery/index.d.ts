
import { TransitionInput } from '../anim8js';
import { AnimatorJQuery, AnimatorsJQuery } from 'anim8js-jquery';

declare global
{

  export interface JQuery
  {
    dataPlay (animationAttribute: string, all?: boolean, cache?: boolean): JQuery;
    dataQueue (animationAttribute: string, cache?: boolean): JQuery;
    dataTransition (animationAttribute: string, transition: TransitionInput, all?: boolean, cache?: boolean): JQuery;
    m8 (): AnimatorJQuery;
    anim8 (): AnimatorJQuery;
    animator (): AnimatorJQuery;
    m8s (): AnimatorsJQuery;
    anim8s (): AnimatorsJQuery;
    animators (): AnimatorsJQuery;
    sequence (): JQuery;
    wrapCharacters (tagName: string, attributes?: string): string;
  }
  
}