/* 
 * Copyright 2018, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Rule             from '../../../parser/Rule';
import SimpleExpression from '../../../parser/SimpleExpression';

/**
 * The word `null` to represent the null value.
 * 
 * @author Emanuel Rabina
 */
export default new Rule('NullLiteral',
	new SimpleExpression(/null/),
	() => () => {
		return null; // TODO: The parser uses null to mean 'failed parse', so this might not work?
	}
);
