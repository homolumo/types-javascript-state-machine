// Type definitions for Finite State Machine 2.4
// Project: https://github.com/jakesgordon/javascript-state-machine
// Definitions by: Boris Yankov <https://github.com/borisyankov/>,
// 					Maarten Docter <https://github.com/mdocter>,
// 					William Sears <https://github.com/MrBigDog2U>,
// 					samael <https://github.com/samael65535>,
// 					taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IStateMachineConfig {
	init?: string;
	transitions: ITransitionsConfig[],
	methods?: {
		[key: string]: Function,
	},
}

declare interface ITransitionsConfig {
	name: string,
	from: string | string[],
	to: string | Function
}
	
export class StateMachine {
	state: string;
	observe(name: string, fun: Function): void;
	_fsm: () => {};
	[key: string]: any;
	can(t: string): boolean;
	cannot(t: string): boolean;
	is(s: string): boolean;
	allStates(): string[];
}

export function apply<T extends StateMachine>(instance: T, opts?: IStateMachineConfig): T;
export function factory<T extends StateMachine>(clazz: new(...args: any[]) => T, opts?: IStateMachineConfig): void;