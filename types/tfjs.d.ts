import { backend_util as backend_util_2 } from './tfjs-core';
import { BackendTimingInfo as BackendTimingInfo_2 } from './tfjs-core';
import { BackendValues as BackendValues_2 } from './tfjs-core';
import { DataId as DataId_4 } from './tfjs-core';
import { DataStorage as DataStorage_2 } from './tfjs-core';
import { DataType as DataType_2 } from './tfjs-core';
import { DataTypeMap as DataTypeMap_2 } from './tfjs-core';
import { InferenceModel as InferenceModel_2 } from './tfjs-core';
import { io as io_2 } from './tfjs-core';
import { KernelBackend as KernelBackend_2 } from './tfjs-core';
import { MemoryInfo as MemoryInfo_2 } from './tfjs-core';
import { ModelPredictConfig as ModelPredictConfig_2 } from './tfjs-core';
import { NamedAttrMap as NamedAttrMap_2 } from './tfjs-core';
import { NamedTensorMap as NamedTensorMap_2 } from './tfjs-core';
import { NumericDataType as NumericDataType_2 } from './tfjs-core';
import { Optimizer as Optimizer_2 } from './tfjs-core';
import { PixelData as PixelData_2 } from './tfjs-core';
import { Rank as Rank_2 } from './tfjs-core';
import { Scalar as Scalar_2 } from './tfjs-core';
import { serialization as serialization_2 } from './tfjs-core';
import { Tensor2D as Tensor2D_2 } from './tfjs-core';
import { Tensor3D as Tensor3D_2 } from './tfjs-core';
import { Tensor as Tensor_2 } from './tfjs-core';
import { TensorBuffer as TensorBuffer_2 } from './tfjs-core';
import { TensorContainer as TensorContainer_2 } from './tfjs-core';
import { TensorInfo as TensorInfo_3 } from './tfjs-core';
import * as tf from './tfjs-core';
import { TimingInfo as TimingInfo_2 } from './tfjs-core';
import { TypedArray as TypedArray_2 } from './tfjs-core';

export declare const Abs = "Abs";

export declare const abs: typeof abs_;

/**
 * Computes absolute value element-wise: `abs(x)`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.abs().print();  // or tf.abs(x)
 * ```
 * @param x The input `tf.Tensor`.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function abs_<T extends Tensor>(x: T | TensorLike): T;

export declare type AbsInputs = UnaryInputs;

export declare const Acos = "Acos";

export declare const acos: typeof acos_;

/**
 * Computes acos of the input `tf.Tensor` element-wise: `acos(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.acos().print();  // or tf.acos(x)
 * ```
 * @param x The input tensor.
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function acos_<T extends Tensor>(x: T | TensorLike): T;

export declare const Acosh = "Acosh";

export declare const acosh: typeof acosh_;

/**
 * Computes the inverse hyperbolic cos of the input `tf.Tensor` element-wise:
 * `acosh(x)`
 *
 * ```js
 * const x = tf.tensor1d([10, 1, 3, 5.7]);
 *
 * x.acosh().print();  // or tf.acosh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function acosh_<T extends Tensor>(x: T | TensorLike): T;

export declare type AcoshInputs = UnaryInputs;

export declare type AcosInputs = UnaryInputs;

declare type Activation = 'linear' | 'relu' | 'prelu' | 'elu' | 'relu6' | 'leakyrelu' | 'sigmoid';

/**
 * Applies an activation function to an output.
 *
 * This layer applies element-wise activation function.  Other layers, notably
 * `dense` can also apply activation functions.  Use this isolated activation
 * function to extract the values before and after the
 * activation. For instance:
 *
 * ```js
 * const input = tf.input({shape: [5]});
 * const denseLayer = tf.layers.dense({units: 1});
 * const activationLayer = tf.layers.activation({activation: 'relu6'});
 *
 * // Obtain the output symbolic tensors by applying the layers in order.
 * const denseOutput = denseLayer.apply(input);
 * const activationOutput = activationLayer.apply(denseOutput);
 *
 * // Create the model based on the inputs.
 * const model = tf.model({
 *     inputs: input,
 *     outputs: [denseOutput, activationOutput]
 * });
 *
 * // Collect both outputs and print separately.
 * const [denseOut, activationOut] = model.predict(tf.randomNormal([6, 5]));
 * denseOut.print();
 * activationOut.print();
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function activation(args: ActivationLayerArgs): Activation_3;

/**
 * Base class for Activations.
 *
 * Special note: due to cross-language compatibility reasons, the
 * static readonly className field in this family of classes must be set to
 * the initialLowerCamelCase name of the activation.
 */
declare abstract class Activation_2 extends serialization_2.Serializable {
    abstract apply(tensor: Tensor_2, axis?: number): Tensor_2;
    getConfig(): serialization_2.ConfigDict;
}

declare class Activation_3 extends Layer {
    /** @nocollapse */
    static className: string;
    activation: Activation_2;
    constructor(args: ActivationLayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/** @docinline */
declare type ActivationIdentifier = 'elu' | 'hardSigmoid' | 'linear' | 'relu' | 'relu6' | 'selu' | 'sigmoid' | 'softmax' | 'softplus' | 'softsign' | 'tanh' | 'swish' | 'mish';

declare interface ActivationLayerArgs extends LayerArgs {
    /**
     * Name of the activation function to use.
     */
    activation: ActivationIdentifier;
}

/** @doclink Optimizer */
export declare class AdadeltaOptimizer extends Optimizer {
    protected learningRate: number;
    protected rho: number;
    protected epsilon: number;
    /** @nocollapse */
    static className: string;
    private accumulatedGrads;
    private accumulatedUpdates;
    constructor(learningRate: number, rho: number, epsilon?: number);
    applyGradients(variableGradients: NamedVariableMap | NamedTensor[]): void;
    dispose(): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type AdadeltaOptimizerConfig = {
    learning_rate: number;
    rho: number;
    epsilon: number;
};

declare type AdadeltaSerialization = BaseSerialization<'Adadelta', AdadeltaOptimizerConfig>;

/** @doclink Optimizer */
export declare class AdagradOptimizer extends Optimizer {
    protected learningRate: number;
    private initialAccumulatorValue;
    /** @nocollapse */
    static className: string;
    private accumulatedGrads;
    constructor(learningRate: number, initialAccumulatorValue?: number);
    applyGradients(variableGradients: NamedVariableMap | NamedTensor[]): void;
    dispose(): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type AdagradOptimizerConfig = {
    learning_rate: number;
    initial_accumulator_value?: number;
};

declare type AdagradSerialization = BaseSerialization<'Adagrad', AdagradOptimizerConfig>;

export declare class AdamaxOptimizer extends Optimizer {
    protected learningRate: number;
    protected beta1: number;
    protected beta2: number;
    protected epsilon: number;
    protected decay: number;
    /** @nocollapse */
    static className: string;
    private accBeta1;
    private iteration;
    private accumulatedFirstMoment;
    private accumulatedWeightedInfNorm;
    constructor(learningRate: number, beta1: number, beta2: number, epsilon?: number, decay?: number);
    applyGradients(variableGradients: NamedVariableMap | NamedTensor[]): void;
    dispose(): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type AdamaxOptimizerConfig = {
    learning_rate: number;
    beta1: number;
    beta2: number;
    epsilon?: number;
    decay?: number;
};

declare type AdamaxSerialization = BaseSerialization<'Adamax', AdamaxOptimizerConfig>;

export declare class AdamOptimizer extends Optimizer {
    protected learningRate: number;
    protected beta1: number;
    protected beta2: number;
    protected epsilon: number;
    /** @nocollapse */
    static className: string;
    private accBeta1;
    private accBeta2;
    private accumulatedFirstMoment;
    private accumulatedSecondMoment;
    constructor(learningRate: number, beta1: number, beta2: number, epsilon?: number);
    applyGradients(variableGradients: NamedVariableMap | NamedTensor[]): void;
    dispose(): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type AdamOptimizerConfig = {
    learning_rate: number;
    beta1: number;
    beta2: number;
    epsilon?: number;
};

declare type AdamSerialization = BaseSerialization<'Adam', AdamOptimizerConfig>;

export declare const Add = "Add";

export declare const add: typeof add_;

/**
 * Adds two `tf.Tensor`s element-wise, A + B. Supports broadcasting.
 *
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3, 4]);
 * const b = tf.tensor1d([10, 20, 30, 40]);
 *
 * a.add(b).print();  // or tf.add(a, b)
 * ```
 *
 * ```js
 * // Broadcast add a with b.
 * const a = tf.scalar(5);
 * const b = tf.tensor1d([10, 20, 30, 40]);
 *
 * a.add(b).print();  // or tf.add(a, b)
 * ```
 * @param a The first `tf.Tensor` to add.
 * @param b The second `tf.Tensor` to add. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function add_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare class Add_2 extends Merge {
    /** @nocollapse */
    static className: string;
    constructor(args?: LayerArgs);
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
}

/**
 * Layer that performs element-wise addition on an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape, and returns a
 * single tensor (also of the same shape). The inputs are specified as an
 * `Array` when the `apply` method of the `Add` layer instance is called. For
 * example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const addLayer = tf.layers.add();
 * const sum = addLayer.apply([input1, input2]);
 * console.log(JSON.stringify(sum.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function add_2(args?: LayerArgs): Add_2;

declare const addImpl: SimpleBinaryKernelImpl;

export declare type AddInputs = BinaryInputs;

export declare const AddN = "AddN";

export declare const addN: typeof addN_;

/**
 * Adds a list of `tf.Tensor`s element-wise, each with the same shape and dtype.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * const c = tf.tensor1d([5, 6]);
 *
 * tf.addN([a, b, c]).print();
 * ```
 * @param tensors A list of tensors with the same shape and dtype.
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function addN_<T extends Tensor>(tensors: Array<T | TensorLike>): T;

export declare type AddNInputs = TensorInfo[];

export declare const All = "All";

export declare const all: typeof all_;

/**
 * Computes the logical and of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and an
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 1, 1], 'bool');
 *
 * x.all().print();  // or tf.all(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 1, 0, 0], [2, 2], 'bool');
 *
 * const axis = 1;
 * x.all(axis).print();  // or tf.all(x, axis)
 * ```
 *
 * @param x The input tensor. Must be of dtype bool.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function all_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

export declare interface AllAttrs {
    axis: number | number[];
    keepDims: boolean;
}

export declare type AllInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Applies Alpha Dropout to the input.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * Alpha Dropout is a `Dropout` that keeps mean and variance of inputs
 * to their original values, in order to ensure the self-normalizing property
 * even after this dropout.
 * Alpha Dropout fits well to Scaled Exponential Linear Units
 * by randomly setting activations to the negative saturation value.
 *
 * Arguments:
 *   - `rate`: float, drop probability (as with `Dropout`).
 *     The multiplicative noise will have
 *     standard deviation `sqrt(rate / (1 - rate))`.
 *   - `noise_shape`: A 1-D `Tensor` of type `int32`, representing the
 *     shape for randomly generated keep/drop flags.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape`
 *   (tuple of integers, does not include the samples axis)
 *   when using this layer as the first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * References:
 *   - [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
 */
declare class AlphaDropout extends Layer {
    /** @nocollapse */
    static className: string;
    readonly rate: number;
    readonly noiseShape: Shape;
    constructor(args: AlphaDropoutArgs);
    _getNoiseShape(inputs: Tensor_2 | Tensor_2[]): number[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): {
        rate: number;
    };
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Applies Alpha Dropout to the input.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * Alpha Dropout is a `Dropout` that keeps mean and variance of inputs
 * to their original values, in order to ensure the self-normalizing property
 * even after this dropout.
 * Alpha Dropout fits well to Scaled Exponential Linear Units
 * by randomly setting activations to the negative saturation value.
 *
 * Arguments:
 *   - `rate`: float, drop probability (as with `Dropout`).
 *     The multiplicative noise will have
 *     standard deviation `sqrt(rate / (1 - rate))`.
 *   - `noise_shape`: A 1-D `Tensor` of type `int32`, representing the
 *     shape for randomly generated keep/drop flags.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape`
 *   (tuple of integers, does not include the samples axis)
 *   when using this layer as the first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * References:
 *   - [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
 *
 * @doc {heading: 'Layers', subheading: 'Noise', namespace: 'layers'}
 */
declare function alphaDropout(args: AlphaDropoutArgs): AlphaDropout;

declare interface AlphaDropoutArgs extends LayerArgs {
    /** drop probability.  */
    rate: number;
    /**
     * A 1-D `Tensor` of type `int32`, representing the
     * shape for randomly generated keep/drop flags.
     */
    noiseShape?: Shape;
}

export declare const Any = "Any";

export declare const any: typeof any_;

/**
 * Computes the logical or of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and an
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 1, 1], 'bool');
 *
 * x.any().print();  // or tf.any(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 1, 0, 0], [2, 2], 'bool');
 *
 * const axis = 1;
 * x.any(axis).print();  // or tf.any(x, axis)
 * ```
 *
 * @param x The input tensor. Must be of dtype bool.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function any_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

export declare interface AnyAttrs {
    axis: number | number[];
    keepDims: boolean;
}

export declare type AnyInputs = Pick<NamedTensorInfoMap, 'x'>;

declare function applyActivation(x: Tensor, activation: Activation, preluActivationWeights?: Tensor, leakyreluAlpha?: number): Tensor;

export declare const ArgMax = "ArgMax";

export declare const argMax: typeof argMax_;

/**
 * Returns the indices of the maximum values along an `axis`.
 *
 * The result has the same shape as `input` with the dimension along `axis`
 * removed.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.argMax().print();  // or tf.argMax(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 4, 3], [2, 2]);
 *
 * const axis = 1;
 * x.argMax(axis).print();  // or tf.argMax(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension to reduce. Defaults to 0 (outer-most dimension).
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function argMax_<T extends Tensor>(x: Tensor | TensorLike, axis?: number): T;

export declare interface ArgMaxAttrs {
    axis: number;
}

export declare type ArgMaxInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const ArgMin = "ArgMin";

export declare const argMin: typeof argMin_;

/**
 * Returns the indices of the minimum values along an `axis`.
 *
 * The result has the same shape as `input` with the dimension along `axis`
 * removed.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.argMin().print();  // or tf.argMin(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 4, 3], [2, 2]);
 *
 * const axis = 1;
 * x.argMin(axis).print();  // or tf.argMin(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension to reduce. Defaults to 0 (outer-most dimension).
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function argMin_<T extends Tensor>(x: Tensor | TensorLike, axis?: number): T;

export declare interface ArgMinAttrs {
    axis: number;
}

export declare type ArgMinInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Create a `Dataset` from an array of elements.
 *
 * Create a Dataset from an array of objects:
 * ```js
 * const a = tf.data.array([{'item': 1}, {'item': 2}, {'item': 3}]);
 * await a.forEachAsync(e => console.log(e));
 * ```
 *
 * Create a Dataset from an array of numbers:
 * ```js
 * const a = tf.data.array([4, 5, 6]);
 * await a.forEachAsync(e => console.log(e));
 * ```
 * @param items An array of elements that will be parsed as items in a dataset.
 *
 * @doc {heading: 'Data', subheading: 'Creation', namespace: 'data'}
 */
declare function array<T extends tf.TensorContainer>(items: T[]): Dataset<T>;

/** @docalias number[] */
declare interface ArrayMap {
    R0: number;
    R1: number[];
    R2: number[][];
    R3: number[][][];
    R4: number[][][][];
    R5: number[][][][][];
    R6: number[][][][][][];
}

declare function arraysEqual(n1: FlatVector, n2: FlatVector): boolean;

export declare const Asin = "Asin";

export declare const asin: typeof asin_;

/**
 * Computes asin of the input `tf.Tensor` element-wise: `asin(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.asin().print();  // or tf.asin(x)
 * ```
 * @param x The input tensor.
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function asin_<T extends Tensor>(x: T | TensorLike): T;

export declare const Asinh = "Asinh";

export declare const asinh: typeof asinh_;

/**
 * Computes inverse hyperbolic sin of the input `tf.Tensor` element-wise:
 * `asinh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.asinh().print();  // or tf.asinh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function asinh_<T extends Tensor>(x: T | TensorLike): T;

export declare type AsinhInputs = UnaryInputs;

export declare type AsinInputs = UnaryInputs;

/**
 * Asserts that the expression is true. Otherwise throws an error with the
 * provided message.
 *
 * ```js
 * const x = 2;
 * tf.util.assert(x === 2, 'x is not 2');
 * ```
 *
 * @param expr The expression to assert (as a boolean).
 * @param msg A function that returns the message to report when throwing an
 *     error. We use a function for performance reasons.
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function assert(expr: boolean, msg: () => string): void;

declare function assertAndGetBroadcastShape(shapeA: number[], shapeB: number[]): number[];

declare function assertAxesAreInnerMostDims(msg: string, axes: number[], rank: number): void;

declare function assertNonNegativeIntegerDimensions(shape: number[]): void;

declare function assertNonNull(a: TensorLike): void;

declare function assertNotComplex(tensor: TensorInfo_3 | TensorInfo_3[], opName: string): void;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare function assertParamsConsistent(shapes: number[][], axis: number): void;

declare function assertParamsValid(input: TensorInfo, begin: number[], size: number[]): void;

declare function assertShapesMatch(shapeA: number[], shapeB: number[], errorMessagePrefix?: string): void;

declare function assertTypesMatch(a: Tensor, b: Tensor): void;

/**
 * Insert a given complex value into the TypedArray.
 * @param data The array in which the complex value is inserted.
 * @param c The complex value to be inserted.
 * @param index An index of the target complex value.
 */
declare function assignToTypedArray(data: TypedArray, real: number, imag: number, index: number): void;

export declare const Atan = "Atan";

export declare const atan: typeof atan_;

export declare const Atan2 = "Atan2";

export declare const atan2: typeof atan2_;

/**
 * Computes arctangent of `tf.Tensor`s a / b element-wise: `atan2(a, b)`.
 * Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1.0, 1.0, -1.0, .7]);
 * const b = tf.tensor1d([2.0, 13.0, 3.5, .21]);
 *
 * tf.atan2(a, b).print()
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function atan2_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare type Atan2Inputs = BinaryInputs;

/**
 * Computes atan of the input `tf.Tensor` element-wise: `atan(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.atan().print();  // or tf.atan(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function atan_<T extends Tensor>(x: T | TensorLike): T;

export declare const Atanh = "Atanh";

export declare const atanh: typeof atanh_;

/**
 * Computes inverse hyperbolic tan of the input `tf.Tensor` element-wise:
 * `atanh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, .1, -.1, .7]);
 *
 * x.atanh().print();  // or tf.atanh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function atanh_<T extends Tensor>(x: T | TensorLike): T;

export declare type AtanhInputs = UnaryInputs;

export declare type AtanInputs = UnaryInputs;

/** These are extra non-tensor/primitive params passed to kernel functions. */
export declare type Attribute = AttributeValue | RecursiveArray<AttributeValue>;

declare type AttributeValue = number | number[] | boolean | boolean[] | string | string[] | NamedAttrMap;

declare class Average extends Merge {
    /** @nocollapse */
    static className: string;
    constructor(args?: LayerArgs);
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
}

/**
 * Layer that performs element-wise averaging on an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape, and returns a
 * single tensor (also of the same shape). For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const averageLayer = tf.layers.average();
 * const average = averageLayer.apply([input1, input2]);
 * console.log(JSON.stringify(average.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function average(args?: LayerArgs): Average;

declare class AveragePooling1D extends Pooling1D {
    /** @nocollapse */
    static className: string;
    constructor(args: Pooling1DLayerArgs);
    protected poolingFunction(inputs: Tensor_2, poolSize: [number, number], strides: [number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
}

/**
 * Average pooling operation for spatial data.
 *
 * Input shape: `[batchSize, inLength, channels]`
 *
 * Output shape: `[batchSize, pooledLength, channels]`
 *
 * `tf.avgPool1d` is an alias.
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function averagePooling1d(args: Pooling1DLayerArgs): AveragePooling1D;

declare class AveragePooling2D extends Pooling2D {
    /** @nocollapse */
    static className: string;
    constructor(args: Pooling2DLayerArgs);
    protected poolingFunction(inputs: Tensor_2, poolSize: [number, number], strides: [number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
}

/**
 * Average pooling operation for spatial data.
 *
 * Input shape:
 *  - If `dataFormat === CHANNEL_LAST`:
 *      4D tensor with shape:
 *      `[batchSize, rows, cols, channels]`
 *  - If `dataFormat === CHANNEL_FIRST`:
 *      4D tensor with shape:
 *      `[batchSize, channels, rows, cols]`
 *
 * Output shape
 *  - If `dataFormat === CHANNEL_LAST`:
 *      4D tensor with shape:
 *      `[batchSize, pooleRows, pooledCols, channels]`
 *  - If `dataFormat === CHANNEL_FIRST`:
 *      4D tensor with shape:
 *      `[batchSize, channels, pooleRows, pooledCols]`
 *
 * `tf.avgPool2d` is an alias.
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function averagePooling2d(args: Pooling2DLayerArgs): AveragePooling2D;

declare class AveragePooling3D extends Pooling3D {
    /** @nocollapse */
    static className: string;
    constructor(args: Pooling3DLayerArgs);
    protected poolingFunction(inputs: Tensor_2, poolSize: [number, number, number], strides: [number, number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
}

/**
 * Average pooling operation for 3D data.
 *
 * Input shape
 *   - If `dataFormat === channelsLast`:
 *       5D tensor with shape:
 *       `[batchSize, depths, rows, cols, channels]`
 *   - If `dataFormat === channelsFirst`:
 *      4D tensor with shape:
 *       `[batchSize, channels, depths, rows, cols]`
 *
 * Output shape
 *   - If `dataFormat=channelsLast`:
 *       5D tensor with shape:
 *       `[batchSize, pooledDepths, pooledRows, pooledCols, channels]`
 *   - If `dataFormat=channelsFirst`:
 *       5D tensor with shape:
 *       `[batchSize, channels, pooledDepths, pooledRows, pooledCols]`
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function averagePooling3d(args: Pooling3DLayerArgs): AveragePooling3D;

export declare const AvgPool = "AvgPool";

export declare const avgPool: typeof avgPool_;

declare function avgPool1d(args: Pooling1DLayerArgs): AveragePooling1D;

declare function avgPool2d(args: Pooling2DLayerArgs): AveragePooling2D;

export declare const AvgPool3D = "AvgPool3D";

export declare const avgPool3d: typeof avgPool3d_;

/**
 * Computes the 3D average pooling.
 *
 * ```js
 * const x = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
 * const result = tf.avgPool3d(x, 2, 1, 'valid');
 * result.print();
 * ```
 *
 * @param x The input tensor, of rank 5 or rank 4 of shape
 *     `[batch, depth, height, width, inChannels]`.
 * @param filterSize The filter size:
 *     `[filterDepth, filterHeight, filterWidth]`.
 *     If `filterSize` is a single number,
 *     then `filterDepth == filterHeight == filterWidth`.
 * @param strides The strides of the pooling:
 *     `[strideDepth, strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideDepth == strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param dataFormat An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function avgPool3d_<T extends Tensor4D | Tensor5D>(x: T | TensorLike, filterSize: [number, number, number] | number, strides: [number, number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil', dataFormat?: 'NDHWC' | 'NCDHW'): T;

declare function avgPool3d_2(args: Pooling3DLayerArgs): AveragePooling3D;

export declare interface AvgPool3DAttrs {
    filterSize: [number, number, number] | number;
    strides: [number, number, number] | number;
    pad: 'valid' | 'same' | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    dataFormat: 'NDHWC' | 'NCDHW';
}

export declare const AvgPool3DGrad = "AvgPool3DGrad";

export declare interface AvgPool3DGradAttrs {
    filterSize: [number, number, number] | number;
    strides: [number, number, number] | number;
    pad: 'valid' | 'same' | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare type AvgPool3DGradInputs = Pick<NamedTensorInfoMap, 'dy' | 'input'>;

export declare type AvgPool3DInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Computes the 2D average pooling of an image.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filterSize The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 * @param pad The type of padding algorithm:
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *         https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 */
declare function avgPool_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number | conv_util.ExplicitPadding, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;

export declare interface AvgPoolAttrs {
    filterSize: [number, number] | number;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare const AvgPoolGrad = "AvgPoolGrad";

export declare interface AvgPoolGradAttrs {
    filterSize: [number, number] | number;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
}

export declare type AvgPoolGradInputs = Pick<NamedTensorInfoMap, 'dy' | 'input'>;

declare function avgPooling1d(args: Pooling1DLayerArgs): AveragePooling1D;

declare function avgPooling2d(args: Pooling2DLayerArgs): AveragePooling2D;

declare function avgPooling3d(args: Pooling3DLayerArgs): AveragePooling3D;

export declare type AvgPoolInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns true if the axis specifies the inner most dimensions of the
 * array.
 */
declare function axesAreInnerMostDims(axes: number[], rank: number): boolean;

declare interface Backend {
}

/**
 * Gets the current backend. If no backends have been initialized, this will
 * attempt to initialize the best backend. Will throw an error if the highest
 * priority backend has async initialization, in which case, you should call
 * 'await tf.ready()' before running other code.
 *
 * @doc {heading: 'Backends'}
 */
export declare function backend(): KernelBackend;

declare namespace backend_util {
    export {
        fromUint8ToStringArray,
        fromStringArrayToUint8,
        slice_util,
        BackendValues,
        TypedArray,
        upcastType,
        PixelData,
        MemoryInfo,
        TimingInfo,
        segment_util,
        axesAreInnerMostDims,
        combineLocations,
        computeOutAndReduceShapes,
        expandShapeToKeepDim,
        assertAxesAreInnerMostDims,
        getAxesPermutation,
        getUndoAxesPermutation,
        getInnerMostAxes,
        getBroadcastDims,
        getReductionAxes,
        assertAndGetBroadcastShape,
        assertParamsConsistent,
        computeOutShape_3 as computeOutShape,
        computeDilation2DInfo,
        computePool2DInfo,
        computePool3DInfo,
        computeConv2DInfo,
        computeConv3DInfo,
        computeDefaultPad,
        tupleValuesAreOne,
        eitherStridesOrDilationsAreOne,
        convertConv2DDataFormat,
        ExplicitPadding,
        PadInfo,
        PadInfo3D,
        Conv2DInfo,
        Conv3DInfo,
        getFusedDyActivation,
        getFusedBiasGradient,
        applyActivation,
        shouldFuse,
        FusedConv2DConfig,
        FusedBatchMatMulConfig,
        Activation,
        computeOptimalWindowSize,
        PARALLELIZE_THRESHOLD,
        ReduceInfo,
        getImageCenter,
        getReshaped,
        getPermuted,
        getReshapedPermuted,
        getSliceBeginCoords,
        getSliceSize,
        prepareAndValidate,
        validateUpdateShape,
        validateInput,
        calculateShapes,
        ScatterShapeInfo,
        SELU_SCALEALPHA,
        SELU_SCALE,
        ERF_P,
        ERF_A1,
        ERF_A2,
        ERF_A3,
        ERF_A4,
        ERF_A5,
        warn,
        log_2 as log,
        mergeRealAndImagArrays,
        splitRealAndImagArrays,
        complexWithEvenIndex,
        complexWithOddIndex,
        getComplexWithIndex,
        assignToTypedArray,
        exponents,
        exponent,
        decodeEinsumEquation,
        getEinsumPermutation,
        checkEinsumDimSizes,
        getEinsumComputePath,
        isIdentityPermutation,
        prepareSplitSize
    }
}
export { backend_util }

declare interface BackendTimer {
    timerAvailable(): boolean;
    time(f: () => void): Promise<BackendTimingInfo>;
}

export declare interface BackendTimingInfo {
    kernelMs: number | {
        error: string;
    };
    getExtraProfileInfo?(): string;
}

/** The underlying tensor data that gets stored in a backend. */
export declare type BackendValues = Float32Array | Int32Array | Uint8Array | Uint8Array[];

/**
 * Abstract base class used to build new callbacks.
 *
 * The `logs` dictionary that callback methods take as argument will contain
 * keys for quantities relevant to the current batch or epoch.
 *
 * Currently, the `.fit()` method of the `Sequential` model class
 * will include the following quantities in the `logs` that
 * it passes to its callbacks:
 *
 * onEpochEnd: Logs include `acc` and `loss`, and optionally include `valLoss`
 *   (if validation is enabled in `fit`), and `valAcc` (if validation and
 *   accuracy monitoring are enabled).
 * onBatchBegin: Logs include `size`, the number of samples in the current
 *   batch.
 * onBatchEnd: Logs include `loss`, and optionally `acc` (if accuracy monitoring
 *   is enabled).
 */
declare abstract class BaseCallback {
    validationData: Tensor_2 | Tensor_2[];
    /**
     * Training parameters (eg. verbosity, batch size, number of epochs...).
     */
    params: Params;
    setParams(params: Params): void;
    onEpochBegin(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    onEpochEnd(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    onBatchBegin(batch: number, logs?: UnresolvedLogs): Promise<void>;
    onBatchEnd(batch: number, logs?: UnresolvedLogs): Promise<void>;
    onTrainBegin(logs?: UnresolvedLogs): Promise<void>;
    onTrainEnd(logs?: UnresolvedLogs): Promise<void>;
    setModel(model: Container_2): void;
}

declare type BaseCallbackConstructor = {
    new (): BaseCallback;
};

/**
 * Abstract convolution layer.
 */
declare abstract class BaseConv extends Layer {
    protected readonly rank: number;
    protected readonly kernelSize: number[];
    protected readonly strides: number[];
    protected readonly padding: PaddingMode;
    protected readonly dataFormat: DataFormat;
    protected readonly activation: Activation_2;
    protected readonly useBias: boolean;
    protected readonly dilationRate: number[];
    protected readonly biasInitializer?: Initializer;
    protected readonly biasConstraint?: Constraint;
    protected readonly biasRegularizer?: Regularizer;
    protected bias: LayerVariable;
    readonly DEFAULT_KERNEL_INITIALIZER: InitializerIdentifier;
    readonly DEFAULT_BIAS_INITIALIZER: InitializerIdentifier;
    constructor(rank: number, args: BaseConvLayerArgs);
    protected static verifyArgs(args: BaseConvLayerArgs): void;
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Base LayerConfig for depthwise and non-depthwise convolutional layers.
 */
declare interface BaseConvLayerArgs extends LayerArgs {
    /**
     * The dimensions of the convolution window. If kernelSize is a number, the
     * convolutional window will be square.
     */
    kernelSize: number | number[];
    /**
     * The strides of the convolution in each dimension. If strides is a number,
     * strides in both dimensions are equal.
     *
     * Specifying any stride value != 1 is incompatible with specifying any
     * `dilationRate` value != 1.
     */
    strides?: number | number[];
    /**
     * Padding mode.
     */
    padding?: PaddingMode;
    /**
     * Format of the data, which determines the ordering of the dimensions in
     * the inputs.
     *
     * `channels_last` corresponds to inputs with shape
     *   `(batch, ..., channels)`
     *
     *  `channels_first` corresponds to inputs with shape `(batch, channels,
     * ...)`.
     *
     * Defaults to `channels_last`.
     */
    dataFormat?: DataFormat;
    /**
     * The dilation rate to use for the dilated convolution in each dimension.
     * Should be an integer or array of two or three integers.
     *
     * Currently, specifying any `dilationRate` value != 1 is incompatible with
     * specifying any `strides` value != 1.
     */
    dilationRate?: number | [number] | [number, number] | [number, number, number];
    /**
     * Activation function of the layer.
     *
     * If you don't specify the activation, none is applied.
     */
    activation?: ActivationIdentifier;
    /**
     * Whether the layer uses a bias vector. Defaults to `true`.
     */
    useBias?: boolean;
    /**
     * Initializer for the convolutional kernel weights matrix.
     */
    kernelInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the bias vector.
     */
    biasInitializer?: InitializerIdentifier | Initializer;
    /**
     * Constraint for the convolutional kernel weights.
     */
    kernelConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint for the bias vector.
     */
    biasConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Regularizer function applied to the kernel weights matrix.
     */
    kernelRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the bias vector.
     */
    biasRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the activation.
     */
    activityRegularizer?: RegularizerIdentifier | Regularizer;
}

declare interface BaseRNNLayerArgs extends LayerArgs {
    /**
     * A RNN cell instance. A RNN cell is a class that has:
     *   - a `call()` method, which takes `[Tensor, Tensor]` as the
     *     first input argument. The first item is the input at time t, and
     *     second item is the cell state at time t.
     *     The `call()` method returns `[outputAtT, statesAtTPlus1]`.
     *     The `call()` method of the cell can also take the argument `constants`,
     *     see section "Note on passing external constants" below.
     *     Porting Node: PyKeras overrides the `call()` signature of RNN cells,
     *       which are Layer subtypes, to accept two arguments. tfjs-layers does
     *       not do such overriding. Instead we preseve the `call()` signature,
     *       which due to its `Tensor|Tensor[]` argument and return value, is
     *       flexible enough to handle the inputs and states.
     *   - a `stateSize` attribute. This can be a single integer (single state)
     *     in which case it is the size of the recurrent state (which should be
     *     the same as the size of the cell output). This can also be an Array of
     *     integers (one size per state). In this case, the first entry
     *     (`stateSize[0]`) should be the same as the size of the cell output.
     * It is also possible for `cell` to be a list of RNN cell instances, in which
     * case the cells get stacked on after the other in the RNN, implementing an
     * efficient stacked RNN.
     */
    cell?: RNNCell | RNNCell[];
    /**
     * Whether to return the last output in the output sequence, or the full
     * sequence.
     */
    returnSequences?: boolean;
    /**
     * Whether to return the last state in addition to the output.
     */
    returnState?: boolean;
    /**
     * If `true`, process the input sequence backwards and return the reversed
     * sequence (default: `false`).
     */
    goBackwards?: boolean;
    /**
     * If `true`, the last state for each sample at index i in a batch will be
     * used as initial state of the sample of index i in the following batch
     * (default: `false`).
     *
     * You can set RNN layers to be "stateful", which means that the states
     * computed for the samples in one batch will be reused as initial states
     * for the samples in the next batch. This assumes a one-to-one mapping
     * between samples in different successive batches.
     *
     * To enable "statefulness":
     *   - specify `stateful: true` in the layer constructor.
     *   - specify a fixed batch size for your model, by passing
     *     - if sequential model:
     *       `batchInputShape: [...]` to the first layer in your model.
     *     - else for functional model with 1 or more Input layers:
     *       `batchShape: [...]` to all the first layers in your model.
     *     This is the expected shape of your inputs
     *     *including the batch size*.
     *     It should be a tuple of integers, e.g., `[32, 10, 100]`.
     *   - specify `shuffle: false` when calling `LayersModel.fit()`.
     *
     * To reset the state of your model, call `resetStates()` on either the
     * specific layer or on the entire model.
     */
    stateful?: boolean;
    /**
     * If `true`, the network will be unrolled, else a symbolic loop will be
     * used. Unrolling can speed-up a RNN, although it tends to be more memory-
     * intensive. Unrolling is only suitable for short sequences (default:
     * `false`).
     * Porting Note: tfjs-layers has an imperative backend. RNNs are executed with
     *   normal TypeScript control flow. Hence this property is inapplicable and
     *   ignored in tfjs-layers.
     */
    unroll?: boolean;
    /**
     * Dimensionality of the input (integer).
     *   This option (or alternatively, the option `inputShape`) is required when
     *   this layer is used as the first layer in a model.
     */
    inputDim?: number;
    /**
     * Length of the input sequences, to be specified when it is constant.
     * This argument is required if you are going to connect `Flatten` then
     * `Dense` layers upstream (without it, the shape of the dense outputs cannot
     * be computed). Note that if the recurrent layer is not the first layer in
     * your model, you would need to specify the input length at the level of the
     * first layer (e.g., via the `inputShape` option).
     */
    inputLength?: number;
}

/**
 * A Keras JSON entry representing a Keras object such as a Layer.
 *
 * The Keras JSON convention is to provide the `class_name` (e.g., the layer
 * type) at the top level, and then to place the class-specific configuration in
 * a `config` subtree.  These class-specific configurations are provided by
 * subtypes of `PyJsonDict`.  Thus, this `*Serialization` has a type parameter
 * giving the specific type of the wrapped `PyJsonDict`.
 */
declare interface BaseSerialization<N extends string, T extends PyJson<Extract<keyof T, string>>> extends PyJsonDict {
    class_name: N;
    config: T;
}

export declare const basicLSTMCell: typeof basicLSTMCell_;

/**
 * Computes the next state and output of a BasicLSTMCell.
 *
 * Returns `[newC, newH]`.
 *
 * Derived from tf.contrib.rnn.BasicLSTMCell.
 *
 * @param forgetBias Forget bias for the cell.
 * @param lstmKernel The weights for the cell.
 * @param lstmBias The bias for the cell.
 * @param data The input to the cell.
 * @param c Previous cell state.
 * @param h Previous cell output.
 *
 * @doc {heading: 'Operations', subheading: 'RNN'}
 */
declare function basicLSTMCell_(forgetBias: Scalar | TensorLike, lstmKernel: Tensor2D | TensorLike, lstmBias: Tensor1D | TensorLike, data: Tensor2D | TensorLike, c: Tensor2D | TensorLike, h: Tensor2D | TensorLike): [Tensor2D, Tensor2D];

export declare const BatchMatMul = "BatchMatMul";

export declare interface BatchMatMulAttrs {
    transposeA: boolean;
    transposeB: boolean;
}

export declare type BatchMatMulInputs = Pick<NamedTensorInfoMap, 'a' | 'b'>;

export declare const batchNorm: typeof batchNorm_;

export declare const batchNorm2d: typeof batchNorm2d_;

/**
 * Batch normalization, strictly for 2D. For the more relaxed version, see
 * `tf.batchNorm`.
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 */
declare function batchNorm2d_(x: Tensor2D | TensorLike, mean: Tensor2D | Tensor1D | TensorLike, variance: Tensor2D | Tensor1D | TensorLike, offset?: Tensor2D | Tensor1D | TensorLike, scale?: Tensor2D | Tensor1D | TensorLike, varianceEpsilon?: number): Tensor2D;

export declare const batchNorm3d: typeof batchNorm3d_;

/**
 * Batch normalization, strictly for 3D. For the more relaxed version, see
 * `tf.batchNorm`.
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 */
declare function batchNorm3d_(x: Tensor3D | TensorLike, mean: Tensor3D | Tensor1D | TensorLike, variance: Tensor3D | Tensor1D | TensorLike, offset?: Tensor3D | Tensor1D | TensorLike, scale?: Tensor3D | Tensor1D | TensorLike, varianceEpsilon?: number): Tensor3D;

export declare const batchNorm4d: typeof batchNorm4d_;

/**
 * Batch normalization, strictly for 4D. For the more relaxed version, see
 * `tf.batchNorm`.
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 */
declare function batchNorm4d_(x: Tensor4D | TensorLike, mean: Tensor4D | Tensor1D | TensorLike, variance: Tensor4D | Tensor1D | TensorLike, offset?: Tensor4D | Tensor1D | TensorLike, scale?: Tensor4D | Tensor1D | TensorLike, varianceEpsilon?: number): Tensor4D;

/**
 * Batch normalization.
 *
 * As described in
 * [http://arxiv.org/abs/1502.03167](http://arxiv.org/abs/1502.03167).
 *
 * Mean, variance, scale, and offset can be of two shapes:
 *   - The same shape as the input.
 *   - In the common case, the depth dimension is the last dimension of x, so
 *     the values would be an `tf.Tensor1D` of shape [depth].
 *
 * Also available are stricter rank-specific methods with the same signature
 * as this method that assert that parameters passed are of given rank
 *   - `tf.batchNorm2d`
 *   - `tf.batchNorm3d`
 *   - `tf.batchNorm4d`
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
declare function batchNorm_<R extends Rank>(x: Tensor<R> | TensorLike, mean: Tensor<R> | Tensor1D | TensorLike, variance: Tensor<R> | Tensor1D | TensorLike, offset?: Tensor<R> | Tensor1D | TensorLike, scale?: Tensor<R> | Tensor1D | TensorLike, varianceEpsilon?: number): Tensor<R>;

declare class BatchNormalization extends Layer {
    /** @nocollapse */
    static className: string;
    private readonly axis;
    private readonly momentum;
    private readonly epsilon;
    private readonly center;
    private readonly scale;
    private readonly betaInitializer;
    private readonly gammaInitializer;
    private readonly movingMeanInitializer;
    private readonly movingVarianceInitializer;
    private readonly betaConstraint;
    private readonly gammaConstraint;
    private readonly betaRegularizer;
    private readonly gammaRegularizer;
    private gamma;
    private beta;
    private movingMean;
    private movingVariance;
    constructor(args?: BatchNormalizationLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Batch normalization layer (Ioffe and Szegedy, 2014).
 *
 * Normalize the activations of the previous layer at each batch,
 * i.e. applies a transformation that maintains the mean activation
 * close to 0 and the activation standard deviation close to 1.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape` (Array of integers, does
 *   not include the sample axis) when calling the constructor of this class,
 *   if this layer is used as a first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * References:
 *   - [Batch Normalization: Accelerating Deep Network Training by Reducing
 * Internal Covariate Shift](https://arxiv.org/abs/1502.03167)
 *
 * @doc {heading: 'Layers', subheading: 'Normalization', namespace: 'layers'}
 */
declare function batchNormalization(args?: BatchNormalizationLayerArgs): BatchNormalization;

declare interface BatchNormalizationLayerArgs extends LayerArgs {
    /**
     * The integer axis that should be normalized (typically the features axis).
     * Defaults to -1.
     *
     * For instance, after a `Conv2D` layer with `data_format="channels_first"`,
     * set `axis=1` in `batchNormalization`.
     */
    axis?: number;
    /**
     * Momentum of the moving average. Defaults to 0.99.
     */
    momentum?: number;
    /**
     * Small float added to the variance to avoid dividing by zero. Defaults to
     * 1e-3.
     */
    epsilon?: number;
    /**
     * If `true`, add offset of `beta` to normalized tensor.
     * If `false`, `beta` is ignored.
     * Defaults to `true`.
     */
    center?: boolean;
    /**
     * If `true`, multiply by `gamma`.
     * If `false`, `gamma` is not used.
     * When the next layer is linear (also e.g. `nn.relu`),
     * this can be disabled since the scaling will be done by the next layer.
     * Defaults to `true`.
     */
    scale?: boolean;
    /**
     * Initializer for the beta weight.
     *  Defaults to 'zeros'.
     */
    betaInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the gamma weight.
     *  Defaults to `ones`.
     */
    gammaInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the moving mean.
     * Defaults to `zeros`
     */
    movingMeanInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the moving variance.
     *  Defaults to 'Ones'.
     */
    movingVarianceInitializer?: InitializerIdentifier | Initializer;
    /**
     * Constraint for the beta weight.
     */
    betaConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint for gamma weight.
     */
    gammaConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Regularizer for the beta weight.
     */
    betaRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer for the gamma weight.
     */
    gammaRegularizer?: RegularizerIdentifier | Regularizer;
}

export declare const BatchToSpaceND = "BatchToSpaceND";

export declare const batchToSpaceND: typeof batchToSpaceND_;

/**
 * This operation reshapes the "batch" dimension 0 into `M + 1` dimensions of
 * shape `blockShape + [batch]`, interleaves these blocks back into the grid
 * defined by the spatial dimensions `[1, ..., M]`, to obtain a result with
 * the same rank as the input. The spatial dimensions of this intermediate
 * result are then optionally cropped according to `crops` to produce the
 * output. This is the reverse of `tf.spaceToBatchND`. See below for a precise
 * description.
 *
 * ```js
 * const x = tf.tensor4d([1, 2, 3, 4], [4, 1, 1, 1]);
 * const blockShape = [2, 2];
 * const crops = [[0, 0], [0, 0]];
 *
 * x.batchToSpaceND(blockShape, crops).print();
 * ```
 *
 * @param x A `tf.Tensor`. N-D with `x.shape` = `[batch] + spatialShape +
 * remainingShape`, where spatialShape has `M` dimensions.
 * @param blockShape A 1-D array. Must have shape `[M]`, all values must
 * be >= 1.
 * @param crops A 2-D array.  Must have shape `[M, 2]`, all values must be >= 0.
 * `crops[i] = [cropStart, cropEnd]` specifies the amount to crop from input
 * dimension `i + 1`, which corresponds to spatial dimension `i`. It is required
 * that `cropStart[i] + cropEnd[i] <= blockShape[i] * inputShape[i + 1]`
 *
 * This operation is equivalent to the following steps:
 *
 * 1. Reshape `x` to `reshaped` of shape: `[blockShape[0], ...,
 * blockShape[M-1], batch / prod(blockShape), x.shape[1], ...,
 * x.shape[N-1]]`
 *
 * 2. Permute dimensions of `reshaped`to produce `permuted` of shape `[batch /
 * prod(blockShape),x.shape[1], blockShape[0], ..., x.shape[M],
 * blockShape[M-1],x.shape[M+1], ..., x.shape[N-1]]`
 *
 * 3. Reshape `permuted` to produce `reshapedPermuted` of shape `[batch /
 * prod(blockShape),x.shape[1] * blockShape[0], ..., x.shape[M] *
 * blockShape[M-1],x.shape[M+1], ..., x.shape[N-1]]`
 *
 * 4. Crop the start and end of dimensions `[1, ..., M]` of `reshapedPermuted`
 * according to `crops` to produce the output of shape: `[batch /
 * prod(blockShape),x.shape[1] * blockShape[0] - crops[0,0] - crops[0,1],
 * ..., x.shape[M] * blockShape[M-1] - crops[M-1,0] -
 * crops[M-1,1],x.shape[M+1], ..., x.shape[N-1]]`
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function batchToSpaceND_<T extends Tensor>(x: T | TensorLike, blockShape: number[], crops: number[][]): T;

export declare interface BatchToSpaceNDAttrs {
    blockShape: number[];
    crops: number[][];
}

export declare type BatchToSpaceNDInputs = Pick<NamedTensorInfoMap, 'x'>;

declare class Bidirectional extends Wrapper {
    /** @nocollapse */
    static className: string;
    mergeMode: BidirectionalMergeMode;
    private forwardLayer;
    private backwardLayer;
    private returnSequences;
    private returnState;
    private numConstants?;
    private _trainable;
    constructor(args: BidirectionalLayerArgs);
    get trainable(): boolean;
    set trainable(value: boolean);
    getWeights(): Tensor_2[];
    setWeights(weights: Tensor_2[]): void;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    apply(inputs: Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[], kwargs?: Kwargs): Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    resetStates(states?: Tensor_2 | Tensor_2[]): void;
    build(inputShape: Shape | Shape[]): void;
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2 | Tensor_2[];
    get trainableWeights(): LayerVariable[];
    get nonTrainableWeights(): LayerVariable[];
    setFastWeightInitDuringBuild(value: boolean): void;
    getConfig(): serialization_2.ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict): T;
}

/** @doc {heading: 'Layers', subheading: 'Wrapper', namespace: 'layers'} */
declare function bidirectional(args: BidirectionalLayerArgs): Bidirectional;

declare interface BidirectionalLayerArgs extends WrapperLayerArgs {
    /**
     * The instance of an `RNN` layer to be wrapped.
     */
    layer: RNN;
    /**
     * Mode by which outputs of the forward and backward RNNs are
     * combined. If `null` or `undefined`, the output will not be
     * combined, they will be returned as an `Array`.
     *
     * If `undefined` (i.e., not provided), defaults to `'concat'`.
     */
    mergeMode?: BidirectionalMergeMode;
}

/** @docinline */
declare type BidirectionalMergeMode = 'sum' | 'mul' | 'concat' | 'ave';

/**
 * Binary accuracy metric function.
 *
 * `yTrue` and `yPred` can have 0-1 values. Example:
 * ```js
 * const x = tf.tensor2d([[1, 1, 1, 1], [0, 0, 0, 0]], [2, 4]);
 * const y = tf.tensor2d([[1, 0, 1, 0], [0, 0, 0, 1]], [2, 4]);
 * const accuracy = tf.metrics.binaryAccuracy(x, y);
 * accuracy.print();
 * ```
 *
 * `yTrue` and `yPred` can also have floating-number values between 0 and 1, in
 * which case the values will be thresholded at 0.5 to yield 0-1 values (i.e.,
 * a value >= 0.5 and <= 1.0 is interpreted as 1.
 * )
 * Example:
 * ```js
 * const x = tf.tensor1d([1, 1, 1, 1, 0, 0, 0, 0]);
 * const y = tf.tensor1d([0.2, 0.4, 0.6, 0.8, 0.2, 0.3, 0.4, 0.7]);
 * const accuracy = tf.metrics.binaryAccuracy(x, y);
 * accuracy.print();
 * ```
 *
 * @param yTrue Binary Tensor of truth.
 * @param yPred Binary Tensor of prediction.
 * @return Accuracy Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function binaryAccuracy(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

/**
 * Binary crossentropy metric function.
 *
 * Example:
 * ```js
 * const x = tf.tensor2d([[0], [1], [1], [1]]);
 * const y = tf.tensor2d([[0], [0], [0.5], [1]]);
 * const crossentropy = tf.metrics.binaryCrossentropy(x, y);
 * crossentropy.print();
 * ```
 *
 * @param yTrue Binary Tensor of truth.
 * @param yPred Binary Tensor of prediction, probabilities for the `1` case.
 * @return Accuracy Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function binaryCrossentropy(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare type BinaryInputs = Pick<NamedTensorInfoMap, 'a' | 'b'>;

export declare const Bincount = "Bincount";

export declare const bincount: typeof bincount_;

/**
 * Outputs a vector with length `size` and the same dtype as `weights`.
 *
 * If `weights` are empty, then index `i` stores the number of times the value
 * `i` is counted in `x`. If `weights` are non-empty, then index `i` stores the
 * sum of the value in `weights` at each index where the corresponding value in
 * `x` is `i`.
 *
 * Values in `x` outside of the range [0, size) are ignored.
 *
 * @param x The input int tensor, rank 1.
 * @param weights The weights tensor, must have the same shape as x, or a
 *     length-0 Tensor, in which case it acts as all weights equal to 1.
 * @param size Non-negative integer.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function bincount_<T extends Tensor1D>(x: T | TensorLike, weights: T | TensorLike, size: number): T;

export declare interface BincountAttrs {
    size: number;
}

declare function bincountImpl(xVals: TypedArray_2, weightsVals: TypedArray_2, weightsDtype: DataType_2, weightsShape: number[], size: number): TypedArray_2;

export declare type BincountInputs = Pick<NamedTensorInfoMap, 'x' | 'weights'>;

declare function bincountReduceImpl<R extends Rank_2>(xBuf: TensorBuffer_2<R>, weightsBuf: TensorBuffer_2<R>, size: number, binaryOutput?: boolean): TensorBuffer_2<R>;

declare function bindCanvasToFramebuffer(gl: WebGLRenderingContext): void;

declare function bindColorTextureToFramebuffer(gl: WebGLRenderingContext, texture: WebGLTexture, framebuffer: WebGLFramebuffer): void;

declare function bindTextureToProgramUniformSampler(gl: WebGLRenderingContext, texture: WebGLTexture, uniformSamplerLocation: WebGLUniformLocation, textureUnit: number): void;

declare function bindTextureUnit(gl: WebGLRenderingContext, texture: WebGLTexture, textureUnit: number): void;

declare function bindVertexBufferToProgramAttribute(gl: WebGLRenderingContext, program: WebGLProgram, attribute: string, buffer: WebGLBuffer, arrayEntriesPerItem: number, itemStrideInBytes: number, itemOffsetInBytes: number): boolean;

declare function bindVertexProgramAttributeStreams(gl: WebGLRenderingContext, program: WebGLProgram, vertexBuffer: WebGLBuffer): boolean;

export declare const booleanMaskAsync: typeof booleanMaskAsync_;

/**
 * Apply boolean mask to tensor.
 *
 * ```js
 * const tensor = tf.tensor2d([1, 2, 3, 4, 5, 6], [3, 2]);
 * const mask = tf.tensor1d([1, 0, 1], 'bool');
 * const result = await tf.booleanMaskAsync(tensor, mask);
 * result.print();
 * ```
 *
 * @param tensor N-D tensor.
 * @param mask K-D boolean tensor, K <= N and K must be known statically.
 * @param axis A 0-D int Tensor representing the axis in tensor to mask from.
 *     By default, axis is 0 which will mask from the first dimension.
 *     Otherwise K + axis <= N.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function booleanMaskAsync_(tensor: Tensor | TensorLike, mask: Tensor | TensorLike, axis?: number): Promise<Tensor>;

declare namespace broadcast_util {
    export {
        getBroadcastDims,
        getReductionAxes,
        assertAndGetBroadcastShape
    }
}
export { broadcast_util }

export declare const BroadcastArgs = "BroadcastArgs";

export declare const broadcastArgs: typeof broadcastArgs_;

/**
 * Return the shape of s0 op s1 with broadcast.
 *
 * compute r0, the broadcasted shape as a tensor.
 * s0, s1 and r0 are all integer vectors.
 *
 * This function returns the shape of the result of an operation between
 * two tensors of size s0 and s1 performed with broadcast.
 *
 * @param s0 A tensor representing a shape
 * @param s1 A tensor representing a shape
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function broadcastArgs_<R extends Rank>(s0: Tensor | TensorLike, s1: Tensor | TensorLike): Tensor<R>;

export declare type BroadcastArgsInputs = Pick<NamedTensorInfoMap, 's0' | 's1'>;

export declare const BroadcastTo = "BroadcastTo";

export declare const broadcastTo: typeof broadcastTo_;

/**
 * Broadcast an array to a compatible shape NumPy-style.
 *
 * The tensor's shape is compared to the broadcast shape from end to beginning.
 * Ones are prepended to the tensor's shape until is has the same length as
 * the broadcast shape. If input.shape[i]==shape[i], the (i+1)-th axis is
 * already broadcast-compatible. If input.shape[i]==1 and shape[i]==N, then
 * the input tensor is tiled N times along that axis (using tf.tile).
 *
 * @param input The tensor that is to be broadcasted.
 * @param shape The input is to be broadcast to this shape.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function broadcastTo_<R extends Rank>(x: Tensor | TensorLike, shape: ShapeMap[R]): Tensor<R>;

export declare interface BroadCastToAttrs {
    shape: number[];
    inputShape: number[];
}

export declare type BroadcastToInputs = Pick<NamedTensorInfoMap, 'x'>;

declare namespace browser {
    export {
        fromPixelsAsync,
        toPixels,
        fromPixels
    }
}
export { browser }

/**
 * Creates an IOHandler that loads model artifacts from user-selected files.
 *
 * This method can be used for loading from files such as user-selected files
 * in the browser.
 * When used in conjunction with `tf.loadLayersModel`, an instance of
 * `tf.LayersModel` (Keras-style) can be constructed from the loaded artifacts.
 *
 * ```js
 * // Note: This code snippet won't run properly without the actual file input
 * //   elements in the HTML DOM.
 *
 * // Suppose there are two HTML file input (`<input type="file" ...>`)
 * // elements.
 * const uploadJSONInput = document.getElementById('upload-json');
 * const uploadWeightsInput = document.getElementById('upload-weights');
 * const model = await tf.loadLayersModel(tf.io.browserFiles(
 *     [uploadJSONInput.files[0], uploadWeightsInput.files[0]]));
 * ```
 *
 * @param files `File`s to load from. Currently, this function supports only
 *   loading from files that contain Keras-style models (i.e., `tf.Model`s), for
 *   which an `Array` of `File`s is expected (in that order):
 *   - A JSON file containing the model topology and weight manifest.
 *   - Optionally, One or more binary files containing the binary weights.
 *     These files must have names that match the paths in the `weightsManifest`
 *     contained by the aforementioned JSON file, or errors will be thrown
 *     during loading. These weights files have the same format as the ones
 *     generated by `tensorflowjs_converter` that comes with the `tensorflowjs`
 *     Python PIP package. If no weights files are provided, only the model
 *     topology will be loaded from the JSON file above.
 * @returns An instance of `Files` `IOHandler`.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Loading',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
declare function browserFiles(files: File[]): IOHandler;

/**
 * Deprecated. Use `tf.io.http`.
 * @param path
 * @param loadOptions
 */
declare function browserHTTPRequest(path: string, loadOptions?: LoadOptions): IOHandler;

/**
 * Creates an empty `tf.TensorBuffer` with the specified `shape` and `dtype`.
 *
 * The values are stored in CPU as `TypedArray`. Fill the buffer using
 * `buffer.set()`, or by modifying directly `buffer.values`.
 *
 * When done, call `buffer.toTensor()` to get an immutable `tf.Tensor` with
 * those values.
 *
 * ```js
 * // Create a buffer and set values at particular indices.
 * const buffer = tf.buffer([2, 2]);
 * buffer.set(3, 0, 0);
 * buffer.set(5, 1, 0);
 *
 * // Convert the buffer back to a tensor.
 * buffer.toTensor().print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param dtype The dtype of the buffer. Defaults to 'float32'.
 * @param values The values of the buffer as `TypedArray`. Defaults to
 * zeros.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function buffer<R extends Rank, D extends DataType = 'float32'>(shape: ShapeMap[R], dtype?: D, values?: DataTypeMap[D]): TensorBuffer<R, D>;

declare abstract class ByteChunkIterator extends LazyIterator<Uint8Array> {
    /**
     * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
     *
     * The byte arrays producetd from the ByteChunkIterator on which this is
     * called will be interpreted as concatenated.  No assumptions are made about
     * the boundaries of the incoming chunks, so a multi-byte UTF8 encoding of a
     * character may span the boundary between chunks.  This naturally happens,
     * for instance, when reading fixed-size byte arrays from a file.
     */
    decodeUTF8(): StringIterator;
}

/**
 * Returns the approximate number of bytes allocated in the string array - 2
 * bytes per character. Computing the exact bytes for a native string in JS is
 * not possible since it depends on the encoding of the html page that serves
 * the website.
 */
declare function bytesFromStringArray(arr: Uint8Array[]): number;

declare function bytesPerElement(dtype: DataType): number;

/**
 * Calculate the shape information for the output.
 *
 * @param update The tensor contains the update values.
 * @param indices The tensor contains the indices for the update values.
 * @param shape The shape of the output tensor.
 *
 * @returns ScatterShapeInfo
 */
declare function calculateShapes(updates: TensorInfo, indices: TensorInfo, shape: number[]): ScatterShapeInfo;

declare function callAndCheck<T>(gl: WebGLRenderingContext, func: () => T): T;

export declare abstract class Callback extends BaseCallback {
    /** Instance of `keras.models.Model`. Reference of the model being trained. */
    model: LayersModel;
    setModel(model: Container_2): void;
}

/**
 * Container abstracting a list of callbacks.
 */
export declare class CallbackList {
    callbacks: BaseCallback[];
    queueLength: number;
    /**
     * Constructor of CallbackList.
     * @param callbacks Array of `Callback` instances.
     * @param queueLength Queue length for keeping running statistics over
     *   callback execution time.
     */
    constructor(callbacks?: BaseCallback[], queueLength?: number);
    append(callback: BaseCallback): void;
    setParams(params: Params): void;
    setModel(model: Container_2): void;
    /**
     * Called at the start of an epoch.
     * @param epoch Index of epoch.
     * @param logs Dictionary of logs.
     */
    onEpochBegin(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    /**
     * Called at the end of an epoch.
     * @param epoch Index of epoch.
     * @param logs Dictionary of logs.
     */
    onEpochEnd(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    /**
     * Called  right before processing a batch.
     * @param batch Index of batch within the current epoch.
     * @param logs Dictionary of logs.
     */
    onBatchBegin(batch: number, logs?: UnresolvedLogs): Promise<void>;
    /**
     * Called at the end of a batch.
     * @param batch Index of batch within the current epoch.
     * @param logs Dictionary of logs.
     */
    onBatchEnd(batch: number, logs?: UnresolvedLogs): Promise<void>;
    /**
     * Called at the beginning of training.
     * @param logs Dictionary of logs.
     */
    onTrainBegin(logs?: UnresolvedLogs): Promise<void>;
    /**
     * Called at the end of training.
     * @param logs Dictionary of logs.
     */
    onTrainEnd(logs?: UnresolvedLogs): Promise<void>;
}

export declare const callbacks: {
    earlyStopping: typeof earlyStopping;
};

declare type CallHook = (inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs) => void;

declare function canBeRepresented(num: number): boolean;

export declare const Cast = "Cast";

export declare const cast: typeof cast_;

/**
 * Casts a `tf.Tensor` to a new dtype.
 *
 * ```js
 * const x = tf.tensor1d([1.5, 2.5, 3]);
 * tf.cast(x, 'int32').print();
 * ```
 * @param x The input tensor to be casted.
 * @param dtype The dtype to cast the input tensor to.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function cast_<T extends Tensor>(x: T | TensorLike, dtype: DataType): T;

export declare interface CastAttrs {
    dtype: DataType;
}

export declare type CastInputs = UnaryInputs;

/**
 * Categorical accuracy metric function.
 *
 * Example:
 * ```js
 * const x = tf.tensor2d([[0, 0, 0, 1], [0, 0, 0, 1]]);
 * const y = tf.tensor2d([[0.1, 0.8, 0.05, 0.05], [0.1, 0.05, 0.05, 0.8]]);
 * const accuracy = tf.metrics.categoricalAccuracy(x, y);
 * accuracy.print();
 * ```
 *
 * @param yTrue Binary Tensor of truth: one-hot encoding of categories.
 * @param yPred Binary Tensor of prediction: probabilities or logits for the
 *   same categories as in `yTrue`.
 * @return Accuracy Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function categoricalAccuracy(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

/**
 * Categorical crossentropy between an output tensor and a target tensor.
 *
 * @param target A tensor of the same shape as `output`.
 * @param output A tensor resulting from a softmax (unless `fromLogits` is
 *  `true`, in which case `output` is expected to be the logits).
 * @param fromLogits Boolean, whether `output` is the result of a softmax, or is
 *   a tensor of logits.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function categoricalCrossentropy(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare const Ceil = "Ceil";

export declare const ceil: typeof ceil_;

/**
 * Computes ceiling of input `tf.Tensor` element-wise: `ceil(x)`
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3]);
 *
 * x.ceil().print();  // or tf.ceil(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function ceil_<T extends Tensor>(x: T | TensorLike): T;

declare const ceilImpl: SimpleUnaryImpl;

export declare type CeilInputs = UnaryInputs;

declare function checkConversionForErrors<D extends DataType>(vals: DataTypeMap[D] | number[], dtype: D): void;

/**
 * Checks that the dimension sizes from different input tensors match the
 * equation.
 */
declare function checkEinsumDimSizes(nDims: number, idDims: number[][], tensors: Tensor[]): void;

/** Clamps a value to a specified range. */
declare function clamp(min: number, x: number, max: number): number;

/**
 * For multi-class classification problems, this object is designed to store a
 * mapping from class index to the "weight" of the class, where higher weighted
 * classes have larger impact on loss, accuracy, and other metrics.
 *
 * This is useful for cases in which you want the model to "pay more attention"
 * to examples from an under-represented class, e.g., in unbalanced datasets.
 */
export declare type ClassWeight = {
    [classIndex: number]: number;
};

/**
 * Class weighting for a model with multiple outputs.
 *
 * This object maps each output name to a class-weighting object.
 */
export declare type ClassWeightMap = {
    [outputName: string]: ClassWeight;
};

export declare const ClipByValue = "ClipByValue";

export declare const clipByValue: typeof clipByValue_;

/**
 * Clips values element-wise. `max(min(x, clipValueMax), clipValueMin)`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.clipByValue(-2, 3).print();  // or tf.clipByValue(x, -2, 3)
 * ```
 * @param x The input tensor.
 * @param clipValueMin Lower-bound of range to be clipped to.
 * @param clipValueMax Upper-bound of range to be clipped to.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function clipByValue_<T extends Tensor>(x: T | TensorLike, clipValueMin: number, clipValueMax: number): T;

export declare interface ClipByValueAttrs {
    clipValueMin: number;
    clipValueMax: number;
}

export declare type ClipByValueInputs = UnaryInputs;

export declare const clone: typeof clone_;

/**
 * Creates a new tensor with the same values and shape as the specified
 * tensor.
 *
 * ```js
 * const x = tf.tensor([1, 2]);
 *
 * x.clone().print();
 * ```
 *
 * @param x The tensor to clone.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function clone_<T extends Tensor>(x: T | TensorLike): T;

declare function collectGatherOpShapeInfo(x: TensorInfo, indices: TensorInfo, axis: number, batchDims: number): GatherOpShapeInfo;

/**
 * A dictionary containing column level configurations when reading and decoding
 * CSV file(s) from csv source.
 * Has the following fields:
 * - `required` If value in this column is required. If set to `true`, throw an
 * error when it finds an empty value.
 *
 * - `dtype` Data type of this column. Could be int32, float32, bool, or string.
 *
 * - `default` Default value of this column.
 *
 * - `isLabel` Whether this column is label instead of features. If isLabel is
 * `true` for at least one column, the .csv() API will return an array of two
 * items: the first item is a dict of features key/value pairs, the second item
 * is a dict of labels key/value pairs. If no column is marked as label returns
 * a dict of features only.
 */
declare interface ColumnConfig {
    required?: boolean;
    dtype?: DataType_2;
    default?: TensorContainer_2;
    isLabel?: boolean;
}

declare function combineLocations(outputLoc: number[], reduceLoc: number[], axes: number[]): number[];

export declare const Complex = "Complex";

export declare const complex: typeof complex_;

/**
 * Converts two real numbers to a complex number.
 *
 * Given a tensor `real` representing the real part of a complex number, and a
 * tensor `imag` representing the imaginary part of a complex number, this
 * operation returns complex numbers elementwise of the form [r0, i0, r1, i1],
 * where r represents the real part and i represents the imag part.
 *
 * The input tensors real and imag must have the same shape.
 *
 * ```js
 * const real = tf.tensor1d([2.25, 3.25]);
 * const imag = tf.tensor1d([4.75, 5.75]);
 * const complex = tf.complex(real, imag);
 *
 * complex.print();
 * ```
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function complex_<T extends Tensor>(real: T | TensorLike, imag: T | TensorLike): T;

export declare const ComplexAbs = "ComplexAbs";

export declare type ComplexAbsInputs = UnaryInputs;

declare type ComplexBinaryKernelImpl = (aShape: number[], bShape: number[], aRealVals: Float32Array, aImagVals: Float32Array, bRealVals: Float32Array, bImagVals: Float32Array) => [TypedArray_2, TypedArray_2, number[]];

export declare type ComplexInputs = Pick<NamedTensorInfoMap, 'real' | 'imag'>;

/**
 * Extracts even indexed complex values in the given array.
 * @param complex The complex tensor values
 */
declare function complexWithEvenIndex(complex: Float32Array): {
    real: Float32Array;
    imag: Float32Array;
};

/**
 * Extracts odd indexed comple values in the given array.
 * @param complex The complex tensor values
 */
declare function complexWithOddIndex(complex: Float32Array): {
    real: Float32Array;
    imag: Float32Array;
};

/**
 * Computes the information for a forward pass of a convolution/pooling
 * operation.
 */
declare function computeConv2DInfo(inShape: [number, number, number, number], filterShape: [number, number, number, number], strides: number | [number, number], dilations: number | [number, number], pad: 'same' | 'valid' | number | ExplicitPadding, roundingMode?: 'floor' | 'round' | 'ceil', depthwise?: boolean, dataFormat?: 'channelsFirst' | 'channelsLast'): Conv2DInfo;

/**
 * Computes the information for a forward pass of a 3D convolution/pooling
 * operation.
 */
declare function computeConv3DInfo(inShape: [number, number, number, number, number], filterShape: [number, number, number, number, number], strides: number | [number, number, number], dilations: number | [number, number, number], pad: 'same' | 'valid' | number, depthwise?: boolean, dataFormat?: 'channelsFirst' | 'channelsLast', roundingMode?: 'floor' | 'round' | 'ceil'): Conv3DInfo;

declare function computeDefaultPad(inputShape: [number, number] | [number, number, number, number], fieldSize: number, stride: number, dilation?: number): number;

/**
 *
 * @param inputShape Input tensor shape is of the following dimensions:
 *     `[batch, height, width, inChannels]`.
 * @param filterShape The filter shape is of the following dimensions:
 *     `[filterHeight, filterWidth, depth]`.
 * @param strides The strides of the sliding window for each dimension of the
 *     input tensor: `[strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat The data format of the input and output data.
 *     Defaults to 'NHWC'.
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`.
 *     Defaults to `[1, 1]`. If `dilations` is a single number, then
 *     `dilationHeight == dilationWidth`.
 */
declare function computeDilation2DInfo(inputShape: [number, number, number, number], filterShape: [number, number, number], strides: number | [number, number], pad: 'same' | 'valid' | number, dataFormat: 'NHWC', dilations: number | [number, number]): Conv2DInfo;

declare function computeFlatOffset(begin: number[], strides: number[]): number;

declare function computeOptimalWindowSize(inSize: number): number;

declare function computeOutAndReduceShapes(aShape: number[], axes: number[]): [number[], number[]];

/** Computes the output shape given the strided slice params. */
declare function computeOutShape(begin: number[], end: number[], strides: number[]): number[];

declare function computeOutShape_2(aShape: number[], axis: number, numSegments: number): number[];

declare function computeOutShape_3(shapes: number[][], axis: number): number[];

declare function computePool2DInfo(inShape: [number, number, number, number], filterSize: [number, number] | number, strides: number | [number, number], dilations: number | [number, number], pad: 'same' | 'valid' | number | ExplicitPadding, roundingMode?: 'floor' | 'round' | 'ceil', dataFormat?: 'channelsFirst' | 'channelsLast'): Conv2DInfo;

/**
 * Computes the information for a forward pass of a pooling3D operation.
 */
declare function computePool3DInfo(inShape: [number, number, number, number, number], filterSize: number | [number, number, number], strides: number | [number, number, number], dilations: number | [number, number, number], pad: 'same' | 'valid' | number, roundingMode?: 'floor' | 'round' | 'ceil', dataFormat?: 'NDHWC' | 'NCDHW'): Conv3DInfo;

declare function computeStrides(shape: number[]): number[];

export declare const Concat = "Concat";

export declare const concat: typeof concat_;

export declare const concat1d: typeof concat1d_;

/**
 * Concatenates a list of`tf.Tensor1D`s along an axis. See `concat` for details.
 *
 * For example, if:
 * A: shape(3) = |r1, g1, b1|
 * B: shape(2) = |r2, g2|
 * C = tf.concat1d([A, B]) == |r1, g1, b1, r2, g2|
 *
 * @param tensors A list of`tf.Tensor`s to concatenate.
 * @return The concatenated array.
 */
declare function concat1d_(tensors: Array<Tensor1D | TensorLike>): Tensor1D;

export declare const concat2d: typeof concat2d_;

/**
 * Concatenates a list of`tf.Tensor2D`s along an axis. See `concat` for details.
 *
 * For example, if:
 * A: shape(2, 3) = | r1, g1, b1 |
 *                  | r2, g2, b2 |
 *
 * B: shape(2, 3) = | r3, g3, b3 |
 *                  | r4, g4, b4 |
 *
 * C = tf.concat2d([A, B], axis)
 *
 * if axis = 0:
 * C: shape(4, 3) = | r1, g1, b1 |
 *                  | r2, g2, b2 |
 *                  | r3, g3, b3 |
 *                  | r4, g4, b4 |
 *
 * if axis = 1:
 * C = shape(2, 6) = | r1, g1, b1, r3, g3, b3 |
 *                   | r2, g2, b2, r4, g4, b4 |
 *
 *
 * @param tensors A list of `tf.Tensor`s to concatenate.
 * @param axis The axis to concatenate along.
 * @return The concatenated array.
 */
declare function concat2d_(tensors: Array<Tensor2D | TensorLike>, axis: number): Tensor2D;

export declare const concat3d: typeof concat3d_;

/**
 * Concatenates a list of `tf.Tensor3D`s along an axis.
 * See `concat` for details.
 *
 * For example, if:
 * A: shape(2, 1, 3) = | r1, g1, b1 |
 *                     | r2, g2, b2 |
 *
 * B: shape(2, 1, 3) = | r3, g3, b3 |
 *                     | r4, g4, b4 |
 *
 * C = tf.concat3d([A, B], axis)
 *
 * if axis = 0:
 * C: shape(4, 1, 3) = | r1, g1, b1 |
 *                     | r2, g2, b2 |
 *                     | r3, g3, b3 |
 *                     | r4, g4, b4 |
 *
 * if axis = 1:
 * C: shape(2, 2, 3) = | r1, g1, b1, r3, g3, b3 |
 *                     | r2, g2, b2, r4, g4, b4 |
 *
 * if axis = 2:
 * C = shape(2, 1, 6) = | r1, g1, b1, r3, g3, b3 |
 *                      | r2, g2, b2, r4, g4, b4 |
 *
 * @param tensors A list of`tf.Tensor`s to concatenate.
 * @param axis The axis to concate along.
 * @return The concatenated array.
 */
declare function concat3d_(tensors: Array<Tensor3D | TensorLike>, axis: number): Tensor3D;

export declare const concat4d: typeof concat4d_;

/**
 * Concatenates a list of `tf.Tensor4D`s along an axis.
 * See `concat` for details.
 *
 * @param tensors A list of `tf.Tensor`s to concatenate.
 * @param axis The axis to concate along.
 * @return The concatenated array.
 */
declare function concat4d_(tensors: Array<Tensor4D | TensorLike>, axis: number): Tensor4D;

/**
 * Concatenates a list of `tf.Tensor`s along a given axis.
 *
 * The tensors ranks and types must match, and their sizes must match in all
 * dimensions except `axis`.
 *
 * Also available are stricter rank-specific methods that assert that
 * `tensors` are of the given rank:
 *   - `tf.concat1d`
 *   - `tf.concat2d`
 *   - `tf.concat3d`
 *   - `tf.concat4d`
 *
 * Except `tf.concat1d` (which does not have axis param), all methods have
 * same signature as this method.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * a.concat(b).print();  // or a.concat(b)
 * ```
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * const c = tf.tensor1d([5, 6]);
 * tf.concat([a, b, c]).print();
 * ```
 *
 * ```js
 * const a = tf.tensor2d([[1, 2], [10, 20]]);
 * const b = tf.tensor2d([[3, 4], [30, 40]]);
 * const axis = 1;
 * tf.concat([a, b], axis).print();
 * ```
 * @param tensors A list of tensors to concatenate.
 * @param axis The axis to concate along. Defaults to 0 (the first dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function concat_<T extends Tensor>(tensors: Array<T | TensorLike>, axis?: number): T;

export declare interface ConcatAttrs {
    axis: number;
}

declare class Concatenate extends Merge {
    /** @nocollapse */
    static className: string;
    readonly DEFAULT_AXIS = -1;
    private readonly axis;
    constructor(args?: ConcatenateLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2;
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Layer that concatenates an `Array` of inputs.
 *
 * It takes a list of tensors, all of the same shape except for the
 * concatenation axis, and returns a single tensor, the concatenation
 * of all inputs. For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 3]});
 * const concatLayer = tf.layers.concatenate();
 * const output = concatLayer.apply([input1, input2]);
 * console.log(JSON.stringify(output.shape));
 * // You get [null, 2, 5], with the first dimension as the undetermined batch
 * // dimension. The last dimension (5) is the result of concatenating the
 * // last dimensions of the inputs (2 and 3).
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function concatenate(args?: ConcatenateLayerArgs): Concatenate;

/**
 * Concatenate a number of ArrayBuffers into one.
 *
 * @param buffers A number of array buffers to concatenate.
 * @returns Result of concatenating `buffers` in order.
 */
declare function concatenateArrayBuffers(buffers: ArrayBuffer[]): ArrayBuffer;

declare interface ConcatenateLayerArgs extends LayerArgs {
    /**
     * Axis along which to concatenate.
     */
    axis?: number;
}

declare function concatImpl(inputs: Array<{
    vals: BackendValues_2;
    shape: number[];
}>, outShape: number[], dtype: DataType_2, simplyConcat: boolean): TypedArray_2 | string[];

export declare type ConcatInputs = TensorInfo[];

declare interface ConfigDict {
    [key: string]: ConfigDictValue;
}

declare interface ConfigDictArray extends Array<ConfigDictValue> {
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Types to support JSON-esque data structures internally.
 *
 * Internally ConfigDict's use camelCase keys and values where the
 * values are class names to be instantiated.  On the python side, these
 * will be snake_case.  Internally we allow Enums into the values for better
 * type safety, but these need to be converted to raw primitives (usually
 * strings) for round-tripping with python.
 *
 * toConfig returns the TS-friendly representation. model.toJSON() returns
 * the pythonic version as that's the portable format.  If you need to
 * python-ify a non-model level toConfig output, you'll need to use a
 * convertTsToPythonic from serialization_utils in -Layers.
 *
 */
declare type ConfigDictValue = boolean | number | string | null | ConfigDictArray | ConfigDict;

declare const confusionMatrix: typeof confusionMatrix_;

/**
 * Computes the confusion matrix from true labels and predicted labels.
 *
 * ```js
 * const labels = tf.tensor1d([0, 1, 2, 1, 0], 'int32');
 * const predictions = tf.tensor1d([0, 2, 2, 1, 0], 'int32');
 * const numClasses = 3;
 * const out = tf.math.confusionMatrix(labels, predictions, numClasses);
 * out.print();
 * // Expected output matrix:
 * // [[2, 0, 0],
 * //  [0, 1, 1],
 * //  [0, 0, 1]]
 * ```
 *
 * @param labels The target labels, assumed to be 0-based integers
 *   for the classes. The shape is `[numExamples]`, where
 *   `numExamples` is the number of examples included.
 * @param predictions The predicted classes, assumed to be
 *   0-based integers for the classes. Must have the same shape as `labels`.
 * @param numClasses Number of all classes, as an integer.
 *   Its value must be larger than the largest element in `labels` and
 *   `predictions`.
 * @returns The confusion matrix as a int32-type 2D tensor. The value at
 *   row `r` and column `c` is the number of times examples of actual class
 *   `r` were predicted as class `c`.
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
declare function confusionMatrix_(labels: Tensor1D | TensorLike, predictions: Tensor1D | TensorLike, numClasses: number): Tensor2D;

/**
 * Initializer that generates values initialized to some constant.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function constant(args: ConstantArgs): Initializer;

declare interface ConstantArgs {
    /** The value for each element in the variable. */
    value: number;
}

/**
 * Base class for functions that impose constraints on weight values
 *
 * @doc {
 *   heading: 'Constraints',
 *   subheading: 'Classes',
 *   namespace: 'constraints'
 * }
 */
declare abstract class Constraint extends serialization_2.Serializable {
    abstract apply(w: Tensor_2): Tensor_2;
    getConfig(): serialization_2.ConfigDict;
}

/** @docinline */
declare type ConstraintIdentifier = 'maxNorm' | 'minMaxNorm' | 'nonNeg' | 'unitNorm' | string;

declare namespace constraints {
    export {
        maxNorm,
        unitNorm,
        nonNeg,
        minMaxNorm
    }
}
export { constraints }

declare type Container<T> = ContainerObject<T> | ContainerArray<T>;

/**
 * A Container is a directed acyclic graph of layers.
 *
 * It is the topological form of a "model". A LayersModel
 * is simply a Container with added training routines.
 *
 */
declare abstract class Container_2 extends Layer {
    inputs: SymbolicTensor[];
    outputs: SymbolicTensor[];
    inputLayers: Layer[];
    inputLayersNodeIndices: number[];
    inputLayersTensorIndices: number[];
    outputLayers: Layer[];
    outputLayersNodeIndices: number[];
    outputLayersTensorIndices: number[];
    layers: Layer[];
    layersByDepth: {
        [depth: string]: Layer[];
    };
    nodesByDepth: {
        [depth: string]: Node_2[];
    };
    internalContainerRefs: Container_2[];
    containerNodes: Set<string>;
    inputNames: string[];
    outputNames: string[];
    feedInputShapes: Shape[];
    protected internalInputShapes: Shape[];
    protected internalOutputShapes: Shape[];
    protected feedInputNames: string[];
    protected feedOutputNames: string[];
    constructor(args: ContainerArgs);
    protected assertNotDisposed(): void;
    /**
     * Attempt to dispose a LayersModel's weights.
     *
     * This method decrease the reference count of the LayersModel object by 1.
     *
     * A LayersModel is reference-counted. Its reference count is incremented by 1
     * when it is first constructed and when it is used as a Layer of another
     * LayersModel.
     *
     * If the reference count of a LayersModel becomes 0, the `dispose` method of
     * all its constituent `Layer`s will be called.
     *
     * Note: If the reference count is greater than 0 after the decrement, the
     * `dispose` method of its constituent `Layer`s will *not* be called.
     *
     * After a LayersModel is disposed, it cannot be used in calls such as
     * 'predict`, `evaluate` or `fit` anymore.
     *
     * @returns A DisposeResult Object with the following fields:
     *   - refCountAfterDispose: The reference count of the LayersModel after this
     *     `dispose()` call.
     *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
     *     during this `dispose()` call.
     * @throws {Error} If the layer is not built yet, or if the LayersModel has
     *   already been disposed.
     */
    dispose(): DisposeResult;
    get trainable(): boolean;
    set trainable(trainable: boolean);
    get trainableWeights(): LayerVariable[];
    get nonTrainableWeights(): LayerVariable[];
    get weights(): LayerVariable[];
    /**
     * Loads all layer weights from a JSON object.
     *
     * Porting Note: HDF5 weight files cannot be directly loaded in JavaScript /
     *   TypeScript. The utility script at `scripts/pykeras.py` offers means
     *   to convert them into JSON strings compatible with this method.
     * Porting Note: TensorFlow.js Layers supports only loading by name currently.
     *
     * @param weights A JSON mapping weight names to weight values as nested
     *   arrays of numbers, or a `NamedTensorMap`, i.e., a JSON mapping weight
     *   names to `tf.Tensor` objects.
     * @param strict Require that the provided weights exactly match those
     *   required by the container.  Default: `true`.  Passing `false` means that
     *   extra weights and missing weights will be silently ignored.
     */
    loadWeights(weights: NamedTensorMap_2, strict?: boolean): void;
    /**
     * Util shared between different serialization methods.
     * @returns LayersModel config with Keras version information added.
     */
    protected updatedConfig(): serialization_2.ConfigDict;
    /**
     * Returns a JSON string containing the network configuration.
     *
     * To load a network from a JSON save file, use
     * models.modelFromJSON(jsonString);
     * @param extraJsonArgs Unused in tfjs-layers, maintained for PyKeras
     * @param returnString Whether the return value should be stringified
     *    (default: `true`).
     * @returns a JSON string if `returnString` (default), or a JSON object if
     *   `!returnString`.
     */
    toJSON(unused?: any, returnString?: boolean): string | PyJsonDict;
    /**
     * Call the model on new inputs.
     *
     * In this case `call` just reapplies all ops in the graph to the new inputs
     * (e.g. build a new computational graph from the provided inputs).
     *
     * @param inputs A tensor or list of tensors.
     * @param mask A mask or list of masks. A mask can be either a tensor or null
     *   (no mask).
     *
     * @return A tensor if there is a single output, or a list of tensors if there
     *   are more than one outputs.
     */
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    /**
     * Computes an output mask tensor.
     *
     * @param inputs Tensor or list of tensors.
     * @param mask Tensor or list of tensors.
     *
     * @return null or a tensor (or list of tensors, one per output tensor of the
     * layer).
     */
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2 | Tensor_2[];
    /**
     * Computes the output shape of the layer.
     *
     * Assumes that the layer will be built to match that input shape provided.
     *
     * @param inputShape A shape (tuple of integers) or a list of shape tuples
     *   (one per output tensor of the layer). Shape tuples can include null for
     *   free dimensions, instead of an integer.
     */
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    /**
     * Computes output tensors for new inputs.
     *
     * Note:
     *   - Expects `inputs` to be a list (potentially with 1 element).
     *
     * @param inputs List of tensors
     * @param masks List of masks (tensors or null).
     * @return Three lists: outputTensors, outputMasks, outputShapes
     */
    protected runInternalGraph(inputs: Tensor_2[], masks?: Tensor_2[]): [
    Tensor_2[],
    Tensor_2[],
    Shape[]
    ];
    /**
     * Builds a map of internal node keys to node ordering.
     * Used in serializaion a node orderings may change as unused nodes are
     * dropped. Porting Note:  This helper method was pulled out of getConfig to
     * improve readability.
     * @param layers An array of Layers in the model.
     * @returns Map of Node Keys to index order within the layer.
     */
    private buildNodeConversionMap;
    /**
     * Retrieves a layer based on either its name (unique) or index.
     *
     * Indices are based on order of horizontal graph traversal (bottom-up).
     *
     * If both `name` and `index` are specified, `index` takes precedence.
     *
     * @param name Name of layer.
     * @param index Index of layer.
     * @returns A Layer instance.
     * @throws ValueError: In case of invalid layer name or index.
     *
     * @doc {
     *    heading: 'Layers',
     *    subheading: 'Classes',
     *    namespace: 'layers',
     *    subclasses: ['LayersModel']
     * }
     */
    getLayer(name?: string, index?: number): Layer;
    /**
     * Retrieves the Container's current loss values.
     *
     * Used for regularizers during training.
     */
    calculateLosses(): Scalar_2[];
    getConfig(): serialization_2.ConfigDict;
    /**
     * Instantiates a LayersModel from its config (output of `get_config()`).
     * @param cls the class to create
     * @param config LayersModel config dictionary.
     * @param customObjects An optional dictionary of custom objects.
     * @param fastWeightInit Optional flag to use fast weight initialization
     *   during deserialization. This is applicable to cases in which
     *   the initialization will be immediately overwritten by loaded weight
     *   values. Default: `false`.
     * @returns A LayersModel instance.
     * @throws ValueError: In case of improperly formatted config dict.
     */
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict, customObjects?: serialization_2.ConfigDict, fastWeightInit?: boolean): T;
    /**
     * Determine whether the container is stateful.
     *
     * Porting Note: this is the equivalent of the stateful @property of
     *   the Container class in PyKeras.
     */
    get stateful(): boolean;
    /**
     * Reset the state of all stateful constituent layers (if any).
     *
     * Examples of stateful layers include RNN layers whose `stateful` property
     * is set as `true`.
     */
    resetStates(): void;
}

/** Constructor config for Container. */
declare interface ContainerArgs {
    inputs: SymbolicTensor | SymbolicTensor[];
    outputs: SymbolicTensor | SymbolicTensor[];
    name?: string;
}

declare interface ContainerArray<T> extends Array<ContainerOrT<T>> {
}

declare interface ContainerObject<T> {
    [x: string]: ContainerOrT<T>;
}

declare type ContainerOrT<T> = Container<T> | T;

/**
 * Abstract nD convolution layer.  Ancestor of convolution layers which reduce
 * across channels, i.e., Conv1D and Conv2D, but not DepthwiseConv2D.
 */
declare abstract class Conv extends BaseConv {
    protected readonly filters: number;
    protected kernel: LayerVariable;
    protected readonly kernelInitializer?: Initializer;
    protected readonly kernelConstraint?: Constraint;
    protected readonly kernelRegularizer?: Regularizer;
    constructor(rank: number, args: ConvLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
    protected static verifyArgs(args: ConvLayerArgs): void;
}

declare class Conv1D extends Conv {
    /** @nocollapse */
    static className: string;
    constructor(args: ConvLayerArgs);
    getConfig(): serialization_2.ConfigDict;
    protected static verifyArgs(args: ConvLayerArgs): void;
}

export declare const conv1d: typeof conv1d_;

/**
 * Computes a 1D convolution over the input x.
 *
 * @param x The input tensor, of rank 3 or rank 2, of shape
 *     `[batch, width, inChannels]`. If rank 2, batch of 1 is assumed.
 * @param filter The filter, rank 3, of shape
 *     `[filterWidth, inDepth, outDepth]`.
 * @param stride The number of entries by which the filter is moved right at
 *     each step.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat An optional string from "NWC", "NCW". Defaults to "NWC",
 *     the data is stored in the order of [batch, in_width, in_channels]. Only
 *     "NWC" is currently supported.
 * @param dilation The dilation rate in which we sample input values in
 *     atrous convolution. Defaults to `1`. If it is greater than 1, then
 *     stride must be `1`.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function conv1d_<T extends Tensor2D | Tensor3D>(x: T | TensorLike, filter: Tensor3D | TensorLike, stride: number, pad: 'valid' | 'same' | number | conv_util.ExplicitPadding, dataFormat?: 'NWC' | 'NCW', dilation?: number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;

/**
 * 1D convolution layer (e.g., temporal convolution).
 *
 * This layer creates a convolution kernel that is convolved
 * with the layer input over a single spatial (or temporal) dimension
 * to produce a tensor of outputs.
 *
 * If `use_bias` is True, a bias vector is created and added to the outputs.
 *
 * If `activation` is not `null`, it is applied to the outputs as well.
 *
 * When using this layer as the first layer in a model, provide an
 * `inputShape` argument `Array` or `null`.
 *
 * For example, `inputShape` would be:
 * - `[10, 128]` for sequences of 10 vectors of 128-dimensional vectors
 * - `[null, 128]` for variable-length sequences of 128-dimensional vectors.
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional',  namespace: 'layers'}
 */
declare function conv1d_2(args: ConvLayerArgs): Conv1D;

export declare const Conv2D = "Conv2D";

export declare const conv2d: typeof conv2d_;

/**
 * Computes a 2D convolution over the input x.
 *
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, inDepth, outDepth]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels].
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function conv2d_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, filter: Tensor4D | TensorLike, strides: [number, number] | number, pad: 'valid' | 'same' | number | conv_util.ExplicitPadding, dataFormat?: 'NHWC' | 'NCHW', dilations?: [number, number] | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;

declare class Conv2D_2 extends Conv {
    /** @nocollapse */
    static className: string;
    constructor(args: ConvLayerArgs);
    getConfig(): serialization_2.ConfigDict;
    protected static verifyArgs(args: ConvLayerArgs): void;
}

declare const conv2d_2: typeof fusedConv2d_;

/**
 * 2D convolution layer (e.g. spatial convolution over images).
 *
 * This layer creates a convolution kernel that is convolved
 * with the layer input to produce a tensor of outputs.
 *
 * If `useBias` is True, a bias vector is created and added to the outputs.
 *
 * If `activation` is not `null`, it is applied to the outputs as well.
 *
 * When using this layer as the first layer in a model,
 * provide the keyword argument `inputShape`
 * (Array of integers, does not include the sample axis),
 * e.g. `inputShape=[128, 128, 3]` for 128x128 RGB pictures
 * in `dataFormat='channelsLast'`.
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function conv2d_3(args: ConvLayerArgs): Conv2D_2;

export declare interface Conv2DAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dataFormat: 'NHWC' | 'NCHW';
    dilations: [number, number] | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare const Conv2DBackpropFilter = "Conv2DBackpropFilter";

export declare interface Conv2DBackpropFilterAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dataFormat: 'NHWC' | 'NCHW';
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    filterShape: [number, number, number, number];
}

export declare type Conv2DBackpropFilterInputs = Pick<NamedTensorInfoMap, 'x' | 'dy'>;

export declare const Conv2DBackpropInput = "Conv2DBackpropInput";

export declare interface Conv2DBackpropInputAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dataFormat: 'NHWC' | 'NCHW';
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    inputShape: [number, number, number, number];
}

export declare type Conv2DBackpropInputInputs = Pick<NamedTensorInfoMap, 'dy' | 'filter'>;

/**
 * Information about the forward pass of a convolution/pooling operation.
 * It includes input and output shape, strides, filter size and padding
 * information.
 */
declare type Conv2DInfo = {
    batchSize: number;
    inHeight: number;
    inWidth: number;
    inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    dilationHeight: number;
    dilationWidth: number;
    filterHeight: number;
    filterWidth: number;
    effectiveFilterHeight: number;
    effectiveFilterWidth: number;
    padInfo: PadInfo;
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
};

export declare type Conv2DInputs = Pick<NamedTensorInfoMap, 'x' | 'filter'>;

declare class Conv2DTranspose extends Conv2D_2 {
    /** @nocollapse */
    static className: string;
    inputSpec: InputSpec[];
    constructor(args: ConvLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

export declare const conv2dTranspose: typeof conv2dTranspose_;

/**
 * Computes the transposed 2D convolution of an image, also known as a
 * deconvolution.
 *
 * @param x The input image, of rank 4 or rank 3, of shape
 *   `[batch, height, width, inDepth]`. If rank 3, batch of 1 is assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, outDepth, inDepth]`.
 *     `inDepth` must match `inDepth` in `x`.
 * @param outputShape Output shape, of rank 4 or rank 3:
 *     `[batch, height, width, outDepth]`. If rank 3, batch of 1 is assumed.
 * @param strides The strides of the original convolution:
 *     `[strideHeight, strideWidth]`.
 * @param pad  The type of padding algorithm used in the non-transpose version
 *    of the op.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function conv2dTranspose_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, filter: Tensor4D | TensorLike, outputShape: [number, number, number, number] | [number, number, number], strides: [number, number] | number, pad: 'valid' | 'same' | number | ExplicitPadding, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;

/**
 * Transposed convolutional layer (sometimes called Deconvolution).
 *
 * The need for transposed convolutions generally arises
 * from the desire to use a transformation going in the opposite direction of
 * a normal convolution, i.e., from something that has the shape of the output
 * of some convolution to something that has the shape of its input while
 * maintaining a connectivity pattern that is compatible with said
 * convolution.
 *
 * When using this layer as the first layer in a model, provide the
 * configuration `inputShape` (`Array` of integers, does not include the
 * sample axis), e.g., `inputShape: [128, 128, 3]` for 128x128 RGB pictures in
 * `dataFormat: 'channelsLast'`.
 *
 * Input shape:
 *   4D tensor with shape:
 *   `[batch, channels, rows, cols]` if `dataFormat` is `'channelsFirst'`.
 *   or 4D tensor with shape
 *   `[batch, rows, cols, channels]` if `dataFormat` is `'channelsLast`.
 *
 * Output shape:
 *   4D tensor with shape:
 *   `[batch, filters, newRows, newCols]` if `dataFormat` is
 * `'channelsFirst'`. or 4D tensor with shape:
 *   `[batch, newRows, newCols, filters]` if `dataFormat` is `'channelsLast'`.
 *
 * References:
 *   - [A guide to convolution arithmetic for deep
 * learning](https://arxiv.org/abs/1603.07285v1)
 *   - [Deconvolutional
 * Networks](http://www.matthewzeiler.com/pubs/cvpr2010/cvpr2010.pdf)
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function conv2dTranspose_2(args: ConvLayerArgs): Conv2DTranspose;

export declare const Conv3D = "Conv3D";

export declare const conv3d: typeof conv3d_;

/**
 * Computes a 3D convolution over the input x.
 *
 * @param x The input tensor, of rank 5 or rank 4, of shape
 *     `[batch, depth, height, width, channels]`. If rank 4,
 * batch of 1 is assumed.
 * @param filter The filter, rank 5, of shape
 *     `[filterDepth, filterHeight, filterWidth, inChannels, outChannels]`.
 *      inChannels must match between input and filter.
 * @param strides The strides of the convolution: `[strideDepth, strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat: An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 * @param dilations The dilation rates: `[dilationDepth, dilationHeight,
 *     dilationWidth]` in which we sample input values across the height
 *     and width dimensions in atrous convolution. Defaults to `[1, 1, 1]`.
 *     If `dilations` is a single number, then
 *     `dilationDepth == dilationHeight == dilationWidth`. If it is greater
 *     than 1, then all values of `strides` must be 1.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function conv3d_<T extends Tensor4D | Tensor5D>(x: T | TensorLike, filter: Tensor5D | TensorLike, strides: [number, number, number] | number, pad: 'valid' | 'same', dataFormat?: 'NDHWC' | 'NCDHW', dilations?: [number, number, number] | number): T;

declare class Conv3D_2 extends Conv {
    /** @nocollapse */
    static className: string;
    constructor(args: ConvLayerArgs);
    getConfig(): serialization_2.ConfigDict;
    protected static verifyArgs(args: ConvLayerArgs): void;
}

/**
 * 3D convolution layer (e.g. spatial convolution over volumes).
 *
 * This layer creates a convolution kernel that is convolved
 * with the layer input to produce a tensor of outputs.
 *
 * If `useBias` is True, a bias vector is created and added to the outputs.
 *
 * If `activation` is not `null`, it is applied to the outputs as well.
 *
 * When using this layer as the first layer in a model,
 * provide the keyword argument `inputShape`
 * (Array of integers, does not include the sample axis),
 * e.g. `inputShape=[128, 128, 128, 1]` for 128x128x128 grayscale volumes
 * in `dataFormat='channelsLast'`.
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function conv3d_2(args: ConvLayerArgs): Conv3D_2;

export declare interface Conv3DAttrs {
    strides: [number, number, number] | number;
    pad: 'valid' | 'same';
    dataFormat: 'NDHWC' | 'NCDHW';
    dilations: [number, number, number] | number;
}

export declare const Conv3DBackpropFilterV2 = "Conv3DBackpropFilterV2";

export declare interface Conv3DBackpropFilterV2Attrs {
    strides: [number, number, number] | number;
    pad: 'valid' | 'same';
    filterShape: [number, number, number, number, number];
}

export declare type Conv3DBackpropFilterV2Inputs = Pick<NamedTensorInfoMap, 'x' | 'dy'>;

export declare const Conv3DBackpropInputV2 = "Conv3DBackpropInputV2";

export declare interface Conv3DBackpropInputV2Attrs {
    strides: [number, number, number] | number;
    pad: 'valid' | 'same';
    inputShape: [number, number, number, number, number];
}

export declare type Conv3DBackpropInputV2Inputs = Pick<NamedTensorInfoMap, 'dy' | 'filter'>;

/**
 * Information about the forward pass of a 3D convolution/pooling operation.
 * It includes input and output shape, strides, filter size and padding
 * information.
 */
declare type Conv3DInfo = {
    batchSize: number;
    inDepth: number;
    inHeight: number;
    inWidth: number;
    inChannels: number;
    outDepth: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideDepth: number;
    strideHeight: number;
    strideWidth: number;
    dilationDepth: number;
    dilationHeight: number;
    dilationWidth: number;
    filterDepth: number;
    filterHeight: number;
    filterWidth: number;
    effectiveFilterDepth: number;
    effectiveFilterHeight: number;
    effectiveFilterWidth: number;
    padInfo: PadInfo3D;
    inShape: [number, number, number, number, number];
    outShape: [number, number, number, number, number];
    filterShape: [number, number, number, number, number];
};

export declare type Conv3DInputs = Pick<NamedTensorInfoMap, 'x' | 'filter'>;

export declare const conv3dTranspose: typeof conv3dTranspose_;

/**
 * Computes the transposed 3D convolution of a volume, also known as a
 * deconvolution.
 *
 * @param x The input image, of rank 5 or rank 4, of shape
 *   `[batch, depth, height, width, inDepth]`. If rank 4, batch of 1 is assumed.
 * @param filter The filter, rank 4, of shape
 *     `[depth, filterHeight, filterWidth, outDepth, inDepth]`.
 *     `inDepth` must match `inDepth` in `x`.
 * @param outputShape Output shape, of rank 5 or rank 4:
 *     `[batch, depth, height, width, outDepth]`. If rank 3, batch of 1 is
 *    assumed.
 * @param strides The strides of the original convolution:
 *     `[strideDepth, strideHeight, strideWidth]`.
 * @param pad  The type of padding algorithm used in the non-transpose version
 *    of the op.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function conv3dTranspose_<T extends Tensor4D | Tensor5D>(x: T | TensorLike, filter: Tensor5D | TensorLike, outputShape: [
number,
number,
number,
number,
number
] | [number, number, number, number], strides: [number, number, number] | number, pad: 'valid' | 'same'): T;

declare function conv3dTranspose_2(args: ConvLayerArgs): Layer;

declare namespace conv_util {
    export {
        computeDilation2DInfo,
        computePool2DInfo,
        computePool3DInfo,
        computeConv2DInfo,
        computeConv3DInfo,
        computeDefaultPad,
        tupleValuesAreOne,
        eitherStridesOrDilationsAreOne,
        convertConv2DDataFormat,
        ExplicitPadding,
        PadInfo,
        PadInfo3D,
        Conv2DInfo,
        Conv3DInfo
    }
}

/**
 * Convert Conv2D dataFormat from 'NHWC'|'NCHW' to
 *    'channelsLast'|'channelsFirst'
 * @param dataFormat in 'NHWC'|'NCHW' mode
 * @return dataFormat in 'channelsLast'|'channelsFirst' mode
 * @throws unknown dataFormat
 */
declare function convertConv2DDataFormat(dataFormat: 'NHWC' | 'NCHW'): 'channelsLast' | 'channelsFirst';

/**
 * LayerConfig for non-depthwise convolutional layers.
 * Applies to non-depthwise convolution of all ranks (e.g, Conv1D, Conv2D,
 * Conv3D).
 */
declare interface ConvLayerArgs extends BaseConvLayerArgs {
    /**
     * The dimensionality of the output space (i.e. the number of filters in the
     * convolution).
     */
    filters: number;
}

declare class ConvLSTM2D extends ConvRNN2D {
    /** @nocollapse */
    static className: string;
    constructor(args: ConvLSTM2DArgs);
    /** @nocollapse */
    static fromConfig<T extends tf.serialization.Serializable>(cls: tf.serialization.SerializableConstructor<T>, config: tf.serialization.ConfigDict): T;
}

/**
 * Convolutional LSTM layer - Xingjian Shi 2015.
 *
 * This is an `ConvRNN2D` layer consisting of one `ConvLSTM2DCell`. However,
 * unlike the underlying `ConvLSTM2DCell`, the `apply` method of `ConvLSTM2D`
 * operates on a sequence of inputs. The shape of the input (not including the
 * first, batch dimension) needs to be 4-D, with the first dimension being time
 * steps. For example:
 *
 * ```js
 * const filters = 3;
 * const kernelSize = 3;
 *
 * const batchSize = 4;
 * const sequenceLength = 2;
 * const size = 5;
 * const channels = 3;
 *
 * const inputShape = [batchSize, sequenceLength, size, size, channels];
 * const input = tf.ones(inputShape);
 *
 * const layer = tf.layers.convLstm2d({filters, kernelSize});
 *
 * const output = layer.apply(input);
 * ```
 */
/** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
declare function convLstm2d(args: ConvLSTM2DArgs): ConvLSTM2D;

declare interface ConvLSTM2DArgs extends Omit<LSTMLayerArgs, 'units' | 'cell'>, ConvRNN2DLayerArgs {
}

declare class ConvLSTM2DCell extends LSTMCell implements ConvRNN2DCell {
    /** @nocollapse */
    static className: string;
    readonly filters: number;
    readonly kernelSize: number[];
    readonly strides: number[];
    readonly padding: PaddingMode;
    readonly dataFormat: DataFormat;
    readonly dilationRate: number[];
    constructor(args: ConvLSTM2DCellArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: tf.Tensor[], kwargs: Kwargs): tf.Tensor[];
    getConfig(): tf.serialization.ConfigDict;
    inputConv(x: Tensor_2, w: Tensor_2, b?: Tensor_2, padding?: PaddingMode): tf.Tensor3D;
    recurrentConv(x: Tensor_2, w: Tensor_2): tf.Tensor3D;
}

/**
 * Cell class for `ConvLSTM2D`.
 *
 * `ConvLSTM2DCell` is distinct from the `ConvRNN2D` subclass `ConvLSTM2D` in
 * that its `call` method takes the input data of only a single time step and
 * returns the cell's output at the time step, while `ConvLSTM2D` takes the
 * input data over a number of time steps. For example:
 *
 * ```js
 * const filters = 3;
 * const kernelSize = 3;
 *
 * const sequenceLength = 1;
 * const size = 5;
 * const channels = 3;
 *
 * const inputShape = [sequenceLength, size, size, channels];
 * const input = tf.ones(inputShape);
 *
 * const cell = tf.layers.convLstm2dCell({filters, kernelSize});
 *
 * cell.build(input.shape);
 *
 * const outputSize = size - kernelSize + 1;
 * const outShape = [sequenceLength, outputSize, outputSize, filters];
 *
 * const initialH = tf.zeros(outShape);
 * const initialC = tf.zeros(outShape);
 *
 * const [o, h, c] = cell.call([input, initialH, initialC], {});
 * ```
 */
/** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
declare function convLstm2dCell(args: ConvLSTM2DCellArgs): ConvLSTM2DCell;

declare interface ConvLSTM2DCellArgs extends Omit<LSTMCellLayerArgs, 'units'>, ConvRNN2DCellArgs {
}

/**
 * Base class for convolutional-recurrent layers.
 */
declare class ConvRNN2D extends RNN {
    /** @nocollapse */
    static className: string;
    readonly cell: ConvRNN2DCell;
    constructor(args: ConvRNN2DLayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape): Shape | Shape[];
    getInitialState(inputs: tf.Tensor): tf.Tensor[];
    resetStates(states?: Tensor_2 | Tensor_2[], training?: boolean): void;
    protected computeSingleOutputShape(inputShape: Shape): Shape;
}

declare abstract class ConvRNN2DCell extends RNNCell {
    readonly filters: number;
    readonly kernelSize: number[];
    readonly strides: number[];
    readonly padding: PaddingMode;
    readonly dataFormat: DataFormat;
    readonly dilationRate: number[];
    readonly activation: Activation_2;
    readonly useBias: boolean;
    readonly kernelInitializer: Initializer;
    readonly recurrentInitializer: Initializer;
    readonly biasInitializer: Initializer;
    readonly kernelConstraint: Constraint;
    readonly recurrentConstraint: Constraint;
    readonly biasConstraint: Constraint;
    readonly kernelRegularizer: Regularizer;
    readonly recurrentRegularizer: Regularizer;
    readonly biasRegularizer: Regularizer;
    readonly dropout: number;
    readonly recurrentDropout: number;
}

declare interface ConvRNN2DCellArgs extends Omit<SimpleRNNCellLayerArgs, 'units'> {
    /**
     * The dimensionality of the output space (i.e. the number of filters in the
     * convolution).
     */
    filters: number;
    /**
     * The dimensions of the convolution window. If kernelSize is a number, the
     * convolutional window will be square.
     */
    kernelSize: number | number[];
    /**
     * The strides of the convolution in each dimension. If strides is a number,
     * strides in both dimensions are equal.
     *
     * Specifying any stride value != 1 is incompatible with specifying any
     * `dilationRate` value != 1.
     */
    strides?: number | number[];
    /**
     * Padding mode.
     */
    padding?: PaddingMode;
    /**
     * Format of the data, which determines the ordering of the dimensions in
     * the inputs.
     *
     * `channels_last` corresponds to inputs with shape
     *   `(batch, ..., channels)`
     *
     *  `channels_first` corresponds to inputs with shape `(batch, channels,
     * ...)`.
     *
     * Defaults to `channels_last`.
     */
    dataFormat?: DataFormat;
    /**
     * The dilation rate to use for the dilated convolution in each dimension.
     * Should be an integer or array of two or three integers.
     *
     * Currently, specifying any `dilationRate` value != 1 is incompatible with
     * specifying any `strides` value != 1.
     */
    dilationRate?: number | [number] | [number, number];
}

declare interface ConvRNN2DLayerArgs extends BaseRNNLayerArgs, ConvRNN2DCellArgs {
}

/**
 * Copy a model from one URL to another.
 *
 * This function supports:
 *
 * 1. Copying within a storage medium, e.g.,
 *    `tf.io.copyModel('localstorage://model-1', 'localstorage://model-2')`
 * 2. Copying between two storage mediums, e.g.,
 *    `tf.io.copyModel('localstorage://model-1', 'indexeddb://model-1')`
 *
 * ```js
 * // First create and save a model.
 * const model = tf.sequential();
 * model.add(tf.layers.dense(
 *     {units: 1, inputShape: [10], activation: 'sigmoid'}));
 * await model.save('localstorage://demo/management/model1');
 *
 * // Then list existing models.
 * console.log(JSON.stringify(await tf.io.listModels()));
 *
 * // Copy the model, from Local Storage to IndexedDB.
 * await tf.io.copyModel(
 *     'localstorage://demo/management/model1',
 *     'indexeddb://demo/management/model1');
 *
 * // List models again.
 * console.log(JSON.stringify(await tf.io.listModels()));
 *
 * // Remove both models.
 * await tf.io.removeModel('localstorage://demo/management/model1');
 * await tf.io.removeModel('indexeddb://demo/management/model1');
 * ```
 *
 * @param sourceURL Source URL of copying.
 * @param destURL Destination URL of copying.
 * @returns ModelArtifactsInfo of the copied model (if and only if copying
 *   is successful).
 * @throws Error if copying fails, e.g., if no model exists at `sourceURL`, or
 *   if `oldPath` and `newPath` are identical.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Management',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
declare function copyModel(sourceURL: string, destURL: string): Promise<ModelArtifactsInfo>;

/**
 * Finds kernels that have already been registered to a backend and re-registers
 * them for a new backend. Useful for registering custom backends.
 * @param registeredBackendName Already registered backend.
 * @param newBackendName New backend.
 */
export declare function copyRegisteredKernels(registeredBackendName: string, newBackendName: string): void;

export declare const Cos = "Cos";

export declare const cos: typeof cos_;

/**
 * Computes cos of the input `tf.Tensor` element-wise: `cos(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, Math.PI / 2, Math.PI * 3 / 4]);
 *
 * x.cos().print();  // or tf.cos(x)
 * ```
 * @param x The input tensor. Must be float32 type.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function cos_<T extends Tensor>(x: T | TensorLike): T;

export declare const Cosh = "Cosh";

export declare const cosh: typeof cosh_;

/**
 * Computes hyperbolic cos of the input `tf.Tensor` element-wise: `cosh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.cosh().print();  // or tf.cosh(x)
 * ```
 * @param x The input tensor. Must be float32 type.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function cosh_<T extends Tensor>(x: T | TensorLike): T;

export declare type CoshInputs = UnaryInputs;

/**
 * Loss or metric function: Cosine proximity.
 *
 * Mathematically, cosine proximity is defined as:
 *   `-sum(l2Normalize(yTrue) * l2Normalize(yPred))`,
 * wherein `l2Normalize()` normalizes the L2 norm of the input to 1 and `*`
 * represents element-wise multiplication.
 *
 * ```js
 * const yTrue = tf.tensor2d([[1, 0], [1, 0]]);
 * const yPred = tf.tensor2d([[1 / Math.sqrt(2), 1 / Math.sqrt(2)], [0, 1]]);
 * const proximity = tf.metrics.cosineProximity(yTrue, yPred);
 * proximity.print();
 * ```
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Cosine proximity Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function cosineProximity(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare function cosineWindow(windowLength: number, a: number, b: number): Tensor1D;

export declare type CosInputs = UnaryInputs;

declare function createBufferFromOutputTexture(gl2: WebGL2RenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLBuffer;

declare function createFloat16MatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;

declare function createFloat16PackedMatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;

declare function createFloat32MatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;

declare function createFragmentShader(gl: WebGLRenderingContext, fragmentShaderSource: string): WebGLShader;

declare function createFramebuffer(gl: WebGLRenderingContext): WebGLFramebuffer;

declare function createIndexBuffer(gl: WebGLRenderingContext): WebGLBuffer;

declare function createPackedMatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;

declare function createProgram(gl: WebGLRenderingContext): WebGLProgram;

/**
 * Create typed array for scalar value. Used for storing in `DataStorage`.
 */
declare function createScalarValue(value: DataType, dtype: DataType): BackendValues;

/**
 * Creates a new array with randomized indicies to a given quantity.
 *
 * ```js
 * const randomTen = tf.util.createShuffledIndices(10);
 * console.log(randomTen);
 * ```
 *
 * @param number Quantity of how many shuffled indicies to create.
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function createShuffledIndices(n: number): Uint32Array;

declare function createStaticIndexBuffer(gl: WebGLRenderingContext, data: Uint16Array): WebGLBuffer;

declare function createStaticVertexBuffer(gl: WebGLRenderingContext, data: Float32Array): WebGLBuffer;

declare function createTexture(gl: WebGLRenderingContext): WebGLTexture;

declare function createUnsignedBytesMatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;

declare function createVertexBuffer(gl: WebGLRenderingContext): WebGLBuffer;

declare function createVertexShader(gl: WebGLRenderingContext): WebGLShader;

declare function createVertexShader_2(gl: WebGLRenderingContext, vertexShaderSource: string): WebGLShader;

export declare const CropAndResize = "CropAndResize";

export declare interface CropAndResizeAttrs {
    cropSize: [number, number];
    method: 'bilinear' | 'nearest';
    extrapolationValue: number;
}

export declare type CropAndResizeInputs = Pick<NamedTensorInfoMap, 'image' | 'boxes' | 'boxInd'>;

declare class Cropping2D extends Layer {
    /** @nocollapse */
    static className: string;
    protected readonly cropping: [[number, number], [number, number]];
    protected readonly dataFormat: DataFormat;
    constructor(args: Cropping2DLayerArgs);
    computeOutputShape(inputShape: Shape): Shape;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Cropping layer for 2D input (e.g., image).
 *
 * This layer can crop an input
 * at the top, bottom, left and right side of an image tensor.
 *
 * Input shape:
 *   4D tensor with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, rows, cols, channels]`
 *   - If `data_format` is `"channels_first"`:
 *     `[batch, channels, rows, cols]`.
 *
 * Output shape:
 *   4D with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, croppedRows, croppedCols, channels]`
 *    - If `dataFormat` is `"channelsFirst"`:
 *     `[batch, channels, croppedRows, croppedCols]`.
 *
 * Examples
 * ```js
 *
 * const model = tf.sequential();
 * model.add(tf.layers.cropping2D({cropping:[[2, 2], [2, 2]],
 *                                inputShape: [128, 128, 3]}));
 * //now output shape is [batch, 124, 124, 3]
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function cropping2D(args: Cropping2DLayerArgs): Cropping2D;

declare interface Cropping2DLayerArgs extends LayerArgs {
    /**
     * Dimension of the cropping along the width and the height.
     * - If integer: the same symmetric cropping
     *  is applied to width and height.
     * - If list of 2 integers:
     *   interpreted as two different
     *   symmetric cropping values for height and width:
     *   `[symmetric_height_crop, symmetric_width_crop]`.
     * - If a list of 2 list of 2 integers:
     *   interpreted as
     *   `[[top_crop, bottom_crop], [left_crop, right_crop]]`
     */
    cropping: number | [number, number] | [[number, number], [number, number]];
    /**
     * Format of the data, which determines the ordering of the dimensions in
     * the inputs.
     *
     * `channels_last` corresponds to inputs with shape
     *   `(batch, ..., channels)`
     *
     * `channels_first` corresponds to inputs with shape
     *   `(batch, channels, ...)`
     *
     * Defaults to `channels_last`.
     */
    dataFormat?: DataFormat;
}

/**
 * Create a `CSVDataset` by reading and decoding CSV file(s) from provided URL
 * or local path if it's in Node environment.
 *
 * Note: If isLabel in columnConfigs is `true` for at least one column, the
 * element in returned `CSVDataset` will be an object of
 * `{xs:features, ys:labels}`: xs is a dict of features key/value pairs, ys
 * is a dict of labels key/value pairs. If no column is marked as label,
 * returns a dict of features only.
 *
 * ```js
 * const csvUrl =
 * 'https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv';
 *
 * async function run() {
 *   // We want to predict the column "medv", which represents a median value of
 *   // a home (in $1000s), so we mark it as a label.
 *   const csvDataset = tf.data.csv(
 *     csvUrl, {
 *       columnConfigs: {
 *         medv: {
 *           isLabel: true
 *         }
 *       }
 *     });
 *
 *   // Number of features is the number of column names minus one for the label
 *   // column.
 *   const numOfFeatures = (await csvDataset.columnNames()).length - 1;
 *
 *   // Prepare the Dataset for training.
 *   const flattenedDataset =
 *     csvDataset
 *     .map(({xs, ys}) =>
 *       {
 *         // Convert xs(features) and ys(labels) from object form (keyed by
 *         // column name) to array form.
 *         return {xs:Object.values(xs), ys:Object.values(ys)};
 *       })
 *     .batch(10);
 *
 *   // Define the model.
 *   const model = tf.sequential();
 *   model.add(tf.layers.dense({
 *     inputShape: [numOfFeatures],
 *     units: 1
 *   }));
 *   model.compile({
 *     optimizer: tf.train.sgd(0.000001),
 *     loss: 'meanSquaredError'
 *   });
 *
 *   // Fit the model using the prepared Dataset
 *   return model.fitDataset(flattenedDataset, {
 *     epochs: 10,
 *     callbacks: {
 *       onEpochEnd: async (epoch, logs) => {
 *         console.log(epoch + ':' + logs.loss);
 *       }
 *     }
 *   });
 * }
 *
 * await run();
 * ```
 *
 * @param source URL or local path to get CSV file. If it's a local path, it
 * must have prefix `file://` and it only works in node environment.
 * @param csvConfig (Optional) A CSVConfig object that contains configurations
 *     of reading and decoding from CSV file(s).
 *
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   configParamIndices: [1]
 *  }
 */
declare function csv(source: RequestInfo, csvConfig?: CSVConfig): CSVDataset;

/**
 * Interface for configuring dataset when reading and decoding from CSV file(s).
 */
declare interface CSVConfig {
    /**
     * A boolean value that indicates whether the first row of provided CSV file
     * is a header line with column names, and should not be included in the data.
     */
    hasHeader?: boolean;
    /**
     * A list of strings that corresponds to the CSV column names, in order. If
     * provided, it ignores the column names inferred from the header row. If not
     * provided, infers the column names from the first row of the records. If
     * `hasHeader` is false and `columnNames` is not provided, this method will
     * throw an error.
     */
    columnNames?: string[];
    /**
     * A dictionary whose key is column names, value is an object stating if this
     * column is required, column's data type, default value, and if this column
     * is label. If provided, keys must correspond to names provided in
     * `columnNames` or inferred from the file header lines. If any column is
     * marked as label, the .csv() API will return an array of two items: the
     * first item is a dict of features key/value pairs, the second item is a dict
     * of labels key/value pairs. If no column is marked as label returns a dict
     * of features only.
     *
     * Has the following fields:
     * - `required` If value in this column is required. If set to `true`, throw
     * an error when it finds an empty value.
     *
     * - `dtype` Data type of this column. Could be int32, float32, bool, or
     * string.
     *
     * - `default` Default value of this column.
     *
     * - `isLabel` Whether this column is label instead of features. If isLabel is
     * `true` for at least one column, the element in returned `CSVDataset` will
     * be an object of {xs: features, ys: labels}: xs is a dict of features
     * key/value pairs, ys is a dict of labels key/value pairs. If no column is
     * marked as label, returns a dict of features only.
     */
    columnConfigs?: {
        [key: string]: ColumnConfig;
    };
    /**
     * If true, only columns provided in `columnConfigs` will be parsed and
     * provided during iteration.
     */
    configuredColumnsOnly?: boolean;
    /**
     * The string used to parse each line of the input file.
     */
    delimiter?: string;
    /**
     * If true, delimiter field should be null. Parsing delimiter is whitespace
     * and treat continuous multiple whitespace as one delimiter.
     */
    delimWhitespace?: boolean;
}

/**
 * Represents a potentially large collection of delimited text records.
 *
 * The produced `TensorContainer`s each contain one key-value pair for
 * every column of the table.  When a field is empty in the incoming data, the
 * resulting value is `undefined`, or throw error if it is required.  Values
 * that can be parsed as numbers are emitted as type `number`, other values
 * are parsed as `string`.
 *
 * The results are not batched.
 *
 * @doc {heading: 'Data', subheading: 'Classes', namespace: 'data'}
 */
declare class CSVDataset extends Dataset<TensorContainer_2> {
    protected readonly input: DataSource;
    base: TextLineDataset;
    private hasHeader;
    private fullColumnNames;
    private columnNamesValidated;
    private columnConfigs;
    private configuredColumnsOnly;
    private delimiter;
    private delimWhitespace;
    /**
     * Returns column names of the csv dataset. If `configuredColumnsOnly` is
     * true, return column names in `columnConfigs`. If `configuredColumnsOnly` is
     * false and `columnNames` is provided, `columnNames`. If
     * `configuredColumnsOnly` is false and `columnNames` is not provided, return
     * all column names parsed from the csv file. For example usage please go to
     * `tf.data.csv`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    columnNames(): Promise<string[]>;
    private setColumnNames;
    private maybeReadHeaderLine;
    /**
     * Create a `CSVDataset`.
     *
     * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
     * @param csvConfig (Optional) A CSVConfig object that contains configurations
     *     of reading and decoding from CSV file(s).
     *
     *     hasHeader: (Optional) A boolean value that indicates whether the first
     *     row of provided CSV file is a header line with column names, and should
     *     not be included in the data. Defaults to `true`.
     *
     *     columnNames: (Optional) A list of strings that corresponds to
     *     the CSV column names, in order. If provided, it ignores the column
     *     names inferred from the header row. If not provided, infers the column
     *     names from the first row of the records. If hasHeader is false and
     *     columnNames is not provided, this method throws an error.
     *
     *     columnConfigs: (Optional) A dictionary whose key is column names, value
     *     is an object stating if this column is required, column's data type,
     *     default value, and if this column is label. If provided, keys must
     *     correspond to names provided in columnNames or inferred from the file
     *     header lines. If isLabel is true any column, returns an array of two
     *     items: the first item is a dict of features key/value pairs, the second
     *     item is a dict of labels key/value pairs. If no feature is marked as
     *     label, returns a dict of features only.
     *
     *     configuredColumnsOnly (Optional) If true, only columns provided in
     *     columnConfigs will be parsed and provided during iteration.
     *
     *     delimiter (Optional) The string used to parse each line of the input
     *     file. Defaults to `,`.
     */
    constructor(input: DataSource, csvConfig?: CSVConfig);
    iterator(): Promise<LazyIterator<TensorContainer_2>>;
    makeDataElement(line: string): TensorContainer_2;
    private getBoolean;
    private parseRow;
}

export declare const Cumsum = "Cumsum";

export declare const cumsum: typeof cumsum_;

/**
 * Computes the cumulative sum of a `tf.Tensor` along `axis`.
 *
 * ```js
 * const x = tf.tensor([1, 2, 3, 4]);
 * x.cumsum().print();
 * ```
 * ```js
 * const x = tf.tensor([[1, 2], [3, 4]]);
 * x.cumsum().print();
 * ```
 *
 * @param x The input tensor to be summed.
 * @param axis The axis along which to sum. Optional. Defaults to 0.
 * @param exclusive Whether to perform exclusive cumulative sum. Optional.
 *     Defaults to false. If set to true then the sum of each tensor entry
 *     does not include its own value, but only the values previous to it
 *     along the specified axis.
 * @param reverse Whether to sum in the opposite direction. Optional.
 *     Defaults to false.
 *
 * @doc {heading: 'Operations', subheading: 'Scan'}
 */
declare function cumsum_<T extends Tensor>(x: Tensor | TensorLike, axis?: number, exclusive?: boolean, reverse?: boolean): T;

export declare interface CumsumAttrs {
    axis: number;
    exclusive: boolean;
    reverse: boolean;
}

export declare type CumsumInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Custom callback for training.
 */
export declare class CustomCallback extends BaseCallback {
    protected readonly trainBegin: (logs?: Logs) => void | Promise<void>;
    protected readonly trainEnd: (logs?: Logs) => void | Promise<void>;
    protected readonly epochBegin: (epoch: number, logs?: Logs) => void | Promise<void>;
    protected readonly epochEnd: (epoch: number, logs?: Logs) => void | Promise<void>;
    protected readonly batchBegin: (batch: number, logs?: Logs) => void | Promise<void>;
    protected readonly batchEnd: (batch: number, logs?: Logs) => void | Promise<void>;
    protected readonly yield: (epoch: number, batch: number, logs: Logs) => void | Promise<void>;
    private yieldEvery;
    private currentEpoch;
    nowFunc: Function;
    nextFrameFunc: Function;
    constructor(args: CustomCallbackArgs, yieldEvery?: YieldEveryOptions);
    maybeWait(epoch: number, batch: number, logs: UnresolvedLogs): Promise<void>;
    onEpochBegin(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    onEpochEnd(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    onBatchBegin(batch: number, logs?: UnresolvedLogs): Promise<void>;
    onBatchEnd(batch: number, logs?: UnresolvedLogs): Promise<void>;
    onTrainBegin(logs?: UnresolvedLogs): Promise<void>;
    onTrainEnd(logs?: UnresolvedLogs): Promise<void>;
}

export declare interface CustomCallbackArgs {
    onTrainBegin?: (logs?: Logs) => void | Promise<void>;
    onTrainEnd?: (logs?: Logs) => void | Promise<void>;
    onEpochBegin?: (epoch: number, logs?: Logs) => void | Promise<void>;
    onEpochEnd?: (epoch: number, logs?: Logs) => void | Promise<void>;
    onBatchBegin?: (batch: number, logs?: Logs) => void | Promise<void>;
    onBatchEnd?: (batch: number, logs?: Logs) => void | Promise<void>;
    onYield?: (epoch: number, batch: number, logs: Logs) => void | Promise<void>;
    nowFunc?: Function;
    nextFrameFunc?: Function;
}

/**
 * Overrides the gradient computation of a function `f`.
 *
 * Takes a function
 * `f(...inputs, save) => {value: Tensor, gradFunc: (dy, saved) => Tensor[]}`
 * and returns another function `g(...inputs)` which takes the same inputs as
 * `f`. When called, `g` returns `f().value`. In backward mode, custom gradients
 * with respect to each input of `f` are computed using `f().gradFunc`.
 *
 * The `save` function passsed to `f` should be used for saving tensors needed
 * in the gradient. And the `saved` passed to the `gradFunc` is a
 * `NamedTensorMap`, which contains those saved tensor.
 *
 * ```js
 * const customOp = tf.customGrad((x, save) => {
 *   // Save x to make sure it's available later for the gradient.
 *   save([x]);
 *   // Override gradient of our custom x ^ 2 op to be dy * abs(x);
 *   return {
 *     value: x.square(),
 *     // Note `saved.x` which points to the `x` we saved earlier.
 *     gradFunc: (dy, saved) => [dy.mul(saved[0].abs())]
 *   };
 * });
 *
 * const x = tf.tensor1d([-1, -2, 3]);
 * const dx = tf.grad(x => customOp(x));
 *
 * console.log(`f(x):`);
 * customOp(x).print();
 * console.log(`f'(x):`);
 * dx(x).print();
 * ```
 *
 * @param f The function to evaluate in forward mode, which should return
 *     `{value: Tensor, gradFunc: (dy, saved) => Tensor[]}`, where `gradFunc`
 *     returns the custom gradients of `f` with respect to its inputs.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
export declare function customGrad<T extends Tensor>(f: CustomGradientFunc<T>): (...args: Tensor[]) => T;

/**
 * @docalias (a: Tensor, b: Tensor,..., save?: Function) => {
 *   value: Tensor,
 *   gradFunc: (dy: Tensor, saved?: NamedTensorMap) => Tensor | Tensor[]
 * }
 */
declare type CustomGradientFunc<T extends Tensor> = (...inputs: Array<Tensor | GradSaveFunc>) => {
    value: T;
    gradFunc: (dy: T, saved: Tensor[]) => Tensor | Tensor[];
};

declare namespace data {
    export {
        array,
        Dataset,
        zip,
        CSVDataset,
        TextLineDataset,
        csv,
        func,
        generator,
        microphone,
        webcam,
        FileDataSource,
        URLDataSource,
        ColumnConfig,
        MicrophoneConfig,
        WebcamConfig,
        version_2 as version_data
    }
}
export { data }

/** @docinline */
declare type DataFormat = 'channelsFirst' | 'channelsLast';

export declare type DataId = object;

/**
 * We wrap data id since we use weak map to avoid memory leaks.
 * Since we have our own memory management, we have a reference counter
 * mapping a tensor to its data, so there is always a pointer (even if that
 * data is otherwise garbage collectable).
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
 * Global_Objects/WeakMap
 */
declare type DataId_2 = object;

declare interface DataId_3 {
}

export declare interface DataMover {
    /**
     * To be called by backends whenever they see a dataId that they don't own.
     * Upon calling this method, the mover will fetch the tensor from another
     * backend and register it with the current active backend.
     */
    moveData(backend: KernelBackend, dataId: DataId_2): void;
}

/**
 * Represents a potentially large list of independent data elements (typically
 * 'samples' or 'examples').
 *
 * A 'data example' may be a primitive, an array, a map from string keys to
 * values, or any nested structure of these.
 *
 * A `Dataset` represents an ordered collection of elements, together with a
 * chain of transformations to be performed on those elements. Each
 * transformation is a method of `Dataset` that returns another `Dataset`, so
 * these may be chained, e.g.
 * `const processedDataset = rawDataset.filter(...).map(...).batch(...)`.
 *
 * Data loading and transformation is done in a lazy, streaming fashion.  The
 * dataset may be iterated over multiple times; each iteration starts the data
 * loading anew and recapitulates the transformations.
 *
 * A `Dataset` is typically processed as a stream of unbatched examples --i.e.,
 * its transformations are applied one example at a time. Batching produces a
 * new `Dataset` where each element is a batch. Batching should usually come
 * last in a pipeline, because data transformations are easier to express on a
 * per-example basis than on a per-batch basis.
 *
 * The following code examples are calling `await dataset.forEachAsync(...)` to
 * iterate once over the entire dataset in order to print out the data.
 *
 * @doc {heading: 'Data', subheading: 'Classes', namespace: 'data'}
 */
declare abstract class Dataset<T extends tf.TensorContainer> {
    abstract iterator(): Promise<LazyIterator<T>>;
    readonly size: number;
    /**
     * Groups elements into batches.
     *
     * It is assumed that each of the incoming dataset elements has the same
     * structure-- i.e. the same set of keys at each location in an object
     * hierarchy.  For each key, the resulting `Dataset` provides a batched
     * element collecting all of the incoming values for that key.
     *
     *  * Incoming primitives are grouped into a 1-D Tensor.
     *  * Incoming Tensors are grouped into a new Tensor where the 0'th axis is
     *    the batch dimension.
     *  * Incoming arrays are converted to Tensor and then batched.
     *  * A nested array is interpreted as an n-D Tensor, so the batched result
     *    has n+1 dimensions.
     *  * An array that cannot be converted to Tensor produces an error.
     *
     * If an array should not be batched as a unit, it should first be converted
     * to an object with integer keys.
     *
     * Here are a few examples:
     *
     * Batch a dataset of numbers:
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8]).batch(4);
     * await a.forEachAsync(e => e.print());
     * ```
     *
     * Batch a dataset of arrays:
     * ```js
     * const b = tf.data.array([[1], [2], [3], [4], [5], [6], [7], [8]]).batch(4);
     * await b.forEachAsync(e => e.print());
     * ```
     *
     * Batch a dataset of objects:
     * ```js
     * const c = tf.data.array([{a: 1, b: 11}, {a: 2, b: 12}, {a: 3, b: 13},
     *   {a: 4, b: 14}, {a: 5, b: 15}, {a: 6, b: 16}, {a: 7, b: 17},
     *   {a: 8, b: 18}]).batch(4);
     * await c.forEachAsync(e => {
     *   console.log('{');
     *   for(var key in e) {
     *     console.log(key+':');
     *     e[key].print();
     *   }
     *   console.log('}');
     * })
     * ```
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @returns A `Dataset`, from which a stream of batches can be obtained.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    batch(batchSize: number, smallLastBatch?: boolean): Dataset<tf.TensorContainer>;
    /**
     * Concatenates this `Dataset` with another.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]);
     * const b = tf.data.array([4, 5, 6]);
     * const c = a.concatenate(b);
     * await c.forEachAsync(e => console.log(e));
     * ```
     *
     * @param dataset A `Dataset` to be concatenated onto this one.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    concatenate(dataset: Dataset<T>): Dataset<T>;
    /**
     * Filters this dataset according to `predicate`.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
     *   .filter(x => x%2 === 0);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param predicate A function mapping a dataset element to a boolean or a
     * `Promise` for one.
     *
     * @returns A `Dataset` of elements for which the predicate was true.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    filter(predicate: (value: T) => boolean): Dataset<T>;
    /**
     * Apply a function to every element of the dataset.
     *
     * After the function is applied to a dataset element, any Tensors contained
     * within that element are disposed.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param f A function to apply to each dataset element.
     * @returns A `Promise` that resolves after all elements have been processed.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    forEachAsync(f: (input: T) => void): Promise<void>;
    /**
     * Maps this dataset through a 1-to-1 transform.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).map(x => x*x);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param transform A function mapping a dataset element to a transformed
     *   dataset element.
     *
     * @returns A `Dataset` of transformed elements.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    map<O extends tf.TensorContainer>(transform: (value: T) => O): Dataset<O>;
    /**
     * Maps this dataset through an async 1-to-1 transform.
     *
     * ```js
     * const a =
     *  tf.data.array([1, 2, 3]).mapAsync(x => new Promise(function(resolve){
     *    setTimeout(() => {
     *      resolve(x * x);
     *    }, Math.random()*1000 + 500);
     *  }));
     * console.log(await a.toArray());
     * ```
     *
     * @param transform A function mapping a dataset element to a `Promise` for a
     *   transformed dataset element.  This transform is responsible for disposing
     *   any intermediate `Tensor`s, i.e. by wrapping its computation in
     *   `tf.tidy()`; that cannot be automated here (as it is in the synchronous
     *   `map()` case).
     *
     * @returns A `Dataset` of transformed elements.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    mapAsync<O extends tf.TensorContainer>(transform: (value: T) => Promise<O>): Dataset<O>;
    /**
     *  Creates a `Dataset` that prefetches elements from this dataset.
     *
     * @param bufferSize: An integer specifying the number of elements to be
     *   prefetched.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    prefetch(bufferSize: number): Dataset<T>;
    /**
     * Repeats this dataset `count` times.
     *
     * NOTE: If this dataset is a function of global state (e.g. a random number
     * generator), then different repetitions may produce different elements.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).repeat(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: (Optional) An integer, representing the number of times
     *   the dataset should be repeated. The default behavior (if `count` is
     *   `undefined` or negative) is for the dataset be repeated indefinitely.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    repeat(count?: number): Dataset<T>;
    /**
     * Creates a `Dataset` that skips `count` initial elements from this dataset.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).skip(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: The number of elements of this dataset that should be skipped
     *   to form the new dataset.  If `count` is greater than the size of this
     *   dataset, the new dataset will contain no elements.  If `count`
     *   is `undefined` or negative, skips the entire dataset.
     *
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    skip(count: number): Dataset<T>;
    static readonly MAX_BUFFER_SIZE = 10000;
    /**
     * Pseudorandomly shuffles the elements of this dataset. This is done in a
     * streaming manner, by sampling from a given number of prefetched elements.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).shuffle(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param bufferSize: An integer specifying the number of elements from this
     *   dataset from which the new dataset will sample.
     * @param seed: (Optional) An integer specifying the random seed that will
     *   be used to create the distribution.
     * @param reshuffleEachIteration: (Optional) A boolean, which if true
     *   indicates that the dataset should be pseudorandomly reshuffled each time
     *   it is iterated over. If false, elements will be returned in the same
     *   shuffled order on each iteration. (Defaults to `true`.)
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    shuffle(bufferSize: number, seed?: string, reshuffleEachIteration?: boolean): Dataset<T>;
    /**
     * Creates a `Dataset` with at most `count` initial elements from this
     * dataset.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).take(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: The number of elements of this dataset that should be taken
     *   to form the new dataset.  If `count` is `undefined` or negative, or if
     *   `count` is greater than the size of this dataset, the new dataset will
     *   contain all elements of this dataset.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    take(count: number): Dataset<T>;
    /**
     * Collect all elements of this dataset into an array.
     *
     * Obviously this will succeed only for small datasets that fit in memory.
     * Useful for testing and generally should be avoided if possible.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]);
     * console.log(await a.toArray());
     * ```
     *
     * @returns A Promise for an array of elements, which will resolve
     *   when a new stream has been obtained and fully consumed.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */
    toArray(): Promise<T[]>;
    /**
     * Collect all elements of this dataset into an array with prefetching 100
     * elements. This is useful for testing, because the prefetch changes the
     * order in which the Promises are resolved along the processing pipeline.
     * This may help expose bugs where results are dependent on the order of
     * Promise resolution rather than on the logical order of the stream (i.e.,
     * due to hidden mutable state).
     *
     * @returns A Promise for an array of elements, which will resolve
     *   when a new stream has been obtained and fully consumed.
     */
    toArrayForTest(): Promise<T[]>;
}

declare abstract class Dataset_2<T> {
    abstract iterator(): Promise<LazyIterator_2<T>>;
    size: number;
}

/**
 * A nested structure of Datasets, used as the input to zip().
 */
declare type DatasetContainer = Container<Dataset<TensorContainer_2>>;

/**
 * Represents a data source readable as a stream of binary data chunks.
 *
 * Because `Dataset`s can be read repeatedly (via `Dataset.iterator()`), this
 * provides a means to repeatedly create streams from the underlying data
 * sources.
 */
declare abstract class DataSource {
    /**
     * Obtain a new stream of binary data chunks.
     *
     * Starts the new stream from the beginning of the data source, even if other
     * streams have been obtained previously.
     */
    abstract iterator(): Promise<ByteChunkIterator>;
}

/** Convenient class for storing tensor-related data. */
export declare class DataStorage<T> {
    private backend;
    private dataMover;
    private data;
    private dataIdsCount;
    constructor(backend: KernelBackend, dataMover: DataMover);
    get(dataId: DataId_2): T;
    set(dataId: DataId_2, value: T): void;
    has(dataId: DataId_2): boolean;
    delete(dataId: DataId_2): boolean;
    numDataIds(): number;
}

/** @docalias 'float32'|'int32'|'bool'|'complex64'|'string' */
export declare type DataType = keyof DataTypeMap;

export declare interface DataTypeMap {
    float32: Float32Array;
    int32: Int32Array;
    bool: Uint8Array;
    complex64: Float32Array;
    string: string[];
}

/** Tensor data used in tensor creation and user-facing API. */
export declare type DataValues = DataTypeMap[DataType];

/**
 * Parse an equation for einsum.
 *
 * @param equation The einsum equation (e.g., "ij,jk->ik").
 * @param numTensors Number of tensors provided along with `equation`. Used to
 *   check matching number of input tensors.
 * @returns An object consisting of the following fields:
 *   - allDims: all dimension names as strings.
 *   - summedDims: a list of all dimensions being summed over, as indices to
 *     the elements of `allDims`.
 *   - idDims: indices of the dimensions in each input tensor, as indices to
 *     the elements of `allDims.
 */
declare function decodeEinsumEquation(equation: string, numTensors: number): {
    allDims: string[];
    summedDims: number[];
    idDims: number[][];
};

/**
 * Decodes the provided bytes into a string using the provided encoding scheme.
 * @param bytes The bytes to decode.
 *
 * @param encoding The encoding scheme. Defaults to utf-8.
 *
 * @doc {heading: 'Util'}
 */
declare function decodeString(bytes: Uint8Array, encoding?: string): string;

/**
 * Decode flat ArrayBuffer as weights.
 *
 * This function does not handle sharding.
 *
 * This function is the reverse of `encodeWeights`.
 *
 * @param buffer A flat ArrayBuffer carrying the binary values of the tensors
 *   concatenated in the order specified in `specs`.
 * @param specs Specifications of the names, dtypes and shapes of the tensors
 *   whose value are encoded by `buffer`.
 * @return A map from tensor name to tensor value, with the names corresponding
 *   to names in `specs`.
 * @throws Error, if any of the tensors has unsupported dtype.
 */
declare function decodeWeights(buffer: ArrayBuffer, specs: WeightsManifestEntry[]): NamedTensorMap;

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
/**
 * A return value for a mapping function that can be applied via deepMap.
 *
 * If recurse is true, the value should be empty, and iteration will continue
 * into the object or array.
 */
declare type DeepMapResult = {
    value: any;
    recurse: boolean;
};

declare class Dense extends Layer {
    /** @nocollapse */
    static className: string;
    private units;
    private activation;
    private useBias;
    private kernelInitializer;
    private biasInitializer;
    private kernel;
    private bias;
    readonly DEFAULT_KERNEL_INITIALIZER: InitializerIdentifier;
    readonly DEFAULT_BIAS_INITIALIZER: InitializerIdentifier;
    private readonly kernelConstraint?;
    private readonly biasConstraint?;
    private readonly kernelRegularizer?;
    private readonly biasRegularizer?;
    constructor(args: DenseLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Creates a dense (fully connected) layer.
 *
 * This layer implements the operation:
 *   `output = activation(dot(input, kernel) + bias)`
 *
 * `activation` is the element-wise activation function
 *   passed as the `activation` argument.
 *
 * `kernel` is a weights matrix created by the layer.
 *
 * `bias` is a bias vector created by the layer (only applicable if `useBias`
 * is `true`).
 *
 * **Input shape:**
 *
 *   nD `tf.Tensor` with shape: `(batchSize, ..., inputDim)`.
 *
 *   The most common situation would be
 *   a 2D input with shape `(batchSize, inputDim)`.
 *
 * **Output shape:**
 *
 *   nD tensor with shape: `(batchSize, ..., units)`.
 *
 *   For instance, for a 2D input with shape `(batchSize, inputDim)`,
 *   the output would have shape `(batchSize, units)`.
 *
 * Note: if the input to the layer has a rank greater than 2, then it is
 * flattened prior to the initial dot product with the kernel.
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function dense(args: DenseLayerArgs): Dense;

export declare const DenseBincount = "DenseBincount";

export declare const denseBincount: typeof denseBincount_;

/**
 * Outputs a vector with length `size` and the same dtype as `weights`.
 *
 * If `weights` are empty, then index `i` stores the number of times the value
 * `i` is counted in `x`. If `weights` are non-empty, then index `i` stores the
 * sum of the value in `weights` at each index where the corresponding value in
 * `x` is `i`.
 *
 * Values in `x` outside of the range [0, size) are ignored.
 *
 * @param x The input int tensor, rank 1 or rank 2.
 * @param weights The weights tensor, must have the same shape as x, or a
 *     length-0 Tensor, in which case it acts as all weights equal to 1.
 * @param size Non-negative integer.
 * @param binaryOutput Optional. Whether the kernel should count the appearance
 *     or number of occurrences. Defaults to False.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function denseBincount_<T extends Tensor1D | Tensor2D>(x: T | TensorLike, weights: T | TensorLike, size: number, binaryOutput?: boolean): T;

export declare interface DenseBincountAttrs {
    size: number;
    binaryOutput?: boolean;
}

export declare type DenseBincountInputs = Pick<NamedTensorInfoMap, 'x' | 'weights'>;

declare interface DenseLayerArgs extends LayerArgs {
    /** Positive integer, dimensionality of the output space. */
    units: number;
    /**
     * Activation function to use.
     *
     * If unspecified, no activation is applied.
     */
    activation?: ActivationIdentifier;
    /** Whether to apply a bias. */
    useBias?: boolean;
    /**
     * Initializer for the dense kernel weights matrix.
     */
    kernelInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the bias vector.
     */
    biasInitializer?: InitializerIdentifier | Initializer;
    /**
     * If specified, defines inputShape as `[inputDim]`.
     */
    inputDim?: number;
    /**
     * Constraint for the kernel weights.
     */
    kernelConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint for the bias vector.
     */
    biasConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Regularizer function applied to the dense kernel weights matrix.
     */
    kernelRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the bias vector.
     */
    biasRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the activation.
     */
    activityRegularizer?: RegularizerIdentifier | Regularizer;
}

/** Warn users about deprecated functionality. */
export declare function deprecationWarn(msg: string): void;

export declare const DepthToSpace = "DepthToSpace";

export declare const depthToSpace: typeof depthToSpace_;

/**
 * Rearranges data from depth into blocks of spatial data. More specifically,
 * this op outputs a copy of the input tensor where values from the `depth`
 * dimension are moved in spatial blocks to the `height` and `width` dimensions.
 * The attr `blockSize` indicates the input block size and how the data is
 * moved.
 *
 *  - Chunks of data of size `blockSize * blockSize` from depth are rearranged
 * into non-overlapping blocks of size `blockSize x blockSize`
 *
 *  - The width the output tensor is `inputWidth * blockSize`, whereas the
 * height is `inputHeight * blockSize`
 *
 *  - The Y, X coordinates within each block of the output image are determined
 * by the high order component of the input channel index
 *
 *  - The depth of the input tensor must be divisible by `blockSize *
 * blockSize`
 *
 * The `dataFormat` attr specifies the layout of the input and output tensors
 * with the following options: "NHWC": [ `batch, height, width, channels` ]
 * "NCHW": [ `batch, channels, height, width` ]
 *
 * ```js
 * const x = tf.tensor4d([1, 2, 3, 4], [1, 1, 1, 4]);
 * const blockSize = 2;
 * const dataFormat = "NHWC";
 *
 * tf.depthToSpace(x, blockSize, dataFormat).print();
 * ```
 *
 * @param x The input tensor of rank 4
 * @param blockSIze  An `int` that is `>= 2`. The size of the spatial block
 * @param dataFormat An optional string from: "NHWC", "NCHW". Defaults to "NHWC"
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function depthToSpace_(x: Tensor4D | TensorLike4D, blockSize: number, dataFormat?: 'NHWC' | 'NCHW'): Tensor4D;

export declare interface DepthToSpaceAttrs {
    blockSize: number;
    dataFormat: 'NHWC' | 'NCHW';
}

export declare type DepthToSpaceInputs = Pick<NamedTensorInfoMap, 'x'>;

declare class DepthwiseConv2D extends BaseConv {
    /** @nocollapse */
    static className: string;
    private readonly depthMultiplier;
    private readonly depthwiseInitializer;
    private readonly depthwiseConstraint;
    private readonly depthwiseRegularizer;
    private depthwiseKernel;
    constructor(args: DepthwiseConv2DLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

export declare const depthwiseConv2d: typeof depthwiseConv2d_;

/**
 * Depthwise 2D convolution.
 *
 * Given a 4D `input` array and a `filter` array of shape
 * `[filterHeight, filterWidth, inChannels, channelMultiplier]` containing
 * `inChannels` convolutional filters of depth 1, this op applies a
 * different filter to each input channel (expanding from 1 channel to
 * `channelMultiplier` channels for each), then concatenates the results
 * together. The output has `inChannels * channelMultiplier` channels.
 *
 * See
 * [https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d](
 *     https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d)
 * for more details.
 *
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter tensor, rank 4, of shape
 *     `[filterHeight, filterWidth, inChannels, channelMultiplier]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`. If strides is a single number, then `strideHeight ==
 * strideWidth`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `rate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function depthwiseConv2d_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, filter: Tensor4D | TensorLike, strides: [number, number] | number, pad: 'valid' | 'same' | number | ExplicitPadding, dataFormat?: 'NHWC' | 'NCHW', dilations?: [number, number] | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;

declare const depthwiseConv2d_2: typeof fusedDepthwiseConv2d_;

/**
 * Depthwise separable 2D convolution.
 *
 * Depthwise Separable convolutions consists in performing just the first step
 * in a depthwise spatial convolution (which acts on each input channel
 * separately). The `depthMultplier` argument controls how many output channels
 * are generated per input channel in the depthwise step.
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function depthwiseConv2d_3(args: DepthwiseConv2DLayerArgs): DepthwiseConv2D;

declare interface DepthwiseConv2DLayerArgs extends BaseConvLayerArgs {
    /**
     * An integer or Array of 2 integers, specifying the width and height of the
     * 2D convolution window. Can be a single integer to specify the same value
     * for all spatial dimensions.
     */
    kernelSize: number | [number, number];
    /**
     * The number of depthwise convolution output channels for each input
     * channel.
     * The total number of depthwise convolution output channels will be equal to
     * `filtersIn * depthMultiplier`.
     * Default: 1.
     */
    depthMultiplier?: number;
    /**
     * Initializer for the depthwise kernel matrix.
     * Default: GlorotNormal.
     */
    depthwiseInitializer?: InitializerIdentifier | Initializer;
    /**
     * Constraint for the depthwise kernel matrix.
     */
    depthwiseConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Regulzarizer function for the depthwise kernel matrix.
     */
    depthwiseRegularizer?: RegularizerIdentifier | Regularizer;
}

export declare const DepthwiseConv2dNative = "DepthwiseConv2dNative";

export declare interface DepthwiseConv2dNativeAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dataFormat: 'NHWC' | 'NCHW';
    dilations: [number, number] | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare const DepthwiseConv2dNativeBackpropFilter = "DepthwiseConv2dNativeBackpropFilter";

export declare interface DepthwiseConv2dNativeBackpropFilterAttrs {
    strides: [number, number] | number;
    dilations: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    filterShape: [number, number, number, number];
}

export declare type DepthwiseConv2dNativeBackpropFilterInputs = Pick<NamedTensorInfoMap, 'x' | 'dy'>;

export declare const DepthwiseConv2dNativeBackpropInput = "DepthwiseConv2dNativeBackpropInput";

export declare interface DepthwiseConv2dNativeBackpropInputAttrs {
    strides: [number, number] | number;
    dilations: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    inputShape: [number, number, number, number];
}

export declare type DepthwiseConv2dNativeBackpropInputInputs = Pick<NamedTensorInfoMap, 'dy' | 'filter'>;

export declare type DepthwiseConv2dNativeInputs = Pick<NamedTensorInfoMap, 'x' | 'filter'>;

/**
 * Deregister the Op for graph model executor.
 *
 * @param name The Tensorflow Op name.
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */
export declare function deregisterOp(name: string): void;

declare namespace device_util {
    export {
        mockIsMobile,
        isMobile,
        isBrowser
    }
}
export { device_util }

export declare const Diag = "Diag";

export declare const diag: typeof diag_;

/**
 * Returns a diagonal tensor with a given diagonal values.
 *
 * Given a diagonal, this operation returns a tensor with the diagonal and
 * everything else padded with zeros.
 *
 * Assume the input has dimensions `[D1,..., Dk]`, then the output is a tensor
 * of rank 2k with dimensions `[D1,..., Dk, D1,..., Dk]`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * tf.diag(x).print()
 * ```
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 6, 8], [4, 2])
 *
 * tf.diag(x).print()
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function diag_(x: Tensor): Tensor;

export declare type DiagInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const Dilation2D = "Dilation2D";

export declare const dilation2d: typeof dilation2d_;

/**
 * Computes the grayscale dilation over the input `x`.
 *
 * @param x The input tensor, rank 3 or rank 4 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filter The filter tensor, rank 3, of shape
 *     `[filterHeight, filterWidth, depth]`.
 * @param strides The strides of the sliding window for each dimension of the
 *     input tensor: `[strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat Specify the data format of the input and output data.
 *      Defaults to 'NHWC'. Only 'NHWC' is currently supported. With the
 *      default format "NHWC", the data is stored in the order of: [batch,
 *      height, width, channels].
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     for atrous morphological dilation. Defaults to `[1, 1]`. If `dilations`
 *     is a single number, then `dilationHeight == dilationWidth`. If it is
 *     greater than 1, then all values of `strides` must be 1.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function dilation2d_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, filter: Tensor3D | TensorLike, strides: [number, number] | number, pad: 'valid' | 'same', dilations?: [number, number] | number, dataFormat?: 'NHWC'): T;

export declare interface Dilation2DAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number;
    dilations: [number, number] | number;
}

export declare const Dilation2DBackpropFilter = "Dilation2DBackpropFilter";

export declare type Dilation2DBackpropFilterInputs = Pick<NamedTensorInfoMap, 'x' | 'filter' | 'dy'>;

export declare const Dilation2DBackpropInput = "Dilation2DBackpropInput";

export declare type Dilation2DBackpropInputInputs = Pick<NamedTensorInfoMap, 'x' | 'filter' | 'dy'>;

export declare type Dilation2DInputs = Pick<NamedTensorInfoMap, 'x' | 'filter'>;

/** Globally disables deprecation warnings */
export declare function disableDeprecationWarnings(): void;

/**
 * Disposes any `tf.Tensor`s found within the provided object.
 *
 * @param container an object that may be a `tf.Tensor` or may directly
 *     contain `tf.Tensor`s, such as a `Tensor[]` or `{key: Tensor, ...}`. If
 *     the object is not a `tf.Tensor` or does not contain `Tensors`, nothing
 *     happens. In general it is safe to pass any object here, except that
 *     `Promise`s are not supported.
 *
 * @doc {heading: 'Performance', subheading: 'Memory'}
 */
export declare function dispose(container: TensorContainer): void;

/**
 * The type of the return value of Layer.dispose() and Container.dispose().
 */
declare interface DisposeResult {
    /**
     * Reference count after the dispose call.
     */
    refCountAfterDispose: number;
    /**
     * Number of variables dispose in this dispose call.
     */
    numDisposedVariables: number;
}

/**
 * Dispose all variables kept in backend engine.
 *
 * @doc {heading: 'Environment'}
 */
export declare function disposeVariables(): void;

/** @docinline */
declare type Distribution = 'normal' | 'uniform' | 'truncatedNormal';

/** Returns the squared Euclidean distance between two vectors. */
declare function distSquared(a: FlatVector, b: FlatVector): number;

export declare const div: typeof div_;

/**
 * Divides two `tf.Tensor`s element-wise, A / B. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 9, 16]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 *
 * a.div(b).print();  // or tf.div(a, b)
 * ```
 *
 * ```js
 * // Broadcast div a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(2);
 *
 * a.div(b).print();  // or tf.div(a, b)
 * ```
 *
 * @param a The first tensor as the numerator.
 * @param b The second tensor as the denominator. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function div_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare const divNoNan: typeof divNoNan_;

/**
 * Divides two `tf.Tensor`s element-wise, A / B. Supports broadcasting. Return 0
 * if denominator is 0.
 *
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 9, 16]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 * const c = tf.tensor1d([0, 0, 0, 0]);
 *
 * a.divNoNan(b).print();  // or tf.divNoNan(a, b)
 * a.divNoNan(c).print();  // or tf.divNoNan(a, c)
 * ```
 *
 * ```js
 * // Broadcast div a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(2);
 * const c = tf.scalar(0);
 *
 * a.divNoNan(b).print();  // or tf.divNoNan(a, b)
 * a.divNoNan(c).print();  // or tf.divNoNan(a, c)
 * ```
 *
 * @param a The first tensor as the numerator.
 * @param b The second tensor as the denominator. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function divNoNan_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare interface DoneFn {
    (): void;
    fail: (message?: Error | string) => void;
}

declare class Dot extends Merge {
    /** @nocollapse */
    static className: string;
    private axes;
    private normalize;
    constructor(args: DotLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
    private interpretAxes;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2;
    getConfig(): serialization_2.ConfigDict;
}

export declare const dot: typeof dot_;

/**
 * Computes the dot product of two matrices and/or vectors, `t1` and `t2`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor2d([[1, 2], [3, 4]]);
 * const c = tf.tensor2d([[1, 2, 3], [4, 5, 6]]);
 *
 * a.dot(b).print();  // or tf.dot(a, b)
 * b.dot(a).print();
 * b.dot(c).print();
 * ```
 * @param t1 The first tensor in the dot operation.
 * @param t2 The second tensor in the dot operation.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
declare function dot_(t1: Tensor | TensorLike, t2: Tensor | TensorLike): Tensor;

/**
 * Layer that computes a dot product between samples in two tensors.
 *
 * E.g., if applied to a list of two tensors `a` and `b` both of shape
 * `[batchSize, n]`, the output will be a tensor of shape `[batchSize, 1]`,
 * where each entry at index `[i, 0]` will be the dot product between
 * `a[i, :]` and `b[i, :]`.
 *
 * Example:
 *
 * ```js
 * const dotLayer = tf.layers.dot({axes: -1});
 * const x1 = tf.tensor2d([[10, 20], [30, 40]]);
 * const x2 = tf.tensor2d([[-1, -2], [-3, -4]]);
 *
 * // Invoke the layer's apply() method in eager (imperative) mode.
 * const y = dotLayer.apply([x1, x2]);
 * y.print();
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function dot_2(args: DotLayerArgs): Dot;

declare interface DotLayerArgs extends LayerArgs {
    /**
     * Axis or axes along which the dot product will be taken.
     *
     * Integer or an Array of integers.
     */
    axes: number | [number, number];
    /**
     * Whether to L2-normalize samples along the dot product axis
     * before taking the dot product.
     *
     * If set to `true`, the output of the dot product isthe cosine
     * proximity between the two samples.
     */
    normalize?: boolean;
}

declare function downloadByteEncodedFloatMatrixFromOutputTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): Float32Array;

declare function downloadFloat32MatrixFromBuffer(gl: WebGLRenderingContext, buffer: WebGLBuffer, size: number): Float32Array;

declare function downloadMatrixFromPackedOutputTexture(gl: WebGLRenderingContext, physicalRows: number, physicalCols: number): Float32Array;

declare function downloadPackedMatrixFromBuffer(gl: WebGLRenderingContext, buffer: WebGLBuffer, batch: number, rows: number, cols: number, physicalRows: number, physicalCols: number, textureConfig: TextureConfig): Float32Array;

declare class Dropout extends Layer {
    /** @nocollapse */
    static className: string;
    private readonly rate;
    private readonly noiseShape;
    private readonly seed;
    constructor(args: DropoutLayerArgs);
    protected getNoiseShape(input: Tensor_2): Shape;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
    dispose(): DisposeResult;
}

export declare const dropout: typeof dropout_;

/**
 * Computes dropout.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 2, 1]);
 * const rate = 0.75;
 * const output = tf.dropout(x, rate);
 * output.print();
 * ```
 *
 * @param x A floating point Tensor or TensorLike.
 * @param rate A float in the range [0, 1). The probability that each element
 *   of x is discarded.
 * @param noiseShape An array of numbers of type int32, representing the
 * shape for randomly generated keep/drop flags. If the noiseShape has null
 * value, it will be automatically replaced with the x's relative dimension
 * size. Optional.
 * @param seed Used to create random seeds. Optional.
 * @returns A Tensor of the same shape of x.
 *
 * @doc {heading: 'Operations', subheading: 'Dropout'}
 */
declare function dropout_(x: Tensor | TensorLike, rate: number, noiseShape?: number[], seed?: number | string): Tensor;

/**
 * Applies
 * [dropout](http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf) to
 * the input.
 *
 * Dropout consists in randomly setting a fraction `rate` of input units to 0 at
 * each update during training time, which helps prevent overfitting.
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function dropout_2(args: DropoutLayerArgs): Dropout;

declare interface DropoutLayerArgs extends LayerArgs {
    /** Float between 0 and 1. Fraction of the input units to drop. */
    rate: number;
    /**
     * Integer array representing the shape of the binary dropout mask that will
     * be multiplied with the input.
     *
     * For instance, if your inputs have shape `(batchSize, timesteps, features)`
     * and you want the dropout mask to be the same for all timesteps, you can use
     * `noise_shape=(batch_size, 1, features)`.
     */
    noiseShape?: number[];
    /** An integer to use as random seed. */
    seed?: number;
}

/**
 * A Callback that stops training when a monitored quantity has stopped
 * improving.
 */
export declare class EarlyStopping extends Callback {
    protected readonly monitor: string;
    protected readonly minDelta: number;
    protected readonly patience: number;
    protected readonly baseline: number;
    protected readonly verbose: number;
    protected readonly mode: 'auto' | 'min' | 'max';
    protected monitorFunc: (currVal: number, prevVal: number) => boolean;
    private wait;
    private stoppedEpoch;
    private best;
    constructor(args?: EarlyStoppingCallbackArgs);
    onTrainBegin(logs?: Logs): Promise<void>;
    onEpochEnd(epoch: number, logs?: Logs): Promise<void>;
    onTrainEnd(logs?: Logs): Promise<void>;
    private getMonitorValue;
}

/**
 * Factory function for a Callback that stops training when a monitored
 * quantity has stopped improving.
 *
 * Early stopping is a type of regularization, and protects model against
 * overfitting.
 *
 * The following example based on fake data illustrates how this callback
 * can be used during `tf.LayersModel.fit()`:
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.dense({
 *   units: 3,
 *   activation: 'softmax',
 *   kernelInitializer: 'ones',
 *   inputShape: [2]
 * }));
 * const xs = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const ys = tf.tensor2d([[1, 0, 0], [0, 1, 0]], [2, 3]);
 * const xsVal = tf.tensor2d([4, 3, 2, 1], [2, 2]);
 * const ysVal = tf.tensor2d([[0, 0, 1], [0, 1, 0]], [2, 3]);
 * model.compile(
 *     {loss: 'categoricalCrossentropy', optimizer: 'sgd', metrics: ['acc']});
 *
 * // Without the EarlyStopping callback, the val_acc value would be:
 * //   0.5, 0.5, 0.5, 0.5, ...
 * // With val_acc being monitored, training should stop after the 2nd epoch.
 * const history = await model.fit(xs, ys, {
 *   epochs: 10,
 *   validationData: [xsVal, ysVal],
 *   callbacks: tf.callbacks.earlyStopping({monitor: 'val_acc'})
 * });
 *
 * // Expect to see a length-2 array.
 * console.log(history.history.val_acc);
 * ```
 *
 * @doc {
 *   heading: 'Callbacks',
 *   namespace: 'callbacks'
 * }
 */
declare function earlyStopping(args?: EarlyStoppingCallbackArgs): EarlyStopping;

export declare interface EarlyStoppingCallbackArgs {
    /**
     * Quantity to be monitored.
     *
     * Defaults to 'val_loss'.
     */
    monitor?: string;
    /**
     * Minimum change in the monitored quantity to qualify as improvement,
     * i.e., an absolute change of less than `minDelta` will count as no
     * improvement.
     *
     * Defaults to 0.
     */
    minDelta?: number;
    /**
     * Number of epochs with no improvement after which training will be stopped.
     *
     * Defaults to 0.
     */
    patience?: number;
    /** Verbosity mode. */
    verbose?: number;
    /**
     * Mode: one of 'min', 'max', and 'auto'.
     * - In 'min' mode, training will be stopped when the quantity monitored has
     *   stopped decreasing.
     * - In 'max' mode, training will be stopped when the quantity monitored has
     *   stopped increasing.
     * - In 'auto' mode, the direction is inferred automatically from the name of
     *   the monitored quantity.
     *
     * Defaults to 'auto'.
     */
    mode?: 'auto' | 'min' | 'max';
    /**
     * Baseline value of the monitored quantity.
     *
     * If specified, training will be stopped if the model doesn't show
     * improvement over the baseline.
     */
    baseline?: number;
    /**
     * Whether to restore model weights from the epoch with the best value
     * of the monitored quantity. If `False`, the model weights obtained at the
     * at the last step of training are used.
     *
     * **`True` is not supported yet.**
     */
    restoreBestWeights?: boolean;
}

export declare const Einsum = "Einsum";

export declare const einsum: typeof einsum_;

/**
 * Tensor contraction over specified indices and outer product.
 *
 * `einsum` allows defining Tensors by defining their element-wise computation.
 * This computation is based on
 * [Einstein summation](https://en.wikipedia.org/wiki/Einstein_notation).
 *
 * Some special cases include:
 *
 * Matrix multiplication:
 * ```js
 * const x = tf.tensor2d([[1, 2, 3], [4, 5, 6]]);
 * const y = tf.tensor2d([[0, 1], [2, 3], [4, 5]]);
 * x.print();
 * y.print();
 * tf.einsum('ij,jk->ik', x, y).print();
 * ```
 *
 * Dot product:
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 * const y = tf.tensor1d([0, 1, 2]);
 * x.print();
 * y.print();
 * tf.einsum('i,i->', x, y).print();
 * ```
 *
 * Batch dot product:
 * ```js
 * const x = tf.tensor2d([[1, 2, 3], [4, 5, 6]]);
 * const y = tf.tensor2d([[0, 1, 2], [3, 4, 5]]);
 * x.print();
 * y.print();
 * tf.einsum('bi,bi->b', x, y).print();
 * ```
 *
 * Outer prouduct:
 * ```js
 * const x = tf.tensor1d([1, 3, 5]);
 * const y = tf.tensor1d([2, 4, 6]);
 * x.print();
 * y.print();
 * tf.einsum('i,j->ij', x, y).print();
 * ```
 *
 * Matrix transpose:
 * ```js
 * const x = tf.tensor2d([[1, 2], [3, 4]]);
 * x.print();
 * tf.einsum('ij->ji', x).print();
 * ```
 *
 * Batch matrix transpose:
 * ```js
 * const x = tf.tensor3d([[[1, 2], [3, 4]], [[-1, -2], [-3, -4]]]);
 * x.print();
 * tf.einsum('bij->bji', x).print();
 * ```
 *
 * Limitations:
 *
 * This implementation of einsum has the following limitations:
 *
 * - Does not support >2 input tensors.
 * - Does not support duplicate axes for any given input tensor. E.g., equation
 *   'ii->' is not suppoted.
 * - The `...` notation is not supported.
 *
 * @param equation a string describing the contraction, in the same format as
 * [numpy.einsum](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html).
 * @param tensors the input(s) to contract (each one a Tensor), whose shapes
 *     should be consistent with equation.
 * @returns The output tensor.
 *
 * @doc {heading: 'Tensors', subheading: 'Matrices'}
 */
declare function einsum_(equation: string, ...tensors: Tensor[]): Tensor;

export declare interface EinsumAttrs {
    equation: string;
}

export declare type EinsumInputs = TensorInfo[];

declare function eitherStridesOrDilationsAreOne(strides: number | number[], dilations: number | number[]): boolean;

declare class ELU extends Layer {
    /** @nocollapse */
    static className: string;
    readonly alpha: number;
    readonly DEFAULT_ALPHA = 1;
    constructor(args?: ELULayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

export declare const Elu = "Elu";

export declare const elu: typeof elu_;

/**
 * Computes exponential linear element-wise: `x > 0 ? x : (e ^ x) - 1`.
 *
 * ```js
 * const x = tf.tensor1d([-1, 1, -3, 2]);
 *
 * x.elu().print();  // or tf.elu(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function elu_<T extends Tensor>(x: T | TensorLike): T;

/**
 * Exponetial Linear Unit (ELU).
 *
 * It follows:
 * `f(x) =  alpha * (exp(x) - 1.) for x < 0`,
 * `f(x) = x for x >= 0`.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * References:
 *   - [Fast and Accurate Deep Network Learning by Exponential Linear Units
 * (ELUs)](https://arxiv.org/abs/1511.07289v1)
 *
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers'
 * }
 */
declare function elu_2(args?: ELULayerArgs): ELU;

export declare const EluGrad = "EluGrad";

export declare type EluGradInputs = Pick<NamedTensorInfoMap, 'dy' | 'y'>;

export declare type EluInputs = Pick<NamedTensorInfoMap, 'x'>;

declare interface ELULayerArgs extends LayerArgs {
    /**
     * Float `>= 0`. Negative slope coefficient. Defaults to `1.0`.
     */
    alpha?: number;
}

declare class Embedding extends Layer {
    /** @nocollapse */
    static className: string;
    private inputDim;
    private outputDim;
    private embeddingsInitializer;
    private maskZero;
    private inputLength;
    private embeddings;
    readonly DEFAULT_EMBEDDINGS_INITIALIZER: InitializerIdentifier;
    private readonly embeddingsRegularizer?;
    private readonly embeddingsConstraint?;
    constructor(args: EmbeddingLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    protected warnOnIncompatibleInputShape(inputShape: Shape): void;
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Maps positive integers (indices) into dense vectors of fixed size.
 * eg. [[4], [20]] -> [[0.25, 0.1], [0.6, -0.2]]
 *
 * **Input shape:** 2D tensor with shape: `[batchSize, sequenceLength]`.
 *
 * **Output shape:** 3D tensor with shape: `[batchSize, sequenceLength,
 * outputDim]`.
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function embedding(args: EmbeddingLayerArgs): Embedding;

declare interface EmbeddingLayerArgs extends LayerArgs {
    /**
     * Integer > 0. Size of the vocabulary, i.e. maximum integer index + 1.
     */
    inputDim: number;
    /**
     * Integer >= 0. Dimension of the dense embedding.
     */
    outputDim: number;
    /**
     * Initializer for the `embeddings` matrix.
     */
    embeddingsInitializer?: InitializerIdentifier | Initializer;
    /**
     * Regularizer function applied to the `embeddings` matrix.
     */
    embeddingsRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the activation.
     */
    activityRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Constraint function applied to the `embeddings` matrix.
     */
    embeddingsConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Whether the input value 0 is a special "padding" value that should be
     * masked out. This is useful when using recurrent layers which may take
     * variable length input.
     *
     * If this is `True` then all subsequent layers in the model need to support
     * masking or an exception will be raised. If maskZero is set to `True`, as a
     * consequence, index 0 cannot be used in the vocabulary (inputDim should
     * equal size of vocabulary + 1).
     */
    maskZero?: boolean;
    /**
     * Length of input sequences, when it is constant.
     *
     * This argument is required if you are going to connect `flatten` then
     * `dense` layers upstream (without it, the shape of the dense outputs cannot
     * be computed).
     */
    inputLength?: number | number[];
}

/**
 * Enables debug mode which will log information about all executed kernels:
 * the elapsed time of the kernel execution, as well as the rank, shape, and
 * size of the output tensor.
 *
 * Debug mode will significantly slow down your application as it will
 * download the result of every operation to the CPU. This should not be used in
 * production. Debug mode does not affect the timing information of the kernel
 * execution as we do not measure download time in the kernel execution time.
 *
 * See also: `tf.profile`, `tf.memory`.
 *
 * @doc {heading: 'Environment'}
 */
export declare function enableDebugMode(): void;

/**
 * Enables production mode which disables correctness checks in favor of
 * performance.
 *
 * @doc {heading: 'Environment'}
 */
export declare function enableProdMode(): void;

export declare function enclosingPowerOfTwo(value: number): number;

/**
 * Encodes the provided string into bytes using the provided encoding scheme.
 *
 * @param s The string to encode.
 * @param encoding The encoding scheme. Defaults to utf-8.
 *
 * @doc {heading: 'Util'}
 */
declare function encodeString(s: string, encoding?: string): Uint8Array;

/** Encodes strings into utf-8 bytes. */
declare function encodeStrings(a: RecursiveArray<{}>): RecursiveArray<Uint8Array>;

/**
 * Encode a map from names to weight values as an ArrayBuffer, along with an
 * `Array` of `WeightsManifestEntry` as specification of the encoded weights.
 *
 * This function does not perform sharding.
 *
 * This function is the reverse of `decodeWeights`.
 *
 * @param tensors A map ("dict") from names to tensors.
 * @param group Group to which the weights belong (optional).
 * @returns A `Promise` of
 *   - A flat `ArrayBuffer` with all the binary values of the `Tensor`s
 *     concatenated.
 *   - An `Array` of `WeightManifestEntry`s, carrying information including
 *     tensor names, `dtype`s and shapes.
 * @throws Error: on unsupported tensor `dtype`.
 */
declare function encodeWeights(tensors: NamedTensorMap | NamedTensor[], group?: WeightGroup): Promise<{
    data: ArrayBuffer;
    specs: WeightsManifestEntry[];
}>;

declare class Engine implements TensorTracker, DataMover {
    ENV: Environment;
    state: EngineState;
    backendName: string;
    registry: {
        [id: string]: KernelBackend;
    };
    registryFactory: {
        [id: string]: {
            factory: () => KernelBackend | Promise<KernelBackend>;
            priority: number;
        };
    };
    private profiler;
    private backendInstance;
    private pendingBackendInit;
    private pendingBackendInitId;
    constructor(ENV: Environment);
    ready(): Promise<void>;
    get backend(): KernelBackend;
    backendNames(): string[];
    findBackend(backendName: string): KernelBackend;
    findBackendFactory(backendName: string): () => KernelBackend | Promise<KernelBackend>;
    registerBackend(backendName: string, factory: () => KernelBackend | Promise<KernelBackend>, priority?: number): boolean;
    setBackend(backendName: string): Promise<boolean>;
    private setupRegisteredKernels;
    private disposeRegisteredKernels;
    /**
     * Initializes a backend by looking up the backend name in the factory
     * registry and calling the factory method. Returns a boolean representing
     * whether the initialization of the backend suceeded. Throws an error if
     * there is no backend in the factory registry.
     */
    private initializeBackend;
    removeBackend(backendName: string): void;
    private getSortedBackends;
    private initializeBackendsAndReturnBest;
    moveData(backend: KernelBackend, dataId: DataId_2): void;
    tidy<T extends TensorContainer>(nameOrFn: string | ScopeFn<T>, fn?: ScopeFn<T>): T;
    private scopedRun;
    private static nextTensorId;
    private nextTensorId;
    private static nextVariableId;
    private nextVariableId;
    /**
     * This method is called instead of the public-facing tensor.clone() when
     * saving a tensor for backwards pass. It makes sure to add the clone
     * operation to the tape regardless of being called inside a kernel
     * execution.
     */
    private clone;
    /**
     * Execute a kernel with the given name and return the output tensor.
     *
     * @param kernelName The name of the kernel to execute.
     * @param inputs A map of input names to tensors.
     * @param attrs A map of attribute names to their values. An attribute is a
     *     primitive (non-tensor) input to the kernel.
     * @param inputsToSave A list of tensors, inputs to save for the backprop
     *     computation.
     * @param outputsToSave A list of booleans, specifying which output to save
     *     for the backprop computation. These are booleans since the output
     * tensors are not visible to the user.
     */
    runKernel<T extends Tensor | Tensor[]>(kernelName: string, inputs: NamedTensorMap, attrs?: NamedAttrMap): T;
    private shouldCheckForMemLeaks;
    private checkKernelForMemLeak;
    /**
     * Internal helper method to execute a kernel Func
     *
     * Use `runKernel` to execute kernels from outside of engine.
     */
    private runKernelFunc;
    /**
     * Saves tensors used in forward mode for use in backward mode.
     *
     * @param tensors the list of tensors to save.
     */
    private saveTensorsForBackwardMode;
    /**
     * Returns a list of tensors to save for a given gradient calculation.
     *
     * @param kernelName name of kernel to look up gradient for.
     * @param inputs a map of input tensors.
     * @param outputs an array of output tensors from forward mode of kernel.
     */
    private getTensorsForGradient;
    /**
     * Internal method used by public APIs for tensor creation. Makes a new
     * tensor with the provided shape, dtype and values. It always
     * creates a new data id and writes the values to the underlying backend.
     */
    makeTensor(values: DataValues, shape: number[], dtype: DataType, backend?: KernelBackend): Tensor;
    /**
     * Internal method used by backends. Makes a new tensor
     * that is a wrapper around an existing data id. It doesn't create
     * a new data id, only increments the ref count used in memory tracking.
     */
    makeTensorFromDataId(dataId: DataId_2, shape: number[], dtype: DataType, backend?: KernelBackend): Tensor;
    makeVariable(initialValue: Tensor, trainable?: boolean, name?: string, dtype?: DataType): Variable;
    trackTensor(a: Tensor, backend: KernelBackend): void;
    incRef(a: Tensor, backend: KernelBackend): void;
    removeDataId(dataId: DataId_2, backend: KernelBackend): void;
    disposeTensor(a: Tensor): void;
    disposeVariables(): void;
    disposeVariable(v: Variable): void;
    memory(): MemoryInfo;
    profile(query: () => (TensorContainer | Promise<TensorContainer>)): Promise<ProfileInfo>;
    isTapeOn(): boolean;
    private addTapeNode;
    keep<T extends Tensor>(result: T): T;
    private startTape;
    private endTape;
    /**
     * Start a scope. Use this with endScope() to achieve the same functionality
     * as scope() without the need for a function closure.
     */
    startScope(name?: string): void;
    /**
     * End a scope. Use this with startScope() to achieve the same functionality
     * as scope() without the need for a function closure.
     */
    endScope(result?: TensorContainer): void;
    /**
     * Returns gradients of `f` with respect to each of the `xs`. The gradients
     * returned are of the same length as `xs`, but some might be null if `f`
     * was not a function of that `x`. It also takes optional dy to multiply the
     * gradient, which defaults to `1`.
     */
    gradients<T extends Tensor>(f: () => T, xs: Tensor[], dy?: T, allowNoGradients?: boolean): {
        value: T;
        grads: Tensor[];
    };
    customGrad<T extends Tensor>(f: CustomGradientFunc<T>): (...args: Array<Tensor | GradSaveFunc>) => T;
    readSync(dataId: DataId_2): BackendValues;
    read(dataId: DataId_2): Promise<BackendValues>;
    time(query: () => void): Promise<TimingInfo>;
    /**
     * Tracks a Tensor in the current scope to be automatically cleaned up
     * when the current scope ends, and returns the value.
     *
     * @param result The Tensor to track in the current scope.
     */
    private track;
    get registeredVariables(): NamedVariableMap;
    /**
     * Resets the engine state. Removes all backends but does not remove
     * registered backend factories.
     */
    reset(): void;
}

/**
 * It returns the global engine that keeps track of all tensors and backends.
 *
 * @doc {heading: 'Environment'}
 */
export declare function engine(): Engine;

declare class EngineState {
    registeredVariables: NamedVariableMap;
    nextTapeNodeId: number;
    numBytes: number;
    numTensors: number;
    numStringTensors: number;
    numDataBuffers: number;
    activeTape: TapeNode[];
    gradientDepth: number;
    kernelDepth: number;
    activeScope: ScopeState;
    scopeStack: ScopeState[];
    /**
     * Keeps track of the number of data moves during a kernel execution. We
     * maintain a stack since kernels can call other kernels, recursively.
     */
    numDataMovesStack: number[];
    nextScopeId: number;
    tensorInfo: WeakMap<object, {
        backend: KernelBackend;
        bytes: number;
        dtype: DataType;
        shape: number[];
    }>;
    profiling: boolean;
    activeProfile: ProfileInfo;
    dispose(): void;
}

export declare let ENV: Environment;

/**
 * Returns the current environment (a global singleton).
 *
 * The environment object contains the evaluated feature values as well as the
 * active platform.
 *
 * @doc {heading: 'Environment'}
 */
export declare function env(): Environment;

/**
 * The environment contains evaluated flags as well as the registered platform.
 * This is always used as a global singleton and can be retrieved with
 * `tf.env()`.
 *
 * @doc {heading: 'Environment'}
 */
export declare class Environment {
    global: any;
    private flags;
    private flagRegistry;
    private urlFlags;
    platformName: string;
    platform: Platform;
    getQueryParams: typeof getQueryParams;
    constructor(global: any);
    setPlatform(platformName: string, platform: Platform): void;
    registerFlag(flagName: string, evaluationFn: FlagEvaluationFn, setHook?: (value: FlagValue) => void): void;
    getAsync(flagName: string): Promise<FlagValue>;
    get(flagName: string): FlagValue;
    getNumber(flagName: string): number;
    getBool(flagName: string): boolean;
    getFlags(): Flags;
    get features(): Flags;
    set(flagName: string, value: FlagValue): void;
    private evaluateFlag;
    setFlags(flags: Flags): void;
    reset(): void;
    private populateURLFlags;
}

export declare const Equal = "Equal";

export declare const equal: typeof equal_;

/**
 * Returns the truth value of (a == b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.equal(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function equal_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const equalImpl: SimpleBinaryKernelImpl;

export declare type EqualInputs = BinaryInputs;

export declare const Erf = "Erf";

export declare const erf: typeof erf_;

/**
 * Computes gause error function of the input `tf.Tensor` element-wise:
 * `erf(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, .1, -.1, .7]);
 *
 * x.erf().print(); // or tf.erf(x);
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function erf_<T extends Tensor>(x: T | TensorLike): T;

declare const ERF_A1 = 0.254829592;

declare const ERF_A2 = -0.284496736;

declare const ERF_A3 = 1.421413741;

declare const ERF_A4 = -1.453152027;

declare const ERF_A5 = 1.061405429;

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare const ERF_P = 0.3275911;

export declare type ErfInputs = UnaryInputs;

export declare const Exp = "Exp";

export declare const exp: typeof exp_;

/**
 * Computes exponential of the input `tf.Tensor` element-wise. `e ^ x`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, -3]);
 *
 * x.exp().print();  // or tf.exp(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function exp_<T extends Tensor>(x: T | TensorLike): T;

export declare const ExpandDims = "ExpandDims";

export declare const expandDims: typeof expandDims_;

/**
 * Returns a `tf.Tensor` that has expanded rank, by inserting a dimension
 * into the tensor's shape.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * const axis = 1;
 * x.expandDims(axis).print();
 * ```
 *
 * @param x The input tensor whose dimensions to be expanded.
 * @param axis The dimension index at which to insert shape of `1`. Defaults
 *     to 0 (the first dimension).
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function expandDims_<T extends Tensor>(x: Tensor | TensorLike, axis?: number): T;

export declare interface ExpandDimsAttrs {
    dim: number;
}

export declare type ExpandDimsInputs = Pick<NamedTensorInfoMap, 'input'>;

declare function expandShapeToKeepDim(shape: number[], axes: number[]): number[];

declare function expectArrayBuffersEqual(actual: ArrayBuffer, expected: ArrayBuffer): void;

declare function expectArraysClose(actual: TypedArray | number | RecursiveArray<number>, expected: TypedArray | number | RecursiveArray<number>, epsilon?: number): void;

declare function expectArraysEqual(actual: TensorLike, expected: TensorLike): void;

declare function expectNumbersClose(a: number, e: number, epsilon?: number): void;

declare function expectPromiseToFail(fn: () => Promise<{}>, done: DoneFn): void;

declare function expectValuesInRange(actual: TypedArray | number[], low: number, high: number): void;

declare const expImpl: SimpleUnaryImpl;

export declare type ExpInputs = UnaryInputs;

declare type ExplicitPadding = [
[number, number],
[number, number],
[number, number],
[number, number]
];

export declare const Expm1 = "Expm1";

export declare const expm1: typeof expm1_;

/**
 * Computes exponential of the input `tf.Tensor` minus one element-wise.
 * `e ^ x - 1`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, -3]);
 *
 * x.expm1().print();  // or tf.expm1(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function expm1_<T extends Tensor>(x: T | TensorLike): T;

declare const expm1Impl: SimpleUnaryImpl;

export declare type Expm1Inputs = UnaryInputs;

/**
 * Make the exponent term used by FFT.
 */
declare function exponent(k: number, n: number, inverse: boolean): {
    real: number;
    imag: number;
};

/**
 * Make the list of exponent terms used by FFT.
 */
declare function exponents(n: number, inverse: boolean): {
    real: Float32Array;
    imag: Float32Array;
};

export declare const eye: typeof eye_;

/**
 * Create an identity matrix.
 *
 * @param numRows Number of rows.
 * @param numColumns Number of columns. Defaults to `numRows`.
 * @param batchShape If provided, will add the batch shape to the beginning
 *   of the shape of the returned `tf.Tensor` by repeating the identity
 *   matrix.
 * @param dtype Data type.
 * @returns Identity matrix of the specified size and data type, possibly
 *   with batch repetition if `batchShape` is specified.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function eye_(numRows: number, numColumns?: number, batchShape?: [
number
] | [
number,
number
] | [number, number, number] | [number, number, number, number], dtype?: DataType): Tensor2D;

/** @docinline */
declare type FanMode = 'fanIn' | 'fanOut' | 'fanAvg';

declare interface FenceContext {
    query: WebGLQuery | WebGLSync;
    isFencePassed(): boolean;
}

/**
 * Returns a platform-specific implementation of
 * [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
 *
 * If `fetch` is defined on the global object (`window`, `process`, etc.),
 * `tf.util.fetch` returns that function.
 *
 * If not, `tf.util.fetch` returns a platform-specific solution.
 *
 * ```js
 * const resource = await tf.util.fetch('https://unpkg.com/@tensorflow/tfjs');
 * // handle response
 * ```
 *
 * @doc {heading: 'Util'}
 */
declare function fetch_2(path: string, requestInits?: RequestInit): Promise<Response>;

export declare const FFT = "FFT";

export declare const fft: typeof fft_;

/**
 * Fast Fourier transform.
 *
 * Computes the 1-dimensional discrete Fourier transform over the inner-most
 * dimension of input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 * const imag = tf.tensor1d([1, 2, 3]);
 * const x = tf.complex(real, imag);
 *
 * x.fft().print();  // tf.spectral.fft(x).print();
 * ```
 * @param input The complex input to compute an fft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
declare function fft_(input: Tensor): Tensor;

export declare type FFTInputs = Pick<NamedTensorInfoMap, 'input'>;

declare interface FileChunkIteratorOptions {
    /** The byte offset at which to begin reading the File or Blob. Default 0. */
    offset?: number;
    /** The number of bytes to read at a time. Default 1MB. */
    chunkSize?: number;
}

/**
 * Represents a file, blob, or Uint8Array readable as a stream of binary data
 * chunks.
 */
declare class FileDataSource extends DataSource {
    protected input: FileElement | string;
    protected readonly options: FileChunkIteratorOptions;
    /**
     * Create a `FileDataSource`.
     *
     * @param input Local file path, or `File`/`Blob`/`Uint8Array` object to
     *     read. Local file only works in node environment.
     * @param options Options passed to the underlying `FileChunkIterator`s,
     *   such as {chunksize: 1024}.
     */
    constructor(input: FileElement | string, options?: FileChunkIteratorOptions);
    iterator(): Promise<ByteChunkIterator>;
}

/**
 * Types supported by FileChunkIterator in both Browser and Node Environment.
 */
declare type FileElement = File | Blob | Uint8Array;

export declare const Fill = "Fill";

/**
 * Creates a `tf.Tensor` filled with a scalar value.
 *
 * ```js
 * tf.fill([2, 2], 4).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param value The scalar value to fill the tensor with.
 * @param dtype The type of an element in the resulting tensor. Defaults to
 * 'float'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function fill<R extends Rank>(shape: ShapeMap[R], value: number | string, dtype?: DataType): Tensor<R>;

export declare interface FillAttrs {
    shape: number[];
    value: number | string;
    dtype: DataType;
}

/**
 * Finds the backend registered under the provided name. Returns null if the
 * name is not in the registry, or the registration hasn't finished yet.
 */
export declare function findBackend(name: string): KernelBackend;

/**
 * Finds the backend factory registered under the provided name. Returns a
 * function that produces a new backend when called. Returns null if the name
 * is not in the registry.
 */
export declare function findBackendFactory(name: string): () => KernelBackend | Promise<KernelBackend>;

declare function fingerPrint64(s: Uint8Array, len?: number): Long;

declare type FlagEvaluationFn = (() => FlagValue) | (() => Promise<FlagValue>);

declare type Flags = {
    [featureName: string]: FlagValue;
};

declare type FlagValue = number | boolean;

declare class Flatten extends Layer {
    private dataFormat;
    /** @nocollapse */
    static className: string;
    constructor(args?: FlattenLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 *  Flattens an arbitrarily nested array.
 *
 * ```js
 * const a = [[1, 2], [3, 4], [5, [6, [7]]]];
 * const flat = tf.util.flatten(a);
 * console.log(flat);
 * ```
 *
 *  @param arr The nested array to flatten.
 *  @param result The destination array which holds the elements.
 *  @param skipTypedArray If true, avoids flattening the typed arrays. Defaults
 *      to false.
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function flatten<T extends number | boolean | string | Promise<number> | TypedArray>(arr: T | RecursiveArray<T>, result?: T[], skipTypedArray?: boolean): T[];

/**
 * Flattens the input. Does not affect the batch size.
 *
 * A `Flatten` layer flattens each batch in its inputs to 1D (making the output
 * 2D).
 *
 * For example:
 *
 * ```js
 * const input = tf.input({shape: [4, 3]});
 * const flattenLayer = tf.layers.flatten();
 * // Inspect the inferred output shape of the flatten layer, which
 * // equals `[null, 12]`. The 2nd dimension is 4 * 3, i.e., the result of the
 * // flattening. (The 1st dimension is the undermined batch size.)
 * console.log(JSON.stringify(flattenLayer.apply(input).shape));
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function flatten_2(args?: FlattenLayerArgs): Flatten;

declare interface FlattenLayerArgs extends LayerArgs {
    /** Image data format: channeLast (default) or channelFirst. */
    dataFormat?: DataFormat;
}

declare type FlatVector = boolean[] | number[] | TypedArray;

export declare const FlipLeftRight = "FlipLeftRight";

export declare type FlipLeftRightInputs = Pick<NamedTensorInfoMap, 'image'>;

export declare const Floor = "Floor";

export declare const floor: typeof floor_;

/**
 * Computes floor of input `tf.Tensor` element-wise: `floor(x)`.
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3]);
 *
 * x.floor().print();  // or tf.floor(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function floor_<T extends Tensor>(x: T | TensorLike): T;

export declare const FloorDiv = "FloorDiv";

export declare const floorDiv: typeof floorDiv_;

/**
 * Divides two `tf.Tensor`s element-wise, A / B. Supports broadcasting.
 * The result is rounded with floor function.
 *
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 9, 16]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 *
 * a.floorDiv(b).print();  // or tf.div(a, b)
 * ```
 *
 * ```js
 * // Broadcast div a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(2);
 *
 * a.floorDiv(b).print();  // or tf.floorDiv(a, b)
 * ```
 *
 * @param a The first tensor as the numerator.
 * @param b The second tensor as the denominator. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function floorDiv_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare type FloorDivInputs = BinaryInputs;

declare const floorImpl: SimpleUnaryImpl;

export declare type FloorInputs = UnaryInputs;

/**
 * Enforce use of half precision textures if available on the platform.
 *
 * @doc {heading: 'Environment', namespace: 'webgl'}
 */
export declare function forceHalfFloat(): void;

/**
 * A function that computes an output. The save function is for saving tensors
 * computed in the forward pass, that we need in the backward pass.
 */
export declare type ForwardFunc<T> = (backend: KernelBackend, save?: GradSaveFunc) => T;

declare type FromConfigMethod<T extends Serializable> = (cls: SerializableConstructor<T>, config: ConfigDict) => T;

/**
 * Creates an IOHandler that loads model artifacts from memory.
 *
 * When used in conjunction with `tf.loadLayersModel`, an instance of
 * `tf.LayersModel` (Keras-style) can be constructed from the loaded artifacts.
 *
 * ```js
 * const model = await tf.loadLayersModel(tf.io.fromMemory(
 *     modelTopology, weightSpecs, weightData));
 * ```
 *
 * @param modelArtifacts a object containing model topology (i.e., parsed from
 *   the JSON format).
 * @param weightSpecs An array of `WeightsManifestEntry` objects describing the
 *   names, shapes, types, and quantization of the weight data.
 * @param weightData A single `ArrayBuffer` containing the weight data,
 *   concatenated in the order described by the weightSpecs.
 * @param trainingConfig Model training configuration. Optional.
 *
 * @returns A passthrough `IOHandler` that simply loads the provided data.
 */
declare function fromMemory(modelArtifacts: {} | ModelArtifacts, weightSpecs?: WeightsManifestEntry[], weightData?: ArrayBuffer, trainingConfig?: TrainingConfig): IOHandler;

export declare const FromPixels = "FromPixels";

declare const fromPixels: typeof fromPixels_;

/**
 * Creates a `tf.Tensor` from an image.
 *
 * ```js
 * const image = new ImageData(1, 1);
 * image.data[0] = 100;
 * image.data[1] = 150;
 * image.data[2] = 200;
 * image.data[3] = 255;
 *
 * tf.browser.fromPixels(image).print();
 * ```
 *
 * @param pixels The input image to construct the tensor from. The
 * supported image types are all 4-channel. You can also pass in an image
 * object with following attributes:
 * `{data: Uint8Array; width: number; height: number}`
 * @param numChannels The number of channels of the output tensor. A
 * numChannels value less than 4 allows you to ignore channels. Defaults to
 * 3 (ignores alpha channel of input image).
 *
 * @returns A Tensor3D with the shape `[height, width, numChannels]`.
 *
 * @doc {heading: 'Browser', namespace: 'browser', ignoreCI: true}
 */
declare function fromPixels_(pixels: PixelData | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, numChannels?: number): Tensor3D;

/**
 * Creates a `tf.Tensor` from an image in async way.
 *
 * ```js
 * const image = new ImageData(1, 1);
 * image.data[0] = 100;
 * image.data[1] = 150;
 * image.data[2] = 200;
 * image.data[3] = 255;
 *
 * (await tf.browser.fromPixelsAsync(image)).print();
 * ```
 * This API is the async version of fromPixels. The API will first
 * check |WRAP_TO_IMAGEBITMAP| flag, and try to wrap the input to
 * imageBitmap if the flag is set to true.
 *
 * @param pixels The input image to construct the tensor from. The
 * supported image types are all 4-channel. You can also pass in an image
 * object with following attributes:
 * `{data: Uint8Array; width: number; height: number}`
 * @param numChannels The number of channels of the output tensor. A
 * numChannels value less than 4 allows you to ignore channels. Defaults to
 * 3 (ignores alpha channel of input image).
 *
 * @doc {heading: 'Browser', namespace: 'browser', ignoreCI: true}
 */
declare function fromPixelsAsync(pixels: PixelData | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, numChannels?: number): Promise<Tensor3D>;

export declare interface FromPixelsAttrs {
    numChannels: number;
}

export declare interface FromPixelsInputs {
    pixels: PixelData | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;
}

declare function fromStringArrayToUint8(strings: string[]): Uint8Array[];

declare function fromUint8ToStringArray(vals: Uint8Array[]): string[];

/**
 * Create a `Dataset` that produces each element by calling a provided function.
 *
 * Note that repeated iterations over this `Dataset` may produce different
 * results, because the function will be called anew for each element of each
 * iteration.
 *
 * Also, beware that the sequence of calls to this function may be out of order
 * in time with respect to the logical order of the Dataset. This is due to the
 * asynchronous lazy nature of stream processing, and depends on downstream
 * transformations (e.g. .shuffle()). If the provided function is pure, this is
 * no problem, but if it is a closure over a mutable state (e.g., a traversal
 * pointer), then the order of the produced elements may be scrambled.
 *
 * ```js
 * let i = -1;
 * const func = () =>
 *    ++i < 5 ? {value: i, done: false} : {value: null, done: true};
 * const ds = tf.data.func(func);
 * await ds.forEachAsync(e => console.log(e));
 * ```
 *
 * @param f A function that produces one data element on each call.
 */
declare function func<T extends TensorContainer_2>(f: () => IteratorResult<T> | Promise<IteratorResult<T>>): Dataset<T>;

declare namespace fused {
    export {
        Activation,
        conv2d_2 as conv2d,
        depthwiseConv2d_2 as depthwiseConv2d,
        matMul_2 as matMul
    }
}
export { fused }

declare type FusedBatchMatMulConfig = {
    a: Tensor3D;
    b: Tensor3D;
    transposeA: boolean;
    transposeB: boolean;
    bias?: Tensor;
    activation?: Activation;
    preluActivationWeights?: Tensor;
    leakyreluAlpha?: number;
};

export declare const FusedBatchNorm = "FusedBatchNorm";

export declare interface FusedBatchNormAttrs {
    varianceEpsilon: number;
}

export declare type FusedBatchNormInputs = Pick<NamedTensorInfoMap, 'x' | 'scale' | 'offset' | 'mean' | 'variance'>;

export declare const FusedConv2D = "FusedConv2D";

/**
 * Computes a 2D convolution over the input x, optionally fused with adding a
 * bias and applying an activation.
 *
 * ```js
 * const inputDepth = 2;
 * const inShape = [2, 2, 2, inputDepth];
 * const outputDepth = 2;
 * const fSize = 1;
 * const pad = 0;
 * const strides = 1;
 *
 * const x = tf.tensor4d( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
 * 16], inShape);
 * const w = tf.tensor4d([-1, 1, -2, 0.5], [fSize, fSize, inputDepth,
 * outputDepth]);
 *
 * tf.fused.conv2d({ x, filter: w, strides, pad, dataFormat: 'NHWC',
 * dilations: [1, 1], bias: tf.scalar(5), activation: 'relu' }).print();
 * ```
 *
 * @param obj An object with the following properties:
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, inDepth, outDepth]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid` output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param bias Tensor to be added to the result.
 * @param activation Name of activation kernel (defaults to `linear`) to be
 *     applied
 *      after biasAdd.
 * @param preluActivationWeights Tensor of prelu weights to be applied as part
 *     of a `prelu` activation, typically the same shape as `x`.
 * @param leakyreluAlpha Optional. Alpha to be applied as part of a `leakyrelu`
 *     activation.
 */
declare function fusedConv2d_<T extends Tensor3D | Tensor4D>({ x, filter, strides, pad, dataFormat, dilations, dimRoundingMode, bias, activation, preluActivationWeights, leakyreluAlpha }: {
    x: T | TensorLike;
    filter: Tensor4D | TensorLike;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | conv_util.ExplicitPadding;
    dataFormat?: 'NHWC' | 'NCHW';
    dilations?: [number, number] | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    bias?: Tensor | TensorLike;
    activation?: Activation;
    preluActivationWeights?: Tensor;
    leakyreluAlpha?: number;
}): T;

export declare interface FusedConv2DAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dataFormat: 'NHWC' | 'NCHW';
    dilations: [number, number] | number;
    dimRoundingMode: 'floor' | 'round' | 'ceil';
    activation: Activation;
    leakyreluAlpha?: number;
}

declare type FusedConv2DConfig = {
    input: Tensor4D;
    filter: Tensor4D;
    convInfo: Conv2DInfo;
    bias?: Tensor;
    activation?: Activation;
    preluActivationWeights?: Tensor;
    leakyreluAlpha?: number;
};

export declare interface FusedConv2DInputs extends NamedTensorInfoMap {
    x: TensorInfo;
    filter: TensorInfo;
    bias?: TensorInfo;
    preluActivationWeights?: TensorInfo;
}

export declare const FusedDepthwiseConv2D = "FusedDepthwiseConv2D";

/**
 * Computes depthwise 2D convolution, optionally fused with adding a
 * bias and applying an activation.
 *
 * Given a 4D `input` array and a `filter` array of shape
 * `[filterHeight, filterWidth, inChannels, channelMultiplier]` containing
 * `inChannels` convolutional filters of depth 1, this op applies a
 * different filter to each input channel (expanding from 1 channel to
 * `channelMultiplier` channels for each), then concatenates the results
 * together. The output has `inChannels * channelMultiplier` channels.
 *
 * See
 * [https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d](
 *     https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d)
 * for more details.
 *
 * @param obj An object with the following properties:
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter tensor, rank 4, of shape
 *     `[filterHeight, filterWidth, inChannels, channelMultiplier]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`. If strides is a single number, then `strideHeight ==
 * strideWidth`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `rate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param bias Tensor to be added to the result.
 * @param activation Name of activation kernel (defaults to `linear`).
 * @param preluActivationWeights Tensor of prelu weights to be applied as part
 *     of a `prelu` activation, typically the same shape as `x`.
 * @param leakyreluAlpha Optional. Alpha to be applied as part of a `leakyrelu`
 *     activation.
 */
declare function fusedDepthwiseConv2d_<T extends Tensor3D | Tensor4D>({ x, filter, strides, pad, dataFormat, dilations, dimRoundingMode, bias, activation, preluActivationWeights, leakyreluAlpha }: {
    x: T | TensorLike;
    filter: Tensor4D | TensorLike;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number;
    dataFormat?: 'NHWC' | 'NCHW';
    dilations?: [number, number] | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
    bias?: Tensor | TensorLike;
    activation?: Activation;
    preluActivationWeights?: Tensor;
    leakyreluAlpha?: number;
}): T;

export declare interface FusedDepthwiseConv2DAttrs {
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dataFormat: 'NHWC' | 'NCHW';
    dilations: [number, number] | number;
    dimRoundingMode: 'floor' | 'round' | 'ceil';
    activation: Activation;
    leakyreluAlpha?: number;
}

export declare interface FusedDepthwiseConv2DInputs extends NamedTensorInfoMap {
    x: TensorInfo;
    filter: TensorInfo;
    bias?: TensorInfo;
    preluActivationWeights?: TensorInfo;
}

export declare const _FusedMatMul = "_FusedMatMul";

/**
 * Computes the dot product of two matrices with optional activation and bias.
 *
 * ```js
 * const a = tf.tensor2d([-1, -2], [1, 2]);
 * const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const bias = tf.tensor2d([1, 2], [1, 2]);
 *
 * tf.fused.matMul({a, b, bias, activation: 'relu'}).print();
 * ```
 *
 * @param obj An object with the following properties:
 * - `a` First matrix in dot product operation.
 * - `b` Second matrix in dot product operation.
 * - `transposeA` If true, `a` is transposed before multiplication.
 * - `transposeB` If true, `b` is transposed before multiplication.
 * - `bias` Matrix to be added to the result.
 * - `activation` Name of activation kernel (defaults to `linear`).
 * - `preluActivationWeights` Tensor of prelu weights.
 * - `leakyreluAlpha` Alpha of leakyrelu.
 */
declare function fusedMatMul_({ a, b, transposeA, transposeB, bias, activation, preluActivationWeights, leakyreluAlpha, }: {
    a: Tensor | TensorLike;
    b: Tensor | TensorLike;
    transposeA?: boolean;
    transposeB?: boolean;
    bias?: Tensor | TensorLike;
    activation?: Activation;
    preluActivationWeights?: Tensor;
    leakyreluAlpha?: number;
}): Tensor;

export declare interface _FusedMatMulAttrs {
    transposeA: boolean;
    transposeB: boolean;
    activation: Activation;
    leakyreluAlpha?: number;
}

export declare interface _FusedMatMulInputs extends NamedTensorInfoMap {
    a: TensorInfo;
    b: TensorInfo;
    bias?: TensorInfo;
    preluActivationWeights?: TensorInfo;
}

export declare const gather: typeof gather_;

/**
 * Gather slices from tensor `x`'s axis `axis` according to `indices`.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * const indices = tf.tensor1d([1, 3, 3], 'int32');
 *
 * x.gather(indices).print();
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const indices = tf.tensor1d([1, 1, 0], 'int32');
 *
 * x.gather(indices).print();
 * ```
 * @param x The input tensor whose slices to be gathered.
 * @param indices The indices of the values to extract.
 * @param axis The axis over which to select values. Defaults to 0.
 * @param batchDims Optional. The number of batch dimensions. It must be less
 *     than or equal to rank(indices). Defaults to 0.
 *     The output tensor will have shape of
 *     `x.shape[:axis] + indices.shape[batchDims:] + x.shape[axis + 1:]`
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function gather_<T extends Tensor>(x: T | TensorLike, indices: Tensor | TensorLike, axis?: number, batchDims?: number): T;

declare namespace gather_util {
    export {
        prepareAndValidate
    }
}
export { gather_util }

export declare const GatherNd = "GatherNd";

export declare const gatherND: typeof gatherND_;

/**
 * Gather slices from input tensor into a Tensor with shape specified by
 * `indices`.
 *
 * `indices` is an K-dimensional integer tensor, best thought of as a
 * (K-1)-dimensional tensor of indices into input, where each element defines a
 * slice of input:
 * output[\\(i_0, ..., i_{K-2}\\)] = input[indices[\\(i_0, ..., i_{K-2}\\)]]
 *
 * Whereas in `tf.gather`, `indices` defines slices into the first dimension of
 * input, in `tf.gatherND`, `indices` defines slices into the first N dimensions
 * of input, where N = indices.shape[-1].
 *
 * The last dimension of indices can be at most the rank of input:
 * indices.shape[-1] <= input.rank
 *
 * The last dimension of `indices` corresponds to elements
 * (if indices.shape[-1] == input.rank) or slices
 * (if indices.shape[-1] < input.rank) along dimension indices.shape[-1] of
 * input.
 * The output tensor has shape
 * indices.shape[:-1] + input.shape[indices.shape[-1]:]
 *
 * Note that on CPU, if an out of bound index is found, an error is returned. On
 * GPU, if an out of bound index is found, a 0 is stored in the corresponding
 * output value.
 *
 * ```js
 * const indices = tf.tensor2d([0, 1, 1, 0], [2,2], 'int32');
 * const input = tf.tensor2d([9, 10, 11, 12], [2, 2]);
 * tf.gatherND(input, indices).print() // [10, 11]
 * ```
 *
 * @param x The tensor from which to gather values.
 * @param indices Index tensor, must be of type int32.
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
declare function gatherND_(x: Tensor | TensorLike, indices: Tensor | TensorLike): Tensor;

declare function gatherNdImpl<R extends Rank_2>(indicesData: TypedArray_2, paramsBuf: TensorBuffer_2<R>, dtype: DataType_2, numSlices: number, sliceRank: number, sliceSize: number, strides: number[], paramsShape: number[], paramsSize: number): TensorBuffer_2<R>;

export declare type GatherNdInputs = Pick<NamedTensorInfoMap, 'params' | 'indices'>;

declare interface GatherOpShapeInfo {
    batchSize: number;
    sliceSize: number;
    outerSize: number;
    dimSize: number;
    outputShape: number[];
}

export declare const GatherV2 = "GatherV2";

export declare interface GatherV2Attrs {
    axis: number;
    batchDims: number;
}

declare function gatherV2Impl<R extends Rank_2, D extends DataType_2>(xBuf: TensorBuffer_2<R, D>, indicesBuf: TensorBuffer_2<R, D>, flattenOutputShape: number[]): TensorBuffer_2<R, D>;

export declare type GatherV2Inputs = Pick<NamedTensorInfoMap, 'x' | 'indices'>;

declare class GaussianDropout extends Layer {
    /** @nocollapse */
    static className: string;
    readonly rate: number;
    constructor(args: GaussianDropoutArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): {
        rate: number;
    };
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Apply multiplicative 1-centered Gaussian noise.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * Arguments:
 *   - `rate`: float, drop probability (as with `Dropout`).
 *     The multiplicative noise will have
 *     standard deviation `sqrt(rate / (1 - rate))`.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape`
 *   (tuple of integers, does not include the samples axis)
 *   when using this layer as the first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * References:
 *   - [Dropout: A Simple Way to Prevent Neural Networks from Overfitting](
 *      http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
 *
 * @doc {heading: 'Layers', subheading: 'Noise', namespace: 'layers'}
 */
declare function gaussianDropout(args: GaussianDropoutArgs): GaussianDropout;

declare interface GaussianDropoutArgs extends LayerArgs {
    /** drop probability.  */
    rate: number;
}

declare class GaussianNoise extends Layer {
    /** @nocollapse */
    static className: string;
    readonly stddev: number;
    constructor(args: GaussianNoiseArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): {
        stddev: number;
    };
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Apply additive zero-centered Gaussian noise.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * This is useful to mitigate overfitting
 * (you could see it as a form of random data augmentation).
 * Gaussian Noise (GS) is a natural choice as corruption process
 * for real valued inputs.
 *
 * # Arguments
 *     stddev: float, standard deviation of the noise distribution.
 *
 * # Input shape
 *         Arbitrary. Use the keyword argument `input_shape`
 *         (tuple of integers, does not include the samples axis)
 *         when using this layer as the first layer in a model.
 *
 * # Output shape
 *         Same shape as input.
 *
 * @doc {heading: 'Layers', subheading: 'Noise', namespace: 'layers'}
 */
declare function gaussianNoise(args: GaussianNoiseArgs): GaussianNoise;

declare interface GaussianNoiseArgs extends LayerArgs {
    /** Standard Deviation.  */
    stddev: number;
}

/**
 * Create a `Dataset` that produces each element from provided JavaScript
 * generator, which is a function*
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_functions),
 * or a function that returns an
 * iterator
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generator_functions).
 *
 * The returned iterator should have `.next()` function that returns element in
 * format of `{value: TensorContainer, done:boolean}`.
 *
 * Example of creating a dataset from an iterator factory:
 * ```js
 * function makeIterator() {
 *   const numElements = 10;
 *   let index = 0;
 *
 *   const iterator = {
 *     next: () => {
 *       let result;
 *       if (index < numElements) {
 *         result = {value: index, done: false};
 *         index++;
 *         return result;
 *       }
 *       return {value: index, done: true};
 *     }
 *   };
 *   return iterator;
 * }
 * const ds = tf.data.generator(makeIterator);
 * await ds.forEachAsync(e => console.log(e));
 * ```
 *
 * Example of creating a dataset from a generator:
 * ```js
 * function* dataGenerator() {
 *   const numElements = 10;
 *   let index = 0;
 *   while (index < numElements) {
 *     const x = index;
 *     index++;
 *     yield x;
 *   }
 * }
 *
 * const ds = tf.data.generator(dataGenerator);
 * await ds.forEachAsync(e => console.log(e));
 * ```
 *
 * @param generator A Javascript generator function that returns a JavaScript
 *     iterator.
 *
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   configParamIndices: [1]
 *  }
 */
declare function generator<T extends TensorContainer_2>(generator: () => Iterator<T> | Promise<Iterator<T>>): Dataset<T>;

declare function getArrayFromDType<D extends DataType>(dtype: D, size: number): DataTypeMap[D];

/**
 * Returns the axes permutation to be used with `tf.transpose`, if such
 * permutation is necessary. Otherwise it returns null. This method is used by
 * operations that operate only on inner-most axes.
 */
declare function getAxesPermutation(axes: number[], rank: number): number[] | null;

/**
 * Returns the current backend name (cpu, webgl, etc). The backend is
 * responsible for creating tensors and executing operations on those tensors.
 *
 * @doc {heading: 'Backends'}
 */
export declare function getBackend(): string;

declare function getBatchDim(shape: number[], dimsToSkip?: number): number;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the dimensions in the input shape that are broadcasted to
 * produce the provided output shape.
 *
 * The returned dimensions are 0-indexed and sorted. An example:
 * inShape = [4, 1, 3]
 * outShape = [5, 4, 3, 3]
 * result = [1]. Dimension 1 (2nd dimension of input) gets broadcasted 1 => 3.
 */
declare function getBroadcastDims(inShape: number[], outShape: number[]): number[];

/**
 * Get the map representing a complex value in the given array.
 * @param complex The complex tensor values.
 * @param index An index of the target complex value.
 */
declare function getComplexWithIndex(complex: Float32Array, index: number): {
    real: number;
    imag: number;
};

/**
 * Gets path of computation for einsum.
 *
 * @param summedDims indices to the dimensions being summed over.
 * @param idDims A look up table for the dimensions present in each input
 *     tensor. Each consituent array contains indices for the dimensions in the
 *     corresponding input tensor.
 *
 * @return A map with two fields:
 *   - path: The path of computation, with each element indicating the dimension
 *     being summed over after the element-wise multiplication in that step.
 *   - steps: With the same length as `path`. Each element contains the indices
 *     to the input tensors being used for element-wise multiplication in the
 *     corresponding step.
 */
declare function getEinsumComputePath(summedDims: number[], idDims: number[][]): {
    path: number[];
    steps: number[][];
};

/**
 * Get the permutation for a given input tensor.
 *
 * @param nDims Total number of dimension of all tensors involved in the einsum
 *   operation.
 * @param idDims Dimension indices involve in the tensor in question.
 * @returns An object consisting of the following fields:
 *   - permutationIndices: Indices to permute the axes of the tensor with.
 *   - expandDims: Indices to the dimension that need to be expanded from the
 *     tensor after permutation.
 */
declare function getEinsumPermutation(nDims: number, idDims: number[]): {
    permutationIndices: number[];
    expandDims: number[];
};

declare function getExtensionOrThrow(gl: WebGLRenderingContext, extensionName: string): {};

declare function getFramebufferErrorMessage(gl: WebGLRenderingContext, status: number): string;

declare function getFusedBiasGradient(bias: Tensor, dyActivation: Tensor): Tensor;

declare function getFusedDyActivation(dy: Tensor, y: Tensor, activation: Activation): Tensor;

/**
 * Returns the registered gradient info associated with the provided kernel.
 * @param kernelName The official TF kernel name.
 */
export declare function getGradient(kernelName: string): GradConfig;

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare function getImageCenter(center: number | [number, number], imageHeight: number, imageWidth: number): [number, number];

declare function getInnerMostAxes(numAxes: number, rank: number): number[];

declare function getInternalFormatForFloat16MatrixTexture(textureConfig: TextureConfig): number;

declare function getInternalFormatForFloat16PackedMatrixTexture(textureConfig: TextureConfig): number;

declare function getInternalFormatForFloat32MatrixTexture(textureConfig: TextureConfig): number;

declare function getInternalFormatForPackedMatrixTexture(textureConfig: TextureConfig): number;

declare function getInternalFormatForUnsignedBytesMatrixTexture(textureConfig: TextureConfig): number;

/**
 * Returns the kernel function (code) associated with the provided names.
 *
 * @param kernelName The official name of the kernel.
 * @param backendName The official name of the backend.
 */
export declare function getKernel(kernelName: string, backendName: string): KernelConfig;

export declare function getKernelsForBackend(backendName: string): KernelConfig[];

declare const getLoadHandlers: (url: string | string[], loadOptions?: LoadOptions) => IOHandler[];

declare function getMaxTexturesInShader(webGLVersion: number): number;

/**
 * Create `ModelArtifacts` from a JSON file.
 *
 * @param modelJSON Object containing the parsed JSON of `model.json`
 * @param loadWeights Function that takes the JSON file's weights manifest,
 *     reads weights from the listed path(s), and returns a Promise of the
 *     weight manifest entries along with the weights data.
 * @returns A Promise of the `ModelArtifacts`, as described by the JSON file.
 */
declare function getModelArtifactsForJSON(modelJSON: ModelJSON, loadWeights: (weightsManifest: WeightsManifestConfig) => Promise<[
WeightsManifestEntry[],
ArrayBuffer
]>): Promise<ModelArtifacts>;

/**
 * Populate ModelArtifactsInfo fields for a model with JSON topology.
 * @param modelArtifacts
 * @returns A ModelArtifactsInfo object.
 */
declare function getModelArtifactsInfoForJSON(modelArtifacts: ModelArtifacts): ModelArtifactsInfo;

declare function getNormalizedAxes(inputShape: number[], ellipsisAxes: number[], numInterpolatedAxes: number, begin: number[], end: number[], strides: number[], beginMask: number, endMask: number, ellipsisMask: number): {
    begin: number[];
    end: number[];
    strides: number[];
};

declare function getNumChannels(): number;

/**
 * Gets the permutation that will transpose the dimensions of the
 * reshaped tensor to shape:
 *
 * [batch / prod(block_shape),inputShape[1], blockShape[0], ...,
 * inputShape[M], blockShape[M-1],inputShape[M+1], ..., inputShape[N-1]]
 *
 * see step 2: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
declare function getPermuted(reshapedRank: number, blockShapeRank: number, batchToSpace?: boolean): number[];

declare function getProgramUniformLocation(gl: WebGLRenderingContext, program: WebGLProgram, uniformName: string): WebGLUniformLocation;

declare function getProgramUniformLocationOrThrow(gl: WebGLRenderingContext, program: WebGLProgram, uniformName: string): WebGLUniformLocation;

declare function getQueryParams(queryString: string): {
    [key: string]: string;
};

/**
 * Returns the axes in the output space that should be reduced to produce
 * the input space.
 */
declare function getReductionAxes(inShape: number[], outShape: number[]): number[];

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Gets the new shape of the input Tensor after it's been reshaped
 * to:
 * [blockShape[0], ..., blockShape[M-1], batch / prod(blockShape),
 * inputShape[1], ..., inputShape[N-1]]
 *
 * See step 1: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
declare function getReshaped(inputShape: number[], blockShape: number[], prod: number, batchToSpace?: boolean): number[];

/**
 * Gets the shape of the reshaped and permuted input Tensor before any cropping
 * is applied.  The new shape will be:
 *
 * [batch / prod(blockShape),inputShape[1] * blockShape[0], ...,
 * inputShape[M] * blockShape[M-1],inputShape[M+1], ..., inputShape[N-1]]
 *
 * See step 3: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
declare function getReshapedPermuted(inputShape: number[], blockShape: number[], prod: number, batchToSpace?: boolean): number[];

declare function getRowsCols(shape: number[]): [number, number];

declare const getSaveHandlers: (url: string | string[]) => IOHandler[];

declare function getShapeAs3D(shape: number[]): [number, number, number];

/**
 * Converts the crops argument into the beginning coordinates of a slice
 * operation.
 */
declare function getSliceBeginCoords(crops: number[][], blockShape: number): number[];

/**
 * Converts the crops argument into the size of a slice operation.  When
 * combined with getSliceBeginCoords this function allows the reshaped and
 * permuted Tensor to be cropped to its final output shape of:
 *
 * inputShape[1] * blockShape[0] - crops[0,0] - crops[0,1], ...,
 * inputShape[M] * blockShape[M-1] -crops[M-1,0] -
 * crops[M-1,1],inputShape[M+1], ..., inputShape[N-1]]
 *
 * See step 4: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
declare function getSliceSize(uncroppedShape: number[], crops: number[][], blockShape: number): number[];

/**
 * Extracts any `Tensor`s found within the provided object.
 *
 * @param container an object that may be a `Tensor` or may directly contain
 *   `Tensor`s, such as a `Tensor[]` or `{key: Tensor, ...}`. In general it
 *   is safe to pass any object here, except that `Promise`s are not
 *   supported.
 * @returns An array of `Tensors` found within the passed object. If the
 *   argument is simply a `Tensor', a list containing that `Tensor` is
 *   returned. If the object is not a `Tensor` or does not
 *   contain `Tensors`, an empty list is returned.
 */
declare function getTensorsInContainer(result: TensorContainer): Tensor[];

declare function getTextureShapeFromLogicalShape(logShape: number[], isPacked?: boolean): [number, number];

declare function getTypedArrayFromDType<D extends NumericDataType>(dtype: D, size: number): DataTypeMap[D];

/** Returns the axes permutation that undoes the original permutation. */
declare function getUndoAxesPermutation(axes: number[]): number[];

declare function getWebGLDisjointQueryTimerVersion(webGLVersion: number): number;

declare function getWebGLErrorMessage(gl: WebGLRenderingContext, status: number): string;

declare function getWebGLMaxTextureSize(webGLVersion: number): number;

declare class GlobalAveragePooling1D extends GlobalPooling1D {
    /** @nocollapse */
    static className: string;
    constructor(args?: LayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Global average pooling operation for temporal data.
 *
 * Input Shape: 3D tensor with shape: `[batchSize, steps, features]`.
 *
 * Output Shape:2D tensor with shape: `[batchSize, features]`.
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function globalAveragePooling1d(args?: LayerArgs): GlobalAveragePooling1D;

declare class GlobalAveragePooling2D extends GlobalPooling2D {
    /** @nocollapse */
    static className: string;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Global average pooling operation for spatial data.
 *
 * Input shape:
 *   - If `dataFormat` is `CHANNEL_LAST`:
 *       4D tensor with shape: `[batchSize, rows, cols, channels]`.
 *   - If `dataFormat` is `CHANNEL_FIRST`:
 *       4D tensor with shape: `[batchSize, channels, rows, cols]`.
 *
 * Output shape:
 *   2D tensor with shape: `[batchSize, channels]`.
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function globalAveragePooling2d(args: GlobalPooling2DLayerArgs): GlobalAveragePooling2D;

declare const globalMaxPool1d: typeof globalMaxPooling1d;

declare const globalMaxPool2d: typeof globalMaxPooling2d;

declare class GlobalMaxPooling1D extends GlobalPooling1D {
    /** @nocollapse */
    static className: string;
    constructor(args: LayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Global max pooling operation for temporal data.
 *
 * Input Shape: 3D tensor with shape: `[batchSize, steps, features]`.
 *
 * Output Shape:2D tensor with shape: `[batchSize, features]`.
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function globalMaxPooling1d(args?: LayerArgs): GlobalMaxPooling1D;

declare class GlobalMaxPooling2D extends GlobalPooling2D {
    /** @nocollapse */
    static className: string;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Global max pooling operation for spatial data.
 *
 * Input shape:
 *   - If `dataFormat` is `CHANNEL_LAST`:
 *       4D tensor with shape: `[batchSize, rows, cols, channels]`.
 *   - If `dataFormat` is `CHANNEL_FIRST`:
 *       4D tensor with shape: `[batchSize, channels, rows, cols]`.
 *
 * Output shape:
 *   2D tensor with shape: `[batchSize, channels]`.
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function globalMaxPooling2d(args: GlobalPooling2DLayerArgs): GlobalMaxPooling2D;

/**
 * Abstract class for different global pooling 1D layers.
 */
declare abstract class GlobalPooling1D extends Layer {
    constructor(args: LayerArgs);
    computeOutputShape(inputShape: Shape): Shape;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Abstract class for different global pooling 2D layers.
 */
declare abstract class GlobalPooling2D extends Layer {
    protected dataFormat: DataFormat;
    constructor(args: GlobalPooling2DLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

declare interface GlobalPooling2DLayerArgs extends LayerArgs {
    /**
     * One of `CHANNEL_LAST` (default) or `CHANNEL_FIRST`.
     *
     * The ordering of the dimensions in the inputs. `CHANNEL_LAST` corresponds
     * to inputs with shape `[batch, height, width, channels[` while
     * `CHANNEL_FIRST` corresponds to inputs with shape
     * `[batch, channels, height, width]`.
     */
    dataFormat?: DataFormat;
}

/**
 * Glorot normal initializer, also called Xavier normal initializer.
 * It draws samples from a truncated normal distribution centered on 0
 * with `stddev = sqrt(2 / (fan_in + fan_out))`
 * where `fan_in` is the number of input units in the weight tensor
 * and `fan_out` is the number of output units in the weight tensor.
 *
 * Reference:
 *   Glorot & Bengio, AISTATS 2010
 *       http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function glorotNormal(args: SeedOnlyInitializerArgs): Initializer;

/**
 * Glorot uniform initializer, also called Xavier uniform initializer.
 * It draws samples from a uniform distribution within [-limit, limit]
 * where `limit` is `sqrt(6 / (fan_in + fan_out))`
 * where `fan_in` is the number of input units in the weight tensor
 * and `fan_out` is the number of output units in the weight tensor
 *
 * Reference:
 *   Glorot & Bengio, AISTATS 2010
 *       http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function glorotUniform(args: SeedOnlyInitializerArgs): Initializer;

declare namespace gpgpu_util {
    export {
        createVertexShader,
        createVertexBuffer,
        createIndexBuffer,
        getInternalFormatForFloat32MatrixTexture,
        createFloat32MatrixTexture,
        getInternalFormatForFloat16MatrixTexture,
        createFloat16MatrixTexture,
        getInternalFormatForUnsignedBytesMatrixTexture,
        createUnsignedBytesMatrixTexture,
        getInternalFormatForPackedMatrixTexture,
        createPackedMatrixTexture,
        getInternalFormatForFloat16PackedMatrixTexture,
        createFloat16PackedMatrixTexture,
        bindVertexProgramAttributeStreams,
        uploadDenseMatrixToTexture,
        uploadPixelDataToTexture,
        createBufferFromOutputTexture,
        downloadFloat32MatrixFromBuffer,
        downloadByteEncodedFloatMatrixFromOutputTexture,
        downloadPackedMatrixFromBuffer,
        downloadMatrixFromPackedOutputTexture
    }
}
export { gpgpu_util }

export declare class GPGPUContext {
    gl: WebGLRenderingContext;
    textureFloatExtension: {};
    textureHalfFloatExtension: {};
    colorBufferFloatExtension: {};
    colorBufferHalfFloatExtension: {};
    disjointQueryTimerExtension: WebGL2DisjointQueryTimerExtension | WebGL1DisjointQueryTimerExtension;
    vertexBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    framebuffer: WebGLFramebuffer;
    outputTexture: WebGLTexture | null;
    program: WebGLProgram | null;
    private disposed;
    private disjoint;
    private vertexShader;
    textureConfig: TextureConfig;
    constructor(gl?: WebGLRenderingContext);
    private get debug();
    dispose(): void;
    createFloat32MatrixTexture(rows: number, columns: number): WebGLTexture;
    createFloat16MatrixTexture(rows: number, columns: number): WebGLTexture;
    createUnsignedBytesMatrixTexture(rows: number, columns: number): WebGLTexture;
    uploadPixelDataToTexture(texture: WebGLTexture, pixels: PixelData_2 | ImageData | HTMLImageElement | HTMLCanvasElement | ImageBitmap): void;
    uploadDenseMatrixToTexture(texture: WebGLTexture, width: number, height: number, data: TypedArray_2): void;
    createFloat16PackedMatrixTexture(rows: number, columns: number): WebGLTexture;
    createPackedMatrixTexture(rows: number, columns: number): WebGLTexture;
    deleteMatrixTexture(texture: WebGLTexture): void;
    downloadByteEncodedFloatMatrixFromOutputTexture(texture: WebGLTexture, rows: number, columns: number): Float32Array;
    downloadPackedMatrixFromBuffer(buffer: WebGLBuffer, batch: number, rows: number, columns: number, physicalRows: number, physicalCols: number): Float32Array;
    downloadFloat32MatrixFromBuffer(buffer: WebGLBuffer, size: number): Float32Array;
    createBufferFromTexture(texture: WebGLTexture, rows: number, columns: number): WebGLBuffer;
    createAndWaitForFence(): Promise<void>;
    private createFence;
    downloadMatrixFromPackedTexture(texture: WebGLTexture, physicalRows: number, physicalCols: number): Float32Array;
    private vertexAttrsAreBound;
    createProgram(fragmentShader: WebGLShader): WebGLProgram;
    deleteProgram(program: WebGLProgram): void;
    setProgram(program: WebGLProgram | null): void;
    getUniformLocation(program: WebGLProgram, uniformName: string, shouldThrow?: boolean): WebGLUniformLocation;
    getAttributeLocation(program: WebGLProgram, attribute: string): number;
    getUniformLocationNoThrow(program: WebGLProgram, uniformName: string): WebGLUniformLocation;
    setInputMatrixTexture(inputMatrixTexture: WebGLTexture, uniformLocation: WebGLUniformLocation, textureUnit: number): void;
    setOutputMatrixTexture(outputMatrixTexture: WebGLTexture, rows: number, columns: number): void;
    setOutputPackedMatrixTexture(outputPackedMatrixTexture: WebGLTexture, rows: number, columns: number): void;
    setOutputMatrixWriteRegion(startRow: number, numRows: number, startColumn: number, numColumns: number): void;
    setOutputPackedMatrixWriteRegion(startRow: number, numRows: number, startColumn: number, numColumns: number): void;
    debugValidate(): void;
    executeProgram(): void;
    blockUntilAllProgramsCompleted(): void;
    private getQueryTimerExtension;
    private getQueryTimerExtensionWebGL2;
    private getQueryTimerExtensionWebGL1;
    beginQuery(): WebGLQuery;
    endQuery(): void;
    waitForQueryAndGetTime(query: WebGLQuery): Promise<number>;
    private getQueryTime;
    private isQueryAvailable;
    pollFence(fenceContext: FenceContext): Promise<void>;
    private itemsToPoll;
    pollItems(): void;
    private addItemToPoll;
    private bindTextureToFrameBuffer;
    private unbindTextureToFrameBuffer;
    private downloadMatrixDriver;
    private setOutputMatrixTextureDriver;
    private setOutputMatrixWriteRegionDriver;
    private throwIfDisposed;
    private throwIfNoProgram;
}

export declare interface GPGPUProgram {
    variableNames: string[];
    outputShape: number[];
    userCode: string;
    enableShapeUniforms?: boolean;
    /** If true, this program expects packed input textures. Defaults to false. */
    packedInputs?: boolean;
    /** If true, this program produces a packed texture. Defaults to false. */
    packedOutput?: boolean;
    /**
     * Affects what type of texture we allocate for the output. Defaults to
     * `TextureUsage.RENDER`.
     */
    outTexUsage?: TextureUsage;
    /**
     * The type of scheme to use when packing texels for the output values.
     * See `PackingScheme` for details. Defaults to `PackingScheme.SHARED_BATCH`.
     */
    outPackingScheme?: PackingScheme;
    customUniforms?: Array<{
        name: string;
        arrayIndex?: number;
        type: UniformType;
    }>;
}

/**
 * Provided `f(x)`, returns another function `g(x, dy?)`, which gives the
 * gradient of `f(x)` with respect to `x`.
 *
 * If `dy` is provided, the gradient of `f(x).mul(dy).sum()` with respect to
 * `x` is computed instead. `f(x)` must take a single tensor `x` and return a
 * single tensor `y`. If `f()` takes multiple inputs, use `tf.grads` instead.
 *
 * ```js
 * // f(x) = x ^ 2
 * const f = x => x.square();
 * // f'(x) = 2x
 * const g = tf.grad(f);
 *
 * const x = tf.tensor1d([2, 3]);
 * g(x).print();
 * ```
 *
 * ```js
 * // f(x) = x ^ 3
 * const f = x => x.pow(tf.scalar(3, 'int32'));
 * // f'(x) = 3x ^ 2
 * const g = tf.grad(f);
 * // f''(x) = 6x
 * const gg = tf.grad(g);
 *
 * const x = tf.tensor1d([2, 3]);
 * gg(x).print();
 * ```
 *
 * @param f The function f(x), to compute gradient for.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
export declare function grad(f: (x: Tensor) => Tensor): (x: TensorLike | Tensor, dy?: TensorLike | Tensor) => Tensor;

/** Config object for registering a gradient in the global registry. */
export declare interface GradConfig {
    kernelName: string;
    inputsToSave?: string[];
    saveAllInputs?: boolean;
    outputsToSave?: boolean[];
    gradFunc: GradFunc;
}

/** The function to run when computing a gradient during backprop. */
export declare type GradFunc = (dy: Tensor | Tensor[], saved: Tensor[], attrs: NamedAttrMap) => NamedGradientMap;

/**
 * Provided `f(x1, x2,...)`, returns another function `g([x1, x2,...], dy?)`,
 * which gives an array of gradients of `f()` with respect to each input
 * [`x1`,`x2`,...].
 *
 * If `dy` is passed when calling `g()`, the gradient of
 * `f(x1,...).mul(dy).sum()` with respect to each input is computed instead.
 * The provided `f` must take one or more tensors and return a single tensor
 * `y`. If `f()` takes a single input, we recommend using `tf.grad` instead.
 *
 * ```js
 * // f(a, b) = a * b
 * const f = (a, b) => a.mul(b);
 * // df / da = b, df / db = a
 * const g = tf.grads(f);
 *
 * const a = tf.tensor1d([2, 3]);
 * const b = tf.tensor1d([-2, -3]);
 * const [da, db] = g([a, b]);
 * console.log('da');
 * da.print();
 * console.log('db');
 * db.print();
 * ```
 *
 * @param f The function `f(x1, x2,...)` to compute gradients for.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
export declare function grads(f: (...args: Tensor[]) => Tensor): (args: Array<Tensor | TensorLike>, dy?: Tensor | TensorLike) => Tensor[];

export declare type GradSaveFunc = (save: Tensor[]) => void;

/**
 * A `tf.GraphModel` is a directed, acyclic graph built from a
 * SavedModel GraphDef and allows inference execution.
 *
 * A `tf.GraphModel` can only be created by loading from a model converted from
 * a [TensorFlow SavedModel](https://www.tensorflow.org/guide/saved_model) using
 * the command line converter tool and loaded via `tf.loadGraphModel`.
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */
export declare class GraphModel implements InferenceModel_2 {
    private modelUrl;
    private loadOptions;
    private executor;
    private version;
    private handler;
    private artifacts;
    private initializer;
    private resourceManager;
    private signature;
    get modelVersion(): string;
    get inputNodes(): string[];
    get outputNodes(): string[];
    get inputs(): TensorInfo_2[];
    get outputs(): TensorInfo_2[];
    get weights(): NamedTensorsMap;
    get metadata(): {};
    get modelSignature(): {};
    /**
     * @param modelUrl url for the model, or an `io.IOHandler`.
     * @param weightManifestUrl url for the weight file generated by
     * scripts/convert.py script.
     * @param requestOption options for Request, which allows to send credentials
     * and custom headers.
     * @param onProgress Optional, progress callback function, fired periodically
     * before the load is completed.
     */
    constructor(modelUrl: string | io_2.IOHandler, loadOptions?: io_2.LoadOptions);
    private findIOHandler;
    /**
     * Loads the model and weight files, construct the in memory weight map and
     * compile the inference graph.
     */
    load(): Promise<boolean>;
    /**
     * Synchronously construct the in memory weight map and
     * compile the inference graph. Also initialize hashtable if any.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */
    loadSync(artifacts: io_2.ModelArtifacts): boolean;
    /**
     * Save the configuration and/or weights of the GraphModel.
     *
     * An `IOHandler` is an object that has a `save` method of the proper
     * signature defined. The `save` method manages the storing or
     * transmission of serialized data ("artifacts") that represent the
     * model's topology and weights onto or via a specific medium, such as
     * file downloads, local storage, IndexedDB in the web browser and HTTP
     * requests to a server. TensorFlow.js provides `IOHandler`
     * implementations for a number of frequently used saving mediums, such as
     * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
     * for more details.
     *
     * This method also allows you to refer to certain types of `IOHandler`s
     * as URL-like string shortcuts, such as 'localstorage://' and
     * 'indexeddb://'.
     *
     * Example 1: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const modelUrl =
     *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
     * const model = await tf.loadGraphModel(modelUrl);
     * const zeros = tf.zeros([1, 224, 224, 3]);
     * model.predict(zeros).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * model.predict(zeros).print();
     * ```
     *
     * @param handlerOrURL An instance of `IOHandler` or a URL-like,
     * scheme-based string shortcut for `IOHandler`.
     * @param config Options for saving the model.
     * @returns A `Promise` of `SaveResult`, which summarizes the result of
     * the saving, such as byte sizes of the saved artifacts for the model's
     *   topology and weight values.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */
    save(handlerOrURL: io_2.IOHandler | string, config?: io_2.SaveConfig): Promise<io_2.SaveResult>;
    /**
     * Execute the inference for the input tensors.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
     * inputs params should be in either `tf.Tensor`[] if the input order is
     * fixed, or otherwise NamedTensorMap format.
     *
     * For model with multiple inputs, we recommend you use NamedTensorMap as the
     * input type, if you use `tf.Tensor`[], the order of the array needs to
     * follow the
     * order of inputNodes array. @see {@link GraphModel.inputNodes}
     *
     * You can also feed any intermediate nodes using the NamedTensorMap as the
     * input type. For example, given the graph
     *    InputNode => Intermediate => OutputNode,
     * you can execute the subgraph Intermediate => OutputNode by calling
     *    model.execute('IntermediateNode' : tf.tensor(...));
     *
     * This is useful for models that uses tf.dynamic_rnn, where the intermediate
     * state needs to be fed manually.
     *
     * For batch inference execution, the tensors for each input need to be
     * concatenated together. For example with mobilenet, the required input shape
     * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
     * If we are provide a batched data of 100 images, the input tensor should be
     * in the shape of [100, 244, 244, 3].
     *
     * @param config Prediction configuration for specifying the batch size and
     * output node names. Currently the batch size option is ignored for graph
     * model.
     *
     * @returns Inference result tensors. The output would be single `tf.Tensor`
     * if model has single output node, otherwise Tensor[] or NamedTensorMap[]
     * will be returned for model with multiple outputs.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    predict(inputs: Tensor_2 | Tensor_2[] | NamedTensorMap_2, config?: ModelPredictConfig_2): Tensor_2 | Tensor_2[] | NamedTensorMap_2;
    private normalizeInputs;
    private normalizeOutputs;
    /**
     * Executes inference for the model for given input tensors.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the Tensorflow model, if no
     * outputs are specified, the default outputs of the model would be used.
     * You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     *
     * @returns A single tensor if provided with a single output or no outputs
     * are provided and there is only one default output, otherwise return a
     * tensor array. The order of the tensor array is the same as the outputs
     * if provided, otherwise the order of outputNodes attribute of the model.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    execute(inputs: Tensor_2 | Tensor_2[] | NamedTensorMap_2, outputs?: string | string[]): Tensor_2 | Tensor_2[];
    /**
     * Executes inference for the model for given input tensors in async
     * fashion, use this method when your model contains control flow ops.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     *
     * @returns A Promise of single tensor if provided with a single output or
     * no outputs are provided and there is only one default output, otherwise
     * return a tensor map.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    executeAsync(inputs: Tensor_2 | Tensor_2[] | NamedTensorMap_2, outputs?: string | string[]): Promise<Tensor_2 | Tensor_2[]>;
    /**
     * Get intermediate tensors for model debugging mode (flag
     * KEEP_INTERMEDIATE_TENSORS is true).
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    getIntermediateTensors(): NamedTensorsMap;
    /**
     * Dispose intermediate tensors for model debugging mode (flag
     * KEEP_INTERMEDIATE_TENSORS is true).
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    disposeIntermediateTensors(): void;
    private convertTensorMapToTensorsMap;
    /**
     * Releases the memory used by the weight tensors and resourceManager.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    dispose(): void;
}

export declare interface GraphNode {
    inputs: Tensor_2[];
    attrs: {
        [key: string]: ValueType;
    };
}

export declare const Greater = "Greater";

export declare const greater: typeof greater_;

/**
 * Returns the truth value of (a > b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.greater(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function greater_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare const GreaterEqual = "GreaterEqual";

export declare const greaterEqual: typeof greaterEqual_;

/**
 * Returns the truth value of (a >= b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.greaterEqual(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function greaterEqual_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const greaterEqualImpl: SimpleBinaryKernelImpl;

export declare type GreaterEqualInputs = BinaryInputs;

declare const greaterImpl: SimpleBinaryKernelImpl;

export declare type GreaterInputs = BinaryInputs;

declare class GRU extends RNN {
    /** @nocollapse */
    static className: string;
    constructor(args: GRULayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict): T;
}

/**
 * Gated Recurrent Unit - Cho et al. 2014.
 *
 * This is an `RNN` layer consisting of one `GRUCell`. However, unlike
 * the underlying `GRUCell`, the `apply` method of `SimpleRNN` operates
 * on a sequence of inputs. The shape of the input (not including the first,
 * batch dimension) needs to be at least 2-D, with the first dimension being
 * time steps. For example:
 *
 * ```js
 * const rnn = tf.layers.gru({units: 8, returnSequences: true});
 *
 * // Create an input with 10 time steps.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the `GRUCell`'s number of units.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function gru(args: GRULayerArgs): GRU;

declare class GRUCell extends RNNCell {
    /** @nocollapse */
    static className: string;
    readonly units: number;
    readonly activation: Activation_2;
    readonly recurrentActivation: Activation_2;
    readonly useBias: boolean;
    readonly kernelInitializer: Initializer;
    readonly recurrentInitializer: Initializer;
    readonly biasInitializer: Initializer;
    readonly kernelRegularizer: Regularizer;
    readonly recurrentRegularizer: Regularizer;
    readonly biasRegularizer: Regularizer;
    readonly kernelConstraint: Constraint;
    readonly recurrentConstraint: Constraint;
    readonly biasConstraint: Constraint;
    readonly dropout: number;
    readonly recurrentDropout: number;
    readonly dropoutFunc: Function;
    readonly stateSize: number;
    readonly implementation: number;
    readonly DEFAULT_ACTIVATION = "tanh";
    readonly DEFAULT_RECURRENT_ACTIVATION: ActivationIdentifier;
    readonly DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
    readonly DEFAULT_RECURRENT_INITIALIZER = "orthogonal";
    readonly DEFAULT_BIAS_INITIALIZER: InitializerIdentifier;
    kernel: LayerVariable;
    recurrentKernel: LayerVariable;
    bias: LayerVariable;
    constructor(args: GRUCellLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Cell class for `GRU`.
 *
 * `GRUCell` is distinct from the `RNN` subclass `GRU` in that its
 * `apply` method takes the input data of only a single time step and returns
 * the cell's output at the time step, while `GRU` takes the input data
 * over a number of time steps. For example:
 *
 * ```js
 * const cell = tf.layers.gruCell({units: 2});
 * const input = tf.input({shape: [10]});
 * const output = cell.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10]: This is the cell's output at a single time step. The 1st
 * // dimension is the unknown batch size.
 * ```
 *
 * Instance(s) of `GRUCell` can be used to construct `RNN` layers. The
 * most typical use of this workflow is to combine a number of cells into a
 * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
 * RNN. For example:
 *
 * ```js
 * const cells = [
 *   tf.layers.gruCell({units: 4}),
 *   tf.layers.gruCell({units: 8}),
 * ];
 * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
 *
 * // Create an input with 10 time steps and a length-20 vector at each step.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the last `gruCell`'s number of units.
 * ```
 *
 * To create an `RNN` consisting of only *one* `GRUCell`, use the
 * `tf.layers.gru`.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function gruCell(args: GRUCellLayerArgs): GRUCell;

export declare interface GRUCellLayerArgs extends SimpleRNNCellLayerArgs {
    /**
     * Activation function to use for the recurrent step.
     *
     * Defaults to hard sigmoid (`hardSigmoid`).
     *
     * If `null`, no activation is applied.
     */
    recurrentActivation?: ActivationIdentifier;
    /**
     * Implementation mode, either 1 or 2.
     *
     * Mode 1 will structure its operations as a larger number of
     *   smaller dot products and additions.
     *
     * Mode 2 will batch them into fewer, larger operations. These modes will
     * have different performance profiles on different hardware and
     * for different applications.
     *
     * Note: For superior performance, TensorFlow.js always uses implementation
     * 2, regardless of the actual value of this configuration field.
     */
    implementation?: number;
    /**
     * GRU convention (whether to apply reset gate after or before matrix
     * multiplication). false = "before", true = "after" (only false is
     * supported).
     */
    resetAfter?: boolean;
}

export declare interface GRULayerArgs extends SimpleRNNLayerArgs {
    /**
     * Activation function to use for the recurrent step.
     *
     * Defaults to hard sigmoid (`hardSigmoid`).
     *
     * If `null`, no activation is applied.
     */
    recurrentActivation?: ActivationIdentifier;
    /**
     * Implementation mode, either 1 or 2.
     *
     * Mode 1 will structure its operations as a larger number of
     * smaller dot products and additions.
     *
     * Mode 2 will batch them into fewer, larger operations. These modes will
     * have different performance profiles on different hardware and
     * for different applications.
     *
     * Note: For superior performance, TensorFlow.js always uses implementation
     * 2, regardless of the actual value of this configuration field.
     */
    implementation?: number;
}

/**
 * Returns true if the new type can't encode the old type without loss of
 * precision.
 */
declare function hasEncodingLoss(oldType: DataType, newType: DataType): boolean;

declare function hasExtension(gl: WebGLRenderingContext, extensionName: string): boolean;

/**
 * He normal initializer.
 *
 * It draws samples from a truncated normal distribution centered on 0
 * with `stddev = sqrt(2 / fanIn)`
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * Reference:
 *     He et al., http://arxiv.org/abs/1502.01852
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function heNormal(args: SeedOnlyInitializerArgs): Initializer;

/**
 * He uniform initializer.
 *
 * It draws samples from a uniform distribution within [-limit, limit]
 * where `limit` is `sqrt(6 / fan_in)`
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * Reference:
 *     He et al., http://arxiv.org/abs/1502.01852
 *
 * @doc {heading: 'Initializers',namespace: 'initializers'}
 */
declare function heUniform(args: SeedOnlyInitializerArgs): Initializer;

declare function hexToLong(hex: string): Long;

/**
 * Callback that records events into a `History` object. This callback is
 * automatically applied to every TF.js Layers model. The `History` object
 * gets returned by the `fit` method of models.
 */
declare class History_2 extends BaseCallback {
    epoch: number[];
    history: {
        [key: string]: Array<number | Tensor_2>;
    };
    onTrainBegin(logs?: UnresolvedLogs): Promise<void>;
    onEpochEnd(epoch: number, logs?: UnresolvedLogs): Promise<void>;
    /**
     * Await the values of all losses and metrics.
     */
    syncData(): Promise<void>;
}
export { History_2 as History }

/**
 * Creates an IOHandler subtype that sends model artifacts to HTTP server.
 *
 * An HTTP request of the `multipart/form-data` mime type will be sent to the
 * `path` URL. The form data includes artifacts that represent the topology
 * and/or weights of the model. In the case of Keras-style `tf.Model`, two
 * blobs (files) exist in form-data:
 *   - A JSON file consisting of `modelTopology` and `weightsManifest`.
 *   - A binary weights file consisting of the concatenated weight values.
 * These files are in the same format as the one generated by
 * [tfjs_converter](https://js.tensorflow.org/tutorials/import-keras.html).
 *
 * The following code snippet exemplifies the client-side code that uses this
 * function:
 *
 * ```js
 * const model = tf.sequential();
 * model.add(
 *     tf.layers.dense({units: 1, inputShape: [100], activation: 'sigmoid'}));
 *
 * const saveResult = await model.save(tf.io.http(
 *     'http://model-server:5000/upload', {requestInit: {method: 'PUT'}}));
 * console.log(saveResult);
 * ```
 *
 * If the default `POST` method is to be used, without any custom parameters
 * such as headers, you can simply pass an HTTP or HTTPS URL to `model.save`:
 *
 * ```js
 * const saveResult = await model.save('http://model-server:5000/upload');
 * ```
 *
 * The following GitHub Gist
 * https://gist.github.com/dsmilkov/1b6046fd6132d7408d5257b0976f7864
 * implements a server based on [flask](https://github.com/pallets/flask) that
 * can receive the request. Upon receiving the model artifacts via the requst,
 * this particular server reconsistutes instances of [Keras
 * Models](https://keras.io/models/model/) in memory.
 *
 *
 * @param path A URL path to the model.
 *   Can be an absolute HTTP path (e.g.,
 *   'http://localhost:8000/model-upload)') or a relative path (e.g.,
 *   './model-upload').
 * @param requestInit Request configurations to be used when sending
 *    HTTP request to server using `fetch`. It can contain fields such as
 *    `method`, `credentials`, `headers`, `mode`, etc. See
 *    https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
 *    for more information. `requestInit` must not have a body, because the
 * body will be set by TensorFlow.js. File blobs representing the model
 * topology (filename: 'model.json') and the weights of the model (filename:
 * 'model.weights.bin') will be appended to the body. If `requestInit` has a
 * `body`, an Error will be thrown.
 * @param loadOptions Optional configuration for the loading. It includes the
 *   following fields:
 *   - weightPathPrefix Optional, this specifies the path prefix for weight
 *     files, by default this is calculated from the path param.
 *   - fetchFunc Optional, custom `fetch` function. E.g., in Node.js,
 *     the `fetch` from node-fetch can be used here.
 *   - onProgress Optional, progress callback function, fired periodically
 *     before the load is completed.
 * @returns An instance of `IOHandler`.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Loading',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
declare function http(path: string, loadOptions?: LoadOptions): IOHandler;

export declare const Identity = "Identity";

/**
 * Initializer that generates the identity matrix.
 * Only use for square 2D matrices.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function identity(args: IdentityArgs): Initializer;

declare interface IdentityArgs {
    /**
     * Multiplicative factor to apply to the identity matrix.
     */
    gain?: number;
}

export declare type IdentityInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const IFFT = "IFFT";

export declare const ifft: typeof ifft_;

/**
 * Inverse fast Fourier transform.
 *
 * Computes the inverse 1-dimensional discrete Fourier transform over the
 * inner-most dimension of input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 * const imag = tf.tensor1d([1, 2, 3]);
 * const x = tf.complex(real, imag);
 *
 * x.ifft().print();  // tf.spectral.ifft(x).print();
 * ```
 * @param input The complex input to compute an ifft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
declare function ifft_(input: Tensor): Tensor;

export declare type IFFTInputs = Pick<NamedTensorInfoMap, 'input'>;

export declare const Imag = "Imag";

export declare const imag: typeof imag_;

/**
 * Returns the imaginary part of a complex (or real) tensor.
 *
 * Given a tensor input, this operation returns a tensor of type float that is
 * the imaginary part of each element in input considered as a complex number.
 * If input is real, a tensor of all zeros is returned.
 *
 * ```js
 * const x = tf.complex([-2.25, 3.25], [4.75, 5.75]);
 * tf.imag(x).print();
 * ```
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function imag_<T extends Tensor>(input: T | TensorLike): T;

export declare const image: {
    flipLeftRight: (image: TensorLike | Tensor4D) => Tensor4D;
    grayscaleToRGB: <T extends Tensor2D | Tensor3D | Tensor4D | Tensor5D | Tensor6D>(image: TensorLike | T) => T;
    resizeNearestNeighbor: <T_1 extends Tensor3D | Tensor4D>(images: TensorLike | T_1, size: [number, number], alignCorners?: boolean, halfPixelCenters?: boolean) => T_1;
    resizeBilinear: <T_2 extends Tensor3D | Tensor4D>(images: TensorLike | T_2, size: [number, number], alignCorners?: boolean, halfPixelCenters?: boolean) => T_2;
    rotateWithOffset: (image: TensorLike | Tensor4D, radians: number, fillValue?: number | [number, number, number], center?: number | [number, number]) => Tensor4D;
    cropAndResize: (image: TensorLike | Tensor4D, boxes: TensorLike | Tensor2D, boxInd: TensorLike | Tensor1D, cropSize: [number, number], method?: "nearest" | "bilinear", extrapolationValue?: number) => Tensor4D;
    nonMaxSuppression: (boxes: TensorLike | Tensor2D, scores: TensorLike | Tensor1D, maxOutputSize: number, iouThreshold?: number, scoreThreshold?: number) => Tensor1D;
    nonMaxSuppressionAsync: (boxes: TensorLike | Tensor2D, scores: TensorLike | Tensor1D, maxOutputSize: number, iouThreshold?: number, scoreThreshold?: number) => Promise<Tensor1D>;
    nonMaxSuppressionWithScore: (boxes: TensorLike | Tensor2D, scores: TensorLike | Tensor1D, maxOutputSize: number, iouThreshold?: number, scoreThreshold?: number, softNmsSigma?: number) => NamedTensorMap;
    nonMaxSuppressionWithScoreAsync: (boxes: TensorLike | Tensor2D, scores: TensorLike | Tensor1D, maxOutputSize: number, iouThreshold?: number, scoreThreshold?: number, softNmsSigma?: number) => Promise<NamedTensorMap>;
    nonMaxSuppressionPadded: (boxes: TensorLike | Tensor2D, scores: TensorLike | Tensor1D, maxOutputSize: number, iouThreshold?: number, scoreThreshold?: number, padToMaxOutputSize?: boolean) => NamedTensorMap;
    nonMaxSuppressionPaddedAsync: (boxes: TensorLike | Tensor2D, scores: TensorLike | Tensor1D, maxOutputSize: number, iouThreshold?: number, scoreThreshold?: number, padToMaxOutputSize?: boolean) => Promise<NamedTensorMap>;
    threshold: (image: TensorLike | Tensor3D, method?: string, inverted?: boolean, threshValue?: number) => Tensor3D;
    transform: (image: TensorLike | Tensor4D, transforms: TensorLike | Tensor2D, interpolation?: "nearest" | "bilinear", fillMode?: "nearest" | "reflect" | "constant" | "wrap", fillValue?: number, outputShape?: [number, number]) => Tensor4D;
};

export declare type ImagInputs = Pick<NamedTensorInfoMap, 'input'>;

/**
 * Computes the location (multidimensional index) in a tensor/multidimentional
 * array for a given flat index.
 *
 * @param index Index in flat array.
 * @param rank Rank of tensor.
 * @param strides Strides of tensor.
 */
declare function indexToLoc(index: number, rank: number, strides: number[]): number[];

declare function inferDtype(values: TensorLike): DataType;

/**
 * Common interface for a machine learning model that can do inference.
 */
export declare interface InferenceModel {
    /**
     * Return the array of input tensor info.
     */
    readonly inputs: ModelTensorInfo[];
    /**
     * Return the array of output tensor info.
     */
    readonly outputs: ModelTensorInfo[];
    /**
     * Execute the inference for the input tensors.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a Tensor. For models with multiple inputs, inputs
     * params should be in either Tensor[] if the input order is fixed, or
     * otherwise NamedTensorMap format.
     * For batch inference execution, the tensors for each input need to be
     * concatenated together. For example with mobilenet, the required input shape
     * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
     * If we are provide a batched data of 100 images, the input tensor should be
     * in the shape of [100, 244, 244, 3].
     *
     * @param config Prediction configuration for specifying the batch size.
     *
     * @returns Inference result tensors. The output would be single Tensor if
     * model has single output node, otherwise Tensor[] or NamedTensorMap[] will
     * be returned for model with multiple outputs.
     */
    predict(inputs: Tensor | Tensor[] | NamedTensorMap, config: ModelPredictConfig): Tensor | Tensor[] | NamedTensorMap;
    /**
     * Single Execute the inference for the input tensors and return activation
     * values for specified output node names without batching.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a Tensor. For models with multiple inputs, inputs
     * params should be in either Tensor[] if the input order is fixed, or
     * otherwise NamedTensorMap format.
     *
     * @param outputs string|string[]. List of output node names to retrieve
     * activation from.
     *
     * @returns Activation values for the output nodes result tensors. The return
     * type matches specified parameter outputs type. The output would be single
     * Tensor if single output is specified, otherwise Tensor[] for multiple
     * outputs.
     */
    execute(inputs: Tensor | Tensor[] | NamedTensorMap, outputs: string | string[]): Tensor | Tensor[];
}

/**
 * Given the full size of the array and a shape that may contain -1 as the
 * implicit dimension, returns the inferred shape where -1 is replaced.
 * E.g. For shape=[2, -1, 3] and size=24, it will return [2, 4, 3].
 *
 * @param shape The shape, which may contain -1 in some dimension.
 * @param size The full size (number of elements) of the array.
 * @return The inferred shape where -1 is replaced with the inferred size.
 */
declare function inferFromImplicitShape(shape: number[], size: number): number[];

/**
 * Initializer base class.
 *
 * @doc {
 *   heading: 'Initializers', subheading: 'Classes', namespace: 'initializers'}
 */
declare abstract class Initializer extends serialization_2.Serializable {
    fromConfigUsesCustomObjects(): boolean;
    /**
     * Generate an initial value.
     * @param shape
     * @param dtype
     * @return The init value.
     */
    abstract apply(shape: Shape, dtype?: DataType_2): Tensor_2;
    getConfig(): serialization_2.ConfigDict;
}

/** @docinline */
declare type InitializerIdentifier = 'constant' | 'glorotNormal' | 'glorotUniform' | 'heNormal' | 'heUniform' | 'identity' | 'leCunNormal' | 'leCunUniform' | 'ones' | 'orthogonal' | 'randomNormal' | 'randomUniform' | 'truncatedNormal' | 'varianceScaling' | 'zeros' | string;

declare namespace initializers {
    export {
        zeros_2 as zeros,
        ones_2 as ones,
        constant,
        randomUniform_2 as randomUniform,
        randomNormal_2 as randomNormal,
        truncatedNormal_2 as truncatedNormal,
        identity,
        varianceScaling,
        glorotUniform,
        glorotNormal,
        heNormal,
        heUniform,
        leCunNormal,
        leCunUniform,
        orthogonal
    }
}
export { initializers }

/**
 * Used to instantiate an input to a model as a `tf.SymbolicTensor`.
 *
 * Users should call the `input` factory function for
 * consistency with other generator functions.
 *
 * Example:
 *
 * ```js
 * // Defines a simple logistic regression model with 32 dimensional input
 * // and 3 dimensional output.
 * const x = tf.input({shape: [32]});
 * const y = tf.layers.dense({units: 3, activation: 'softmax'}).apply(x);
 * const model = tf.model({inputs: x, outputs: y});
 * model.predict(tf.ones([2, 32])).print();
 * ```
 *
 * Note: `input` is only necessary when using `model`. When using
 * `sequential`, specify `inputShape` for the first layer or use `inputLayer`
 * as the first layer.
 *
 * @doc {heading: 'Models', subheading: 'Inputs'}
 */
export declare function input(config: InputConfig): SymbolicTensor;

/**
 * Config for the Input function.
 *
 * Note: You should provide only shape or batchShape (not both).
 * If only shape is provided, then the batchShape becomes
 * [null].concat(inputShape).
 */
declare interface InputConfig {
    /**
     * A shape, not including the batch size. For instance, `shape=[32]`
     * indicates that the expected input will be batches of 32-dimensional
     * vectors.
     */
    shape?: Shape;
    /**
     * A shape tuple (integer), including the batch size. For instance,
     * `batchShape=[10, 32]` indicates that the expected input will be batches of
     * 10 32-dimensional vectors. `batchShape=[null, 32]` indicates batches of an
     * arbitrary number of 32-dimensional vectors.
     */
    batchShape?: Shape;
    /**
     * An optional name string for the layer. Should be unique in a model (do not
     * reuse the same name twice). It will be autogenerated if it isn't provided.
     */
    name?: string;
    dtype?: DataType_2;
    /**
     * A boolean specifying whether the placeholder to be created is sparse.
     */
    sparse?: boolean;
}

declare class InputLayer extends Layer {
    /** @nocollapse */
    static readonly className = "InputLayer";
    sparse: boolean;
    constructor(args: InputLayerArgs);
    apply(inputs: Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[], kwargs?: Kwargs): Tensor_2 | Tensor_2[] | SymbolicTensor;
    dispose(): DisposeResult;
    getConfig(): serialization_2.ConfigDict;
}

/**
 * An input layer is an entry point into a `tf.LayersModel`.
 *
 * `InputLayer` is generated automatically for `tf.Sequential`` models by
 * specifying the `inputshape` or `batchInputShape` for the first layer.  It
 * should not be specified explicitly. However, it can be useful sometimes,
 * e.g., when constructing a sequential model from a subset of another
 * sequential model's layers. Like the code snippet below shows.
 *
 * ```js
 * // Define a model which simply adds two inputs.
 * const model1 = tf.sequential();
 * model1.add(tf.layers.dense({inputShape: [4], units: 3, activation: 'relu'}));
 * model1.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
 * model1.summary();
 * model1.predict(tf.zeros([1, 4])).print();
 *
 * // Construct another model, reusing the second layer of `model1` while
 * // not using the first layer of `model1`. Note that you cannot add the second
 * // layer of `model` directly as the first layer of the new sequential model,
 * // because doing so will lead to an error related to the fact that the layer
 * // is not an input layer. Instead, you need to create an `inputLayer` and add
 * // it to the new sequential model before adding the reused layer.
 * const model2 = tf.sequential();
 * // Use an inputShape that matches the input shape of `model1`'s second
 * // layer.
 * model2.add(tf.layers.inputLayer({inputShape: [3]}));
 * model2.add(model1.layers[1]);
 * model2.summary();
 * model2.predict(tf.zeros([1, 3])).print();
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Inputs', namespace: 'layers'}
 */
declare function inputLayer(args: InputLayerArgs): InputLayer;

/**
 * Constructor arguments for InputLayer.
 *
 * Note: You should provide only inputShape or batchInputShape (not both).
 * If only inputShape is provided, then the batchInputShape is determined by
 * the batchSize argument and the inputShape: [batchSize].concat(inputShape).
 */
declare interface InputLayerArgs {
    /** Input shape, not including the batch axis. */
    inputShape?: Shape;
    /** Optional input batch size (integer or null). */
    batchSize?: number;
    /** Batch input shape, including the batch axis. */
    batchInputShape?: Shape;
    /** Datatype of the input.  */
    dtype?: DataType_2;
    /**
     * Whether the placeholder created is meant to be sparse.
     */
    sparse?: boolean;
    /** Name of the layer. */
    name?: string;
}

/**
 * Specifies the ndim, dtype and shape of every input to a layer.
 *
 * Every layer should expose (if appropriate) an `inputSpec` attribute:
 * a list of instances of InputSpec (one per input tensor).
 *
 * A null entry in a shape is compatible with any dimension,
 * a null shape is compatible with any shape.
 */
export declare class InputSpec {
    /** Expected datatype of the input. */
    dtype?: DataType_2;
    /** Expected shape of the input (may include null for unchecked axes). */
    shape?: Shape;
    /** Expected rank of the input. */
    ndim?: number;
    /** Maximum rank of the input. */
    maxNDim?: number;
    /** Minimum rank of the input. */
    minNDim?: number;
    /** Dictionary mapping integer axes to a specific dimension value. */
    axes?: {
        [axis: number]: number;
    };
    constructor(args: InputSpecArgs);
}

/**
 * Constructor arguments for InputSpec.
 */
declare interface InputSpecArgs {
    /** Expected datatype of the input. */
    dtype?: DataType_2;
    /** Expected shape of the input (may include null for unchecked axes). */
    shape?: Shape;
    /** Expected rank of the input. */
    ndim?: number;
    /** Maximum rank of the input. */
    maxNDim?: number;
    /** Minimum rank of the input. */
    minNDim?: number;
    /** Dictionary mapping integer axes to a specific dimension value. */
    axes?: {
        [axis: number]: number;
    };
}

declare type InterpolationFormat = 'nearest' | 'bilinear';

export declare const inTopKAsync: typeof inTopKAsync_;

/**
 * Returns whether the targets are in the top K predictions.
 *
 * ```js
 * const predictions = tf.tensor2d([[20, 10, 40, 30], [30, 50, -20, 10]]);
 * const targets = tf.tensor1d([2, 0]);
 * const precision = await tf.inTopKAsync(predictions, targets);
 * precision.print();
 * ```
 * @param predictions 2-D or higher `tf.Tensor` with last dimension being
 *     at least `k`.
 * @param targets 1-D or higher `tf.Tensor`.
 * @param k Optional Number of top elements to look at for computing precision,
 *     default to 1.
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
declare function inTopKAsync_<T extends Tensor, U extends Tensor>(predictions: T | TensorLike, targets: U | TensorLike, k?: number): Promise<U>;

declare namespace io {
    export {
        copyModel,
        listModels,
        moveModel,
        removeModel,
        browserFiles,
        browserHTTPRequest,
        concatenateArrayBuffers,
        decodeWeights,
        encodeWeights,
        fromMemory,
        getLoadHandlers,
        getModelArtifactsForJSON,
        getModelArtifactsInfoForJSON,
        getSaveHandlers,
        http,
        IOHandler,
        isHTTPScheme,
        LoadHandler,
        LoadOptions,
        loadWeights,
        ModelArtifacts,
        ModelArtifactsInfo,
        ModelJSON,
        ModelStoreManager,
        OnProgressCallback,
        registerLoadRouter,
        registerSaveRouter,
        RequestDetails,
        SaveConfig,
        SaveHandler,
        SaveResult,
        TrainingConfig,
        WeightGroup,
        weightsLoaderFactory,
        WeightsManifestConfig,
        WeightsManifestEntry,
        withSaveHandler
    }
}
export { io }

/**
 * Interface for a model import/export handler.
 *
 * The `save` and `load` handlers are both optional, in order to allow handlers
 * that support only saving or loading.
 */
declare interface IOHandler {
    save?: SaveHandler;
    load?: LoadHandler;
}

declare type IORouter = (url: string | string[], loadOptions?: LoadOptions) => IOHandler;

export declare const irfft: typeof irfft_;

/**
 * Inversed real value input fast Fourier transform.
 *
 * Computes the 1-dimensional inversed discrete Fourier transform over the
 * inner-most dimension of the real input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 * const imag = tf.tensor1d([0, 0, 0]);
 * const x = tf.complex(real, imag);
 *
 * x.irfft().print();
 * ```
 * @param input The real value input to compute an irfft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
declare function irfft_(input: Tensor): Tensor;

declare function isBoolean(value: {}): boolean;

declare function isBrowser(): boolean;

declare function isCapableOfRenderingToFloatTexture(webGLVersion: number): boolean;

/**
 * Check if we can download values from a float/half-float texture.
 *
 * Note that for performance reasons we use binding a texture to a framebuffer
 * as a proxy for ability to download float values later using readPixels. The
 * texture params of this texture will not match those in readPixels exactly
 * but if we are unable to bind some kind of float texture to the frameBuffer
 * then we definitely will not be able to read float values from it.
 */
declare function isDownloadFloatTextureEnabled(webGLVersion: number): boolean;

export declare const IsFinite = "IsFinite";

/**
 * Returns which elements of x are finite.
 *
 * ```js
 * const x = tf.tensor1d([NaN, Infinity, -Infinity, 0, 1]);
 *
 * x.isFinite().print();  // or tf.isNaN(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function isFinite_<T extends Tensor>(x: T | TensorLike): T;

declare const isFinite_2: typeof isFinite_;
export { isFinite_2 as isFinite }

export declare type IsFiniteInputs = UnaryInputs;

declare function isFunction(f: Function): boolean;

declare function isHTTPScheme(url: string): boolean;

/** Determines if an axes permutation is the identity permutation. */
declare function isIdentityPermutation(perm: number[]): boolean;

export declare const IsInf = "IsInf";

export declare const isInf: typeof isInf_;

/**
 * Returns which elements of x are Infinity or -Infinity.
 *
 * ```js
 * const x = tf.tensor1d([NaN, Infinity, -Infinity, 0, 1]);
 *
 * x.isInf().print();  // or tf.isNaN(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function isInf_<T extends Tensor>(x: T | TensorLike): T;

export declare type IsInfInputs = UnaryInputs;

declare function isInt(a: number): boolean;

declare function isMobile(nav?: Navigator): boolean;

export declare const IsNan = "IsNan";

/**
 * RReturns which elements of x are NaN.
 *
 * ```js
 * const x = tf.tensor1d([NaN, Infinity, -Infinity, 0, 1]);
 *
 * x.isNaN().print();  // or tf.isNaN(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function isNaN_<T extends Tensor>(x: T | TensorLike): T;

declare const isNaN_2: typeof isNaN_;
export { isNaN_2 as isNaN }

export declare type IsNanInputs = UnaryInputs;

declare function isNumber(value: {}): boolean;

/**
 * This method asserts whether an object is a Promise instance.
 * @param object
 */
declare function isPromise(object: any): object is Promise<unknown>;

/**
 * This determines whether reshaping a packed texture requires rearranging
 * the data within the texture, assuming 2x2 packing.
 */
declare function isReshapeFree(shape1: number[], shape2: number[]): boolean;

declare function isScalarShape(shape: number[]): boolean;

/**
 * Returns true if the slice occupies a continous set of elements in the
 * 'flat' space.
 */
declare function isSliceContinous(shape: number[], begin: number[], size: number[]): boolean;

/** Returns true if the value is a string. */
declare function isString(value: {}): value is string;

declare function isTensorInList(tensor: Tensor, tensorList: Tensor[]): boolean;

declare function isTypedArray(a: {}): a is Float32Array | Int32Array | Uint8Array | Uint8ClampedArray;

/** Returns true if the dtype is valid. */
declare function isValidDtype(dtype: DataType): boolean;

declare function isWebGLFenceEnabled(webGLVersion: number): boolean;

declare function isWebGLVersionEnabled(webGLVersion: 1 | 2): boolean;

/**
 * Keeps a `tf.Tensor` generated inside a `tf.tidy` from being disposed
 * automatically.
 *
 * ```js
 * let b;
 * const y = tf.tidy(() => {
 *   const one = tf.scalar(1);
 *   const a = tf.scalar(2);
 *
 *   // b will not be cleaned up by the tidy. a and one will be cleaned up
 *   // when the tidy ends.
 *   b = tf.keep(a.square());
 *
 *   console.log('numTensors (in tidy): ' + tf.memory().numTensors);
 *
 *   // The value returned inside the tidy function will return
 *   // through the tidy, in this case to the variable y.
 *   return b.add(one);
 * });
 *
 * console.log('numTensors (outside tidy): ' + tf.memory().numTensors);
 * console.log('y:');
 * y.print();
 * console.log('b:');
 * b.print();
 * ```
 *
 * @param result The tensor to keep from being disposed.
 *
 * @doc {heading: 'Performance', subheading: 'Memory'}
 */
export declare function keep<T extends Tensor>(result: T): T;

declare namespace kernel_impls {
    export {
        nonMaxSuppressionV3Impl,
        nonMaxSuppressionV4Impl,
        nonMaxSuppressionV5Impl,
        whereImpl
    }
}
export { kernel_impls }

/**
 * The interface that defines the kernels that should be implemented when
 * adding a new backend. New backends don't need to implement every one of the
 * methods, this can be done gradually (throw an error for unimplemented
 * methods).
 */
export declare class KernelBackend implements TensorStorage, Backend, BackendTimer {
    refCount(dataId: DataId_2): number;
    incRef(dataId: DataId_2): void;
    timerAvailable(): boolean;
    time(f: () => void): Promise<BackendTimingInfo>;
    read(dataId: object): Promise<BackendValues>;
    readSync(dataId: object): BackendValues;
    numDataIds(): number;
    disposeData(dataId: object, force?: boolean): boolean;
    write(values: BackendValues, shape: number[], dtype: DataType): DataId_2;
    move(dataId: DataId_2, values: BackendValues, shape: number[], dtype: DataType, refCount: number): void;
    memory(): {
        unreliable: boolean;
        reasons?: string[];
    };
    /** Returns the highest precision for floats in bits (e.g. 16 or 32) */
    floatPrecision(): 16 | 32;
    /** Returns the smallest representable number.  */
    epsilon(): number;
    dispose(): void;
}

/** Config object for registering a kernel in the global registry. */
export declare interface KernelConfig {
    kernelName: string;
    backendName: string;
    kernelFunc: KernelFunc;
    setupFunc?: KernelSetupFunc;
    disposeFunc?: KernelDisposeFunc;
}

/** Function that gets called right before the backend is disposed. */
export declare type KernelDisposeFunc = KernelSetupFunc;

/** Specifies the code to run when executing a kernel. */
export declare type KernelFunc = (params: {
    inputs: NamedTensorInfoMap;
    backend: {};
    attrs?: NamedAttrMap;
}) => TensorInfo | TensorInfo[];

declare type KernelInfo = {
    name: string;
    bytesAdded: number;
    totalBytesSnapshot: number;
    tensorsAdded: number;
    totalTensorsSnapshot: number;
    inputShapes: number[][];
    outputShapes: number[][];
    kernelTimeMs: number | {
        error: string;
    } | Promise<number | {
        error: string;
    }>;
    extraInfo: string | Promise<string>;
};

/** Function that gets called after the backend initializes. */
export declare type KernelSetupFunc = (backend: {}) => void;

/**
 * Type representing a loosely-typed bundle of keyword arguments.
 *
 * This is a looser type than PyJsonDict/serialization.ConfigDict as it
 * can contain arbitrary objects as its values.  It is most appropriate
 * for functions that pass through keyword arguments to other functions
 * without knowledge of the structure.  If the function can place type
 * restrictions on the keyword arguments, it should via the Config
 * interface convention used throughout.
 */
declare type Kwargs = {
    [key: string]: any;
};

/**
 * Regularizer for L1 regularization.
 *
 * Adds a term to the loss to penalize large weights:
 * loss += sum(l1 * abs(x))
 * @param args l1 config.
 *
 * @doc {heading: 'Regularizers', namespace: 'regularizers'}
 */
declare function l1(config?: L1Args): Regularizer;

declare interface L1Args {
    /** L1 regularization rate. Defaults to 0.01. */
    l1: number;
}

/**
 * Regularizer for L1 and L2 regularization.
 *
 * Adds a term to the loss to penalize large weights:
 * loss += sum(l1 * abs(x)) + sum(l2 * x^2)
 *
 * @doc {heading: 'Regularizers', namespace: 'regularizers'}
 */
declare function l1l2(config?: L1L2Args): Regularizer;

declare interface L1L2Args {
    /** L1 regularization rate. Defaults to 0.01. */
    l1?: number;
    /** L2 regularization rate. Defaults to 0.01. */
    l2?: number;
}

/**
 * Regularizer for L2 regularization.
 *
 * Adds a term to the loss to penalize large weights:
 * loss += sum(l2 * x^2)
 * @param args l2 config.
 *
 * @doc {heading: 'Regularizers', namespace: 'regularizers'}
 */
declare function l2(config?: L2Args): Regularizer;

declare interface L2Args {
    /** L2 regularization rate. Defaults to 0.01. */
    l2: number;
}

/**
 * A layer is a grouping of operations and weights that can be composed to
 * create a `tf.LayersModel`.
 *
 * Layers are constructed by using the functions under the
 * [tf.layers](#Layers-Basic) namespace.
 *
 * @doc {heading: 'Layers', subheading: 'Classes', namespace: 'layers'}
 */
declare abstract class Layer extends serialization_2.Serializable {
    /** Name for this layer. Must be unique within a model. */
    name: string;
    /**
     * List of InputSpec class instances.
     *
     * Each entry describes one required input:
     * - ndim
     * - dtype
     * A layer with `n` input tensors must have an `inputSpec` of length `n`.
     */
    inputSpec: InputSpec[];
    supportsMasking: boolean;
    /** Whether the layer weights will be updated during training. */
    protected trainable_: boolean;
    batchInputShape: Shape;
    dtype: DataType_2;
    initialWeights: Tensor_2[];
    inboundNodes: Node_2[];
    outboundNodes: Node_2[];
    activityRegularizer: Regularizer;
    protected _trainableWeights: LayerVariable[];
    private _nonTrainableWeights;
    private _losses;
    private _updates;
    private _built;
    private _callHook;
    private _addedWeightNames;
    readonly id: number;
    protected _stateful: boolean;
    protected _refCount: number | null;
    private fastWeightInitDuringBuild;
    constructor(args?: LayerArgs);
    /**
     * Converts a layer and its index to a unique (immutable type) name.
     * This function is used internally with `this.containerNodes`.
     * @param layer The layer.
     * @param nodeIndex The layer's position (e.g. via enumerate) in a list of
     *   nodes.
     *
     * @returns The unique name.
     */
    protected static nodeKey(layer: Layer, nodeIndex: number): string;
    /**
     * Returns this.inboundNode at index nodeIndex.
     *
     * Porting note: This is a replacement for _get_node_attribute_at_index()
     * @param nodeIndex
     * @param attrName The name of the attribute related to request for this node.
     */
    private getNodeAtIndex;
    /**
     * Retrieves the input tensor(s) of a layer at a given node.
     *
     * @param nodeIndex Integer, index of the node from which to retrieve the
     *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
     *   was called.
     *
     * @return A tensor (or list of tensors if the layer has multiple inputs).
     */
    getInputAt(nodeIndex: number): SymbolicTensor | SymbolicTensor[];
    /**
     * Retrieves the output tensor(s) of a layer at a given node.
     *
     * @param nodeIndex Integer, index of the node from which to retrieve the
     *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
     *   was called.
     *
     * @return A tensor (or list of tensors if the layer has multiple outputs).
     */
    getOutputAt(nodeIndex: number): SymbolicTensor | SymbolicTensor[];
    /**
     * Retrieves the input tensor(s) of a layer.
     *
     * Only applicable if the layer has exactly one inbound node,
     * i.e. if it is connected to one incoming layer.
     *
     * @return Input tensor or list of input tensors.
     *
     * @exception AttributeError if the layer is connected to more than one
     *   incoming layers.
     */
    get input(): SymbolicTensor | SymbolicTensor[];
    /**
     * Retrieves the output tensor(s) of a layer.
     *
     * Only applicable if the layer has exactly one inbound node,
     * i.e. if it is connected to one incoming layer.
     *
     * @return Output tensor or list of output tensors.
     *
     * @exception AttributeError if the layer is connected to more than one
     *   incoming layers.
     */
    get output(): SymbolicTensor | SymbolicTensor[];
    get losses(): RegularizerFn[];
    /**
     * Retrieves the Layer's current loss values.
     *
     * Used for regularizers during training.
     */
    calculateLosses(): Scalar_2[];
    get updates(): Tensor_2[];
    get built(): boolean;
    set built(built: boolean);
    get trainable(): boolean;
    set trainable(trainable: boolean);
    get trainableWeights(): LayerVariable[];
    set trainableWeights(weights: LayerVariable[]);
    get nonTrainableWeights(): LayerVariable[];
    set nonTrainableWeights(weights: LayerVariable[]);
    /**
     * The concatenation of the lists trainableWeights and nonTrainableWeights
     * (in this order).
     */
    get weights(): LayerVariable[];
    get stateful(): boolean;
    /**
     * Reset the states of the layer.
     *
     * This method of the base Layer class is essentially a no-op.
     * Subclasses that are stateful (e.g., stateful RNNs) should override this
     * method.
     */
    resetStates(): void;
    /**
     * Checks compatibility between the layer and provided inputs.
     *
     * This checks that the tensor(s) `input`
     * verify the input assumptions of the layer
     * (if any). If not, exceptions are raised.
     *
     * @param inputs Input tensor or list of input tensors.
     *
     * @exception ValueError in case of mismatch between
     *   the provided inputs and the expectations of the layer.
     */
    protected assertInputCompatibility(inputs: Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[]): void;
    /**
     * This is where the layer's logic lives.
     *
     * @param inputs Input tensor, or list/tuple of input tensors.
     * @param kwargs Additional keyword arguments.
     *
     * @return A tensor or list/tuple of tensors.
     */
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    protected invokeCallHook(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): void;
    /**
     * Set call hook.
     * This is currently used for testing only.
     * @param callHook
     */
    setCallHook(callHook: CallHook): void;
    /**
     * Clear call hook.
     * This is currently used for testing only.
     */
    clearCallHook(): void;
    /**
     * Builds or executes a `Layer's logic.
     *
     * When called with `tf.Tensor`(s), execute the `Layer`s computation and
     * return Tensor(s). For example:
     *
     * ```js
     * const denseLayer = tf.layers.dense({
     *   units: 1,
     *   kernelInitializer: 'zeros',
     *   useBias: false
     * });
     *
     * // Invoke the layer's apply() method with a `tf.Tensor` (with concrete
     * // numeric values).
     * const input = tf.ones([2, 2]);
     * const output = denseLayer.apply(input);
     *
     * // The output's value is expected to be [[0], [0]], due to the fact that
     * // the dense layer has a kernel initialized to all-zeros and does not have
     * // a bias.
     * output.print();
     * ```
     *
     * When called with `tf.SymbolicTensor`(s), this will prepare the layer for
     * future execution.  This entails internal book-keeping on shapes of
     * expected Tensors, wiring layers together, and initializing weights.
     *
     * Calling `apply` with `tf.SymbolicTensor`s are typically used during the
     * building of non-`tf.Sequential` models. For example:
     *
     * ```js
     * const flattenLayer = tf.layers.flatten();
     * const denseLayer = tf.layers.dense({units: 1});
     *
     * // Use tf.layers.input() to obtain a SymbolicTensor as input to apply().
     * const input = tf.input({shape: [2, 2]});
     * const output1 = flattenLayer.apply(input);
     *
     * // output1.shape is [null, 4]. The first dimension is the undetermined
     * // batch size. The second dimension comes from flattening the [2, 2]
     * // shape.
     * console.log(JSON.stringify(output1.shape));
     *
     * // The output SymbolicTensor of the flatten layer can be used to call
     * // the apply() of the dense layer:
     * const output2 = denseLayer.apply(output1);
     *
     * // output2.shape is [null, 1]. The first dimension is the undetermined
     * // batch size. The second dimension matches the number of units of the
     * // dense layer.
     * console.log(JSON.stringify(output2.shape));
     *
     * // The input and output and be used to construct a model that consists
     * // of the flatten and dense layers.
     * const model = tf.model({inputs: input, outputs: output2});
     * ```
     *
     * @param inputs a `tf.Tensor` or `tf.SymbolicTensor` or an Array of them.
     * @param kwargs Additional keyword arguments to be passed to `call()`.
     *
     * @return Output of the layer's `call` method.
     *
     * @exception ValueError error in case the layer is missing shape information
     *   for its `build` call.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    apply(inputs: Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[], kwargs?: Kwargs): Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[];
    /**
     * Check compatibility between input shape and this layer's batchInputShape.
     *
     * Print warning if any incompatibility is found.
     *
     * @param inputShape Input shape to be checked.
     */
    protected warnOnIncompatibleInputShape(inputShape: Shape): void;
    /**
     * Retrieves the output shape(s) of a layer.
     *
     * Only applicable if the layer has only one inbound node, or if all inbound
     * nodes have the same output shape.
     *
     * @returns Output shape or shapes.
     * @throws AttributeError: if the layer is connected to more than one incoming
     *   nodes.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    get outputShape(): Shape | Shape[];
    /**
     * Counts the total number of numbers (e.g., float32, int32) in the
     * weights.
     *
     * @returns An integer count.
     * @throws RuntimeError: If the layer is not built yet (in which case its
     *   weights are not defined yet.)
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    countParams(): number;
    /**
     * Creates the layer weights.
     *
     * Must be implemented on all layers that have weights.
     *
     * Called when apply() is called to construct the weights.
     *
     * @param inputShape A `Shape` or array of `Shape` (unused).
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    build(inputShape: Shape | Shape[]): void;
    /**
     * Returns the current values of the weights of the layer.
     *
     * @param trainableOnly Whether to get the values of only trainable weights.
     * @returns Weight values as an `Array` of `tf.Tensor`s.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    getWeights(trainableOnly?: boolean): Tensor_2[];
    /**
     * Sets the weights of the layer, from Tensors.
     *
     * @param weights a list of Tensors. The number of arrays and their shape
     *   must match number of the dimensions of the weights of the layer (i.e.
     *   it should match the output of `getWeights`).
     *
     * @exception ValueError If the provided weights list does not match the
     *   layer's specifications.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    setWeights(weights: Tensor_2[]): void;
    /**
     * Adds a weight variable to the layer.
     *
     * @param name Name of the new weight variable.
     * @param shape The shape of the weight.
     * @param dtype The dtype of the weight.
     * @param initializer An initializer instance.
     * @param regularizer A regularizer instance.
     * @param trainable Whether the weight should be trained via backprop or not
     *   (assuming that the layer itself is also trainable).
     * @param constraint An optional trainable.
     * @return The created weight variable.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    protected addWeight(name: string, shape: Shape, dtype?: DataType_2, initializer?: Initializer, regularizer?: Regularizer, trainable?: boolean, constraint?: Constraint, getInitializerFunc?: Function): LayerVariable;
    /**
     * Set the fast-weight-initialization flag.
     *
     * In cases where the initialized weight values will be immediately
     * overwritten by loaded weight values during model loading, setting
     * the flag to `true` saves unnecessary calls to potentially expensive
     * initializers and speeds up the loading process.
     *
     * @param value Target value of the flag.
     */
    setFastWeightInitDuringBuild(value: boolean): void;
    /**
     * Add losses to the layer.
     *
     * The loss may potentionally be conditional on some inputs tensors,
     * for instance activity losses are conditional on the layer's inputs.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    addLoss(losses: RegularizerFn | RegularizerFn[]): void;
    /**
     * Computes the output shape of the layer.
     *
     * Assumes that the layer will be built to match that input shape provided.
     *
     * @param inputShape A shape (tuple of integers) or a list of shape tuples
     *   (one per output tensor of the layer). Shape tuples can include null for
     *   free dimensions, instead of an integer.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    /**
     * Computes an output mask tensor.
     *
     * @param inputs Tensor or list of tensors.
     * @param mask Tensor or list of tensors.
     *
     * @return null or a tensor (or list of tensors, one per output tensor of the
     * layer).
     */
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2 | Tensor_2[];
    /**
     * Internal method to create an inbound node for the layer.
     *
     * @param inputTensors List of input tensors.
     * @param outputTensors List of output tensors.
     * @param inputMasks List of input masks (a mask can be a tensor, or null).
     * @param outputMasks List of output masks (a mask can be a tensor, or null).
     * @param inputShapes List of input shape tuples.
     * @param outputShapes List of output shape tuples.
     * @param kwargs Dictionary of keyword arguments that were passed to the
     *   `call` method of the layer at the call that created the node.
     */
    private addInboundNode;
    /**
     * Returns the config of the layer.
     *
     * A layer config is a TS dictionary (serializable)
     * containing the configuration of a layer.
     * The same layer can be reinstantiated later
     * (without its trained weights) from this configuration.
     *
     * The config of a layer does not include connectivity
     * information, nor the layer class name.  These are handled
     * by 'Container' (one layer of abstraction above).
     *
     * Porting Note: The TS dictionary follows TS naming standrds for
     * keys, and uses tfjs-layers type-safe Enums.  Serialization methods
     * should use a helper function to convert to the pythonic storage
     * standard. (see serialization_utils.convertTsToPythonic)
     *
     * @returns TS dictionary of configuration.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    getConfig(): serialization_2.ConfigDict;
    /**
     * Dispose the weight variables that this Layer instance holds.
     *
     * @returns {number} Number of disposed variables.
     */
    protected disposeWeights(): number;
    protected assertNotDisposed(): void;
    /**
     * Attempt to dispose layer's weights.
     *
     * This method decrease the reference count of the Layer object by 1.
     *
     * A Layer is reference-counted. Its reference count is incremented by 1
     * the first item its `apply()` method is called and when it becomes a part
     * of a new `Node` (through calling the `apply()`) method on a
     * `tf.SymbolicTensor`).
     *
     * If the reference count of a Layer becomes 0, all the weights will be
     * disposed and the underlying memory (e.g., the textures allocated in WebGL)
     * will be freed.
     *
     * Note: If the reference count is greater than 0 after the decrement, the
     * weights of the Layer will *not* be disposed.
     *
     * After a Layer is disposed, it cannot be used in calls such as `apply()`,
     * `getWeights()` or `setWeights()` anymore.
     *
     * @returns A DisposeResult Object with the following fields:
     *   - refCountAfterDispose: The reference count of the Container after this
     *     `dispose()` call.
     *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
     *     during this `dispose()` call.
     * @throws {Error} If the layer is not built yet, or if the layer has already
     *   been disposed.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */
    dispose(): DisposeResult;
}

/** Constructor arguments for Layer. */
declare interface LayerArgs {
    /**
     * If defined, will be used to create an input layer to insert before this
     * layer. If both `inputShape` and `batchInputShape` are defined,
     * `batchInputShape` will be used. This argument is only applicable to input
     * layers (the first layer of a model).
     */
    inputShape?: Shape;
    /**
     * If defined, will be used to create an input layer to insert before this
     * layer. If both `inputShape` and `batchInputShape` are defined,
     * `batchInputShape` will be used. This argument is only applicable to input
     * layers (the first layer of a model).
     */
    batchInputShape?: Shape;
    /**
     * If `inputShape` is specified and `batchInputShape` is *not* specified,
     * `batchSize` is used to construct the `batchInputShape`: `[batchSize,
     * ...inputShape]`
     */
    batchSize?: number;
    /**
     * The data-type for this layer. Defaults to 'float32'.
     * This argument is only applicable to input layers (the first layer of a
     * model).
     */
    dtype?: DataType_2;
    /** Name for this layer. */
    name?: string;
    /**
     * Whether the weights of this layer are updatable by `fit`.
     * Defaults to true.
     */
    trainable?: boolean;
    /**
     * Initial weight values of the layer.
     */
    weights?: Tensor_2[];
    /** Legacy support. Do not use for new code. */
    inputDType?: DataType_2;
}

/** Constructor arguments for Layer. */
declare interface LayerConfig extends PyJsonDict {
    input_shape?: Shape;
    batch_input_shape?: Shape;
    batch_size?: number;
    dtype?: DataType_2;
    name?: string;
    trainable?: boolean;
    input_dtype?: DataType_2;
}

declare class LayerNormalization extends Layer {
    /** @nocollapse */
    static className: string;
    private axis;
    readonly epsilon: number;
    readonly center: boolean;
    readonly scale: boolean;
    readonly betaInitializer: Initializer;
    readonly gammaInitializer: Initializer;
    readonly betaRegularizer: Regularizer;
    readonly gammaRegularizer: Regularizer;
    private gamma;
    private beta;
    constructor(args?: LayerNormalizationLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Layer-normalization layer (Ba et al., 2016).
 *
 * Normalizes the activations of the previous layer for each given example in a
 * batch independently, instead of across a batch like in `batchNormalization`.
 * In other words, this layer applies a transformation that maintanis the mean
 * activation within each example close to0 and activation variance close to 1.
 *
 * Input shape:
 *   Arbitrary. Use the argument `inputShape` when using this layer as the first
 *   layer in a model.
 *
 * Output shape:
 *   Same as input.
 *
 * References:
 *   - [Layer Normalization](https://arxiv.org/abs/1607.06450)
 *
 * @doc {heading: 'Layers', subheading: 'Normalization', namespace: 'layers'}
 */
declare function layerNormalization(args?: LayerNormalizationLayerArgs): LayerNormalization;

declare interface LayerNormalizationLayerArgs extends LayerArgs {
    /**
     * The axis or axes that should be normalized (typically, the feature axis.)
     * Defaults to -1 (the last axis.)
     */
    axis?: number | number[];
    /**
     * A small positive float added to variance to avoid divison by zero.
     * Defaults to 1e-3.
     */
    epsilon?: number;
    /**
     * If `true`, add offset of `beta` to normalized tensor.
     * If `false`, `beta` is ignored.
     * Default: `true`.
     */
    center?: boolean;
    /**
     * If `true`, multiply output by `gamma`.
     * If `false`, `gamma` is not used.
     * When the next layer is linear, this can be disabled since scaling will
     * be done by the next layer.
     * Default: `true`.
     */
    scale?: boolean;
    /**
     * Initializer for the beta weight.
     * Default: `'zeros'`.
     */
    betaInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the gamma weight.
     * Default: `'ones'`.
     */
    gammaInitializer?: InitializerIdentifier | Initializer;
    /** Regularizer for the beta weight. */
    betaRegularizer?: RegularizerIdentifier | Regularizer;
    /** Regularizer for the gamma weight. */
    gammaRegularizer?: RegularizerIdentifier | Regularizer;
}

declare namespace layers {
    export {
        inputLayer,
        elu_2 as elu,
        reLU,
        leakyReLU,
        prelu_2 as prelu,
        softmax_2 as softmax,
        thresholdedReLU,
        conv1d_2 as conv1d,
        conv2d_3 as conv2d,
        conv2dTranspose_2 as conv2dTranspose,
        conv3d_2 as conv3d,
        conv3dTranspose_2 as conv3dTranspose,
        separableConv2d_2 as separableConv2d,
        cropping2D,
        upSampling2d,
        depthwiseConv2d_3 as depthwiseConv2d,
        activation,
        dense,
        dropout_2 as dropout,
        spatialDropout1d,
        flatten_2 as flatten,
        repeatVector,
        reshape_2 as reshape,
        permute,
        embedding,
        add_2 as add,
        average,
        concatenate,
        maximum_2 as maximum,
        minimum_2 as minimum,
        multiply,
        dot_2 as dot,
        batchNormalization,
        layerNormalization,
        zeroPadding2d,
        averagePooling1d,
        avgPool1d,
        avgPooling1d,
        averagePooling2d,
        avgPool2d,
        avgPooling2d,
        averagePooling3d,
        avgPool3d_2 as avgPool3d,
        avgPooling3d,
        globalAveragePooling1d,
        globalAveragePooling2d,
        globalMaxPooling1d,
        globalMaxPooling2d,
        maxPooling1d,
        maxPooling2d,
        maxPooling3d,
        gru,
        gruCell,
        lstm,
        lstmCell,
        simpleRNN,
        simpleRNNCell,
        convLstm2d,
        convLstm2dCell,
        rnn,
        stackedRNNCells,
        bidirectional,
        timeDistributed,
        gaussianNoise,
        gaussianDropout,
        alphaDropout,
        masking,
        globalMaxPool1d,
        globalMaxPool2d,
        maxPool1d,
        maxPool2d,
        Layer,
        RNN,
        RNNCell,
        input
    }
}
export { layers }

/**
 * A `tf.LayersModel` is a directed, acyclic graph of `tf.Layer`s plus methods
 * for training, evaluation, prediction and saving.
 *
 * `tf.LayersModel` is the basic unit of training, inference and evaluation in
 * TensorFlow.js. To create a `tf.LayersModel`, use `tf.LayersModel`.
 *
 * See also:
 *   `tf.Sequential`, `tf.loadLayersModel`.
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */
export declare class LayersModel extends Container_2 implements tf.InferenceModel {
    /** @nocollapse */
    static className: string;
    protected optimizer_: Optimizer_2;
    protected isOptimizerOwned: boolean;
    loss: string | string[] | {
        [outputName: string]: string;
    } | LossOrMetricFn | LossOrMetricFn[] | {
        [outputName: string]: LossOrMetricFn;
    };
    lossFunctions: LossOrMetricFn[];
    private feedOutputShapes;
    private feedLossFns;
    private collectedTrainableWeights;
    private testFunction;
    history: History_2;
    protected stopTraining_: boolean;
    protected isTraining: boolean;
    metrics: string | LossOrMetricFn | Array<string | LossOrMetricFn> | {
        [outputName: string]: string | LossOrMetricFn;
    };
    metricsNames: string[];
    metricsTensors: Array<[LossOrMetricFn, number]>;
    private userDefinedMetadata;
    constructor(args: ContainerArgs);
    /**
     * Print a text summary of the model's layers.
     *
     * The summary includes
     * - Name and type of all layers that comprise the model.
     * - Output shape(s) of the layers
     * - Number of weight parameters of each layer
     * - If the model has non-sequential-like topology, the inputs each layer
     *   receives
     * - The total number of trainable and non-trainable parameters of the model.
     *
     * ```js
     * const input1 = tf.input({shape: [10]});
     * const input2 = tf.input({shape: [20]});
     * const dense1 = tf.layers.dense({units: 4}).apply(input1);
     * const dense2 = tf.layers.dense({units: 8}).apply(input2);
     * const concat = tf.layers.concatenate().apply([dense1, dense2]);
     * const output =
     *     tf.layers.dense({units: 3, activation: 'softmax'}).apply(concat);
     *
     * const model = tf.model({inputs: [input1, input2], outputs: output});
     * model.summary();
     * ```
     *
     * @param lineLength Custom line length, in number of characters.
     * @param positions Custom widths of each of the columns, as either
     *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
     *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
     *   right-most (i.e., ending) position of a column.
     * @param printFn Custom print function. Can be used to replace the default
     *   `console.log`. For example, you can use `x => {}` to mute the printed
     *   messages in the console.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    summary(lineLength?: number, positions?: number[], printFn?: (message?: any, ...optionalParams: any[]) => void): void;
    /**
     * Configures and prepares the model for training and evaluation.  Compiling
     * outfits the model with an optimizer, loss, and/or metrics.  Calling `fit`
     * or `evaluate` on an un-compiled model will throw an error.
     *
     * @param args a `ModelCompileArgs` specifying the loss, optimizer, and
     * metrics to be used for fitting and evaluating this model.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    compile(args: ModelCompileArgs): void;
    /**
     * Check trainable weights count consistency.
     *
     * This will raise a warning if `this.trainableWeights` and
     * `this.collectedTrainableWeights` are inconsistent (i.e., have different
     * numbers of parameters).
     * Inconsistency will typically arise when one modifies `model.trainable`
     * without calling `model.compile()` again.
     */
    protected checkTrainableWeightsConsistency(): void;
    /**
     * Returns the loss value & metrics values for the model in test mode.
     *
     * Loss and metrics are specified during `compile()`, which needs to happen
     * before calls to `evaluate()`.
     *
     * Computation is done in batches.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const result = model.evaluate(
     *     tf.ones([8, 10]), tf.ones([8, 1]), {batchSize: 4});
     * result.print();
     * ```
     *
     * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
     * model has multiple inputs.
     * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
     * model has multiple outputs.
     * @param args A `ModelEvaluateArgs`, containing optional fields.
     *
     * @return `Scalar` test loss (if the model has a single output and no
     *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
     *   and/or metrics). The attribute `model.metricsNames`
     *   will give you the display labels for the scalar outputs.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    evaluate(x: Tensor_2 | Tensor_2[], y: Tensor_2 | Tensor_2[], args?: ModelEvaluateArgs): Scalar_2 | Scalar_2[];
    /**
     * Evaluate model using a dataset object.
     *
     * Note: Unlike `evaluate()`, this method is asynchronous (`async`);
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for evaluation. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g..
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs. Of the two items in the array, the
     *   first is the input feature(s) and the second is the output target(s).
     * @param args A configuration object for the dataset-based evaluation.
     * @returns Loss and metric values as an Array of `Scalar` objects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    evaluateDataset(dataset: Dataset_2<{}>, args?: ModelEvaluateDatasetArgs): Promise<Scalar_2 | Scalar_2[]>;
    /**
     * Get number of samples provided for training, evaluation or prediction.
     *
     * @param ins Input `tf.Tensor`.
     * @param batchSize Integer batch size, optional.
     * @param steps Total number of steps (batches of samples) before
     * declaring loop finished. Optional.
     * @param stepsName The public API's parameter name for `steps`.
     * @returns Number of samples provided.
     */
    private checkNumSamples;
    /**
     * Execute internal tensors of the model with input data feed.
     * @param inputs Input data feed. Must match the inputs of the model.
     * @param outputs Names of the output tensors to be fetched. Must match
     *   names of the SymbolicTensors that belong to the graph.
     * @returns Fetched values for `outputs`.
     */
    execute(inputs: Tensor_2 | Tensor_2[] | NamedTensorMap_2, outputs: string | string[]): Tensor_2 | Tensor_2[];
    /**
     * Retrieve the model's internal symbolic tensors from symbolic-tensor names.
     */
    private retrieveSymbolicTensors;
    /**
     * Helper method to loop over some data in batches.
     *
     * Porting Note: Not using the functional approach in the Python equivalent
     *   due to the imperative backend.
     * Porting Note: Does not support step mode currently.
     *
     * @param ins: input data
     * @param batchSize: integer batch size.
     * @param verbose: verbosity model
     * @returns: Predictions as `tf.Tensor` (if a single output) or an `Array` of
     *   `tf.Tensor` (if multipe outputs).
     */
    private predictLoop;
    /**
     * Generates output predictions for the input samples.
     *
     * Computation is done in batches.
     *
     * Note: the "step" mode of predict() is currently not supported.
     *   This is because the TensorFlow.js core backend is imperative only.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predict(tf.ones([8, 10]), {batchSize: 4}).print();
     * ```
     *
     * @param x The input data, as a Tensor, or an `Array` of `tf.Tensor`s if
     *   the model has multiple inputs.
     * @param args A `ModelPredictArgs` object containing optional fields.
     *
     * @return Prediction results as a `tf.Tensor`(s).
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and the model's expectations, or in case a stateful model receives a
     *   number of samples that is not a multiple of the batch size.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    predict(x: Tensor_2 | Tensor_2[], args?: ModelPredictConfig_2): Tensor_2 | Tensor_2[];
    /**
     * Returns predictions for a single batch of samples.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predictOnBatch(tf.ones([8, 10])).print();
     * ```
     * @param x: Input samples, as a Tensor (for models with exactly one
     *   input) or an array of Tensors (for models with more than one input).
     * @return Tensor(s) of predictions
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    predictOnBatch(x: Tensor_2 | Tensor_2[]): Tensor_2 | Tensor_2[];
    protected standardizeUserDataXY(x: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, y: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, checkBatchAxis?: boolean, batchSize?: number): [Tensor_2[], Tensor_2[]];
    protected standardizeUserData(x: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, y: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, sampleWeight?: Tensor_2 | Tensor_2[] | {
        [outputName: string]: Tensor_2;
    }, classWeight?: ClassWeight | ClassWeight[] | ClassWeightMap, checkBatchAxis?: boolean, batchSize?: number): Promise<[Tensor_2[], Tensor_2[], Tensor_2[]]>;
    /**
     * Loop over some test data in batches.
     * @param f A Function returning a list of tensors.
     * @param ins Array of tensors to be fed to `f`.
     * @param batchSize Integer batch size or `null` / `undefined`.
     * @param verbose verbosity mode.
     * @param steps Total number of steps (batches of samples) before
     * declaring test finished. Ignored with the default value of `null` /
     * `undefined`.
     * @returns Array of Scalars.
     */
    private testLoop;
    protected getDedupedMetricsNames(): string[];
    /**
     * Creates a function that performs the following actions:
     *
     * 1. computes the losses
     * 2. sums them to get the total loss
     * 3. call the optimizer computes the gradients of the LayersModel's
     *    trainable weights w.r.t. the total loss and update the variables
     * 4. calculates the metrics
     * 5. returns the values of the losses and metrics.
     */
    protected makeTrainFunction(): (data: Tensor_2[]) => Scalar_2[];
    /**
     * Create a function which, when invoked with an array of `tf.Tensor`s as a
     * batch of inputs, returns the prespecified loss and metrics of the model
     * under the batch of input data.
     */
    private makeTestFunction;
    /**
     * Trains the model for a fixed number of epochs (iterations on a
     * dataset).
     *
     * ```js
     * const model = tf.sequential({
     *     layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * for (let i = 1; i < 5 ; ++i) {
     *   const h = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
     *       batchSize: 4,
     *       epochs: 3
     *   });
     *   console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
     * }
     * ```
     *
     * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
     * model has multiple inputs. If all inputs in the model are named, you
     * can also pass a dictionary mapping input names to `tf.Tensor`s.
     * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
     * the model has multiple outputs. If all outputs in the model are named,
     * you can also pass a dictionary mapping output names to `tf.Tensor`s.
     * @param args A `ModelFitArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @exception ValueError In case of mismatch between the provided input
     * data and what the model expects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    fit(x: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, y: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, args?: ModelFitArgs): Promise<History_2>;
    /**
     * Trains the model using a dataset object.
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for training. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g..
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs.
     *   Of the two items in the array, the first is the input feature(s) and
     *   the second is the output target(s).
     * @param args A `ModelFitDatasetArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    fitDataset<T>(dataset: Dataset_2<T>, args: ModelFitDatasetArgs<T>): Promise<History_2>;
    /**
     * Runs a single gradient update on a single batch of data.
     *
     * This method differs from `fit()` and `fitDataset()` in the following
     * regards:
     *   - It operates on exactly one batch of data.
     *   - It returns only the loss and matric values, instead of
     *     returning the batch-by-batch loss and metric values.
     *   - It doesn't support fine-grained options such as verbosity and
     *     callbacks.
     *
     * @param x Input data. It could be one of the following:
     *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
     *     multiple inputs).
     *   - An Object mapping input names to corresponding `tf.Tensor` (if the
     *     model has named inputs).
     * @param y Target darta. It could be either a `tf.Tensor` a multiple
     *   `tf.Tensor`s. It should be consistent with `x`.
     * @returns Training loss or losses (in case the model has
     *   multiple outputs), along with metrics (if any), as numbers.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    trainOnBatch(x: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, y: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }): Promise<number | number[]>;
    /**
     * Extract weight values of the model.
     *
     * @param config: An instance of `io.SaveConfig`, which specifies
     * model-saving options such as whether only trainable weights are to be
     * saved.
     * @returns A `NamedTensorMap` mapping original weight names (i.e.,
     *   non-uniqueified weight names) to their values.
     */
    protected getNamedWeights(config?: io_2.SaveConfig): NamedTensor_2[];
    /**
     * Setter used for force stopping of LayersModel.fit() (i.e., training).
     *
     * Example:
     *
     * ```js
     * const input = tf.input({shape: [10]});
     * const output = tf.layers.dense({units: 1}).apply(input);
     * const model = tf.model({inputs: [input], outputs: [output]});
     * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
     * const xs = tf.ones([8, 10]);
     * const ys = tf.zeros([8, 1]);
     *
     * const history = await model.fit(xs, ys, {
     *   epochs: 10,
     *   callbacks: {
     *     onEpochEnd: async (epoch, logs) => {
     *       if (epoch === 2) {
     *         model.stopTraining = true;
     *       }
     *     }
     *   }
     * });
     *
     * // There should be only 3 values in the loss array, instead of 10
     * values,
     * // due to the stopping after 3 epochs.
     * console.log(history.history.loss);
     * ```
     */
    set stopTraining(stop: boolean);
    get stopTraining(): boolean;
    get optimizer(): Optimizer_2;
    set optimizer(optimizer: Optimizer_2);
    dispose(): DisposeResult;
    private getLossIdentifiers;
    private getMetricIdentifiers;
    protected getTrainingConfig(): TrainingConfig_2;
    loadTrainingConfig(trainingConfig: TrainingConfig_2): void;
    /**
     * Save the configuration and/or weights of the LayersModel.
     *
     * An `IOHandler` is an object that has a `save` method of the proper
     * signature defined. The `save` method manages the storing or
     * transmission of serialized data ("artifacts") that represent the
     * model's topology and weights onto or via a specific medium, such as
     * file downloads, local storage, IndexedDB in the web browser and HTTP
     * requests to a server. TensorFlow.js provides `IOHandler`
     * implementations for a number of frequently used saving mediums, such as
     * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
     * for more details.
     *
     * This method also allows you to refer to certain types of `IOHandler`s
     * as URL-like string shortcuts, such as 'localstorage://' and
     * 'indexeddb://'.
     *
     * Example 1: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 2. Saving `model`'s topology and weights to browser
     * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('indexeddb://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 3. Saving `model`'s topology and weights as two files
     * (`my-model-1.json` and `my-model-1.weights.bin`) downloaded from
     * browser.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * const saveResults = await model.save('downloads://my-model-1');
     * ```
     *
     * Example 4. Send  `model`'s topology and weights to an HTTP server.
     * See the documentation of `tf.io.http` for more details
     * including specifying request parameters and implementation of the
     * server.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * const saveResults = await model.save('http://my-server/model/upload');
     * ```
     *
     * @param handlerOrURL An instance of `IOHandler` or a URL-like,
     * scheme-based string shortcut for `IOHandler`.
     * @param config Options for saving the model.
     * @returns A `Promise` of `SaveResult`, which summarizes the result of
     * the saving, such as byte sizes of the saved artifacts for the model's
     *   topology and weight values.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */
    save(handlerOrURL: io_2.IOHandler | string, config?: io_2.SaveConfig): Promise<io_2.SaveResult>;
    /**
     * Set user-defined metadata.
     *
     * The set metadata will be serialized together with the topology
     * and weights of the model during `save()` calls.
     *
     * @param setUserDefinedMetadata
     */
    setUserDefinedMetadata(userDefinedMetadata: {}): void;
    /**
     * Get user-defined metadata.
     *
     * The metadata is supplied via one of the two routes:
     *   1. By calling `setUserDefinedMetadata()`.
     *   2. Loaded during model loading (if the model is constructed
     *      via `tf.loadLayersModel()`.)
     *
     * If no user-defined metadata is available from either of the
     * two routes, this function will return `undefined`.
     */
    getUserDefinedMetadata(): {};
}

/**
 * A `tf.layers.LayerVariable` is similar to a `tf.Tensor` in that it has a
 * dtype and shape, but its value is mutable.  The value is itself represented
 * as a`tf.Tensor`, and can be read with the `read()` method and updated with
 * the `write()` method.
 */
export declare class LayerVariable {
    readonly dtype: DataType_2;
    readonly shape: Shape;
    readonly id: number;
    readonly name: string;
    readonly originalName: string;
    private trainable_;
    protected readonly val: tf.Variable;
    readonly constraint: Constraint;
    /**
     * Construct Variable from a `tf.Tensor`.
     *
     * If not explicitly named, the Variable will be given a name with the
     * prefix 'Variable'. Variable names are unique. In the case of name
     * collision, suffixies '_<num>' will be added to the name.
     *
     * @param val Initial value of the Variable.
     * @param name Name of the variable. If `null` or `undefined` is provided, it
     *   will default a name with the prefix 'Variable'.
     * @param constraint Optional, projection function to be applied to the
     * variable after optimize updates
     * @throws ValueError if `name` is `null` or `undefined`.
     */
    constructor(val: Tensor_2, dtype?: DataType_2, name?: string, trainable?: boolean, constraint?: Constraint);
    /**
     * Get a snapshot of the Variable's value.
     *
     * The returned value is a snapshot of the Variable's value at the time of
     * the invocation. Future mutations in the value of the tensor will only
     * be reflected by future calls to this method.
     */
    read(): Tensor_2;
    /**
     * Update the value of the Variable.
     *
     * @param newVal: The new value to update to. Must be consistent with the
     *   dtype and shape of the Variable.
     * @return This Variable.
     */
    write(newVal: Tensor_2): this;
    /**
     * Dispose this LayersVariable instance from memory.
     */
    dispose(): void;
    protected assertNotDisposed(): void;
    get trainable(): boolean;
    set trainable(trainable: boolean);
}

/**
 * An asynchronous iterator, providing lazy access to a potentially
 * unbounded stream of elements.
 *
 * Iterator can be obtained from a dataset:
 * `const iter = await dataset.iterator();`
 */
declare abstract class LazyIterator<T> {
    abstract summary(): string;
    /**
     * Returns a `Promise` for the next element in the stream.
     *
     * When an item can be provided successfully, the return value is
     * `{value:T, done:false}`.
     *
     * Calling next() on a closed stream returns `{value:null, done:true}`.
     */
    abstract next(): Promise<IteratorResult<T>>;
    /**
     * Collect all remaining elements of a bounded stream into an array.
     * Obviously this will succeed only for small streams that fit in memory.
     * Useful for testing.
     *
     * @returns A Promise for an array of stream elements, which will resolve
     *   when the stream is exhausted.
     */
    toArray(): Promise<T[]>;
    /**
     * Collect all elements of this dataset into an array with prefetching 100
     * elements. This is useful for testing, because the prefetch changes the
     * order in which the Promises are resolved along the processing pipeline.
     * This may help expose bugs where results are dependent on the order of
     * Promise resolution rather than on the logical order of the stream (i.e.,
     * due to hidden mutable state).
     *
     * @returns A Promise for an array of stream elements, which will resolve
     *   when the stream is exhausted.
     */
    toArrayForTest(): Promise<T[]>;
    /**
     * Draw items from the stream until it is exhausted.
     *
     * This can be useful when the stream has side effects but no output.  In
     * that case, calling this function guarantees that the stream will be
     * fully processed.
     */
    resolveFully(): Promise<void>;
    /**
     * Draw items from the stream until it is exhausted, or a predicate fails.
     *
     * This can be useful when the stream has side effects but no output.  In
     * that case, calling this function guarantees that the stream will be
     * fully processed.
     */
    resolveWhile(predicate: (r: T) => boolean): Promise<void>;
    /**
     * Handles errors thrown on this stream using a provided handler function.
     *
     * @param handler A function that handles any `Error` thrown during a `next()`
     *   call and returns true if the stream should continue (dropping the failed
     *   call) or false if the stream should quietly terminate.  If the handler
     *   itself throws (or rethrows) an `Error`, that will be propagated.
     *
     * @returns A `LazyIterator` of elements passed through from upstream,
     *   possibly filtering or terminating on upstream `next()` calls that
     *   throw an `Error`.
     */
    handleErrors(handler: (error: Error) => boolean): LazyIterator<T>;
    /**
     * Filters this stream according to `predicate`.
     *
     * @param predicate A function mapping a stream element to a boolean or a
     * `Promise` for one.
     *
     * @returns A `LazyIterator` of elements for which the predicate was true.
     */
    filter(predicate: (value: T) => boolean): LazyIterator<T>;
    /**
     * Maps this stream through a 1-to-1 transform.
     *
     * @param transform A function mapping a stream element to a transformed
     *   element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */
    map<O>(transform: (value: T) => O): LazyIterator<O>;
    /**
     * Maps this stream through an async 1-to-1 transform.
     *
     * @param transform A function mapping a stream element to a `Promise` for a
     *   transformed stream element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */
    mapAsync<O>(transform: (value: T) => Promise<O>): LazyIterator<O>;
    /**
     * Maps this stream through a 1-to-1 transform, forcing serial execution.
     *
     * @param transform A function mapping a stream element to a transformed
     *   element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */
    serialMapAsync<O>(transform: (value: T) => Promise<O>): LazyIterator<O>;
    /**
     * Maps this stream through a 1-to-many transform.
     *
     * @param transform A function mapping a stream element to an array of
     *   transformed elements.
     *
     * @returns A `DataStream` of transformed elements.
     */
    flatmap<O>(transform: (value: T) => O[]): LazyIterator<O>;
    /**
     * Apply a function to every element of the stream.
     *
     * @param f A function to apply to each stream element.
     */
    forEachAsync(f: (value: T) => void): Promise<void>;
    /**
     * Apply a function to every element of the stream, forcing serial execution.
     *
     * @param f A function to apply to each stream element.  Should return 'true'
     *   to indicate that the stream should continue, or 'false' to cause it to
     *   terminate.
     */
    serialForEach(f: (value: T) => Promise<boolean>): Promise<void>;
    /**
     * Groups elements into batches, represented as arrays of elements.
     *
     * We can think of the elements of this iterator as 'rows' (even if they are
     * nested structures).  By the same token, consecutive values for a given
     * key within the elements form a 'column'.  This matches the usual sense of
     * 'row' and 'column' when processing tabular data (e.g., parsing a CSV).
     *
     * Thus, "Row-major" means that the resulting batch is simply a collection of
     * rows: `[row1, row2, row3, ...]`.  This is contrast to the column-major
     * form, which is needed for vectorized computation.
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @returns A `LazyIterator` of batches of elements, represented as arrays
     *   of the original element type.
     */
    rowMajorBatch(batchSize: number, smallLastBatch?: boolean): LazyIterator<T[]>;
    /**
     * Groups elements into batches, represented in column-major form.
     *
     * We can think of the elements of this iterator as 'rows' (even if they are
     * nested structures).  By the same token, consecutive values for a given
     * key within the elements form a 'column'.  This matches the usual sense of
     * 'row' and 'column' when processing tabular data (e.g., parsing a CSV).
     *
     * Thus, "column-major" means that the resulting batch is a (potentially
     * nested) structure representing the columns.  Each column entry, then,
     * contains a collection of the values found in that column for a range of
     * input elements.  This representation allows for vectorized computation, in
     * contrast to the row-major form.
     *
     * The inputs should all have the same nested structure (i.e., of arrays and
     * dicts).  The result is a single object with the same nested structure,
     * where the leaves are arrays collecting the values of the inputs at that
     * location (or, optionally, the result of a custom function applied to those
     * arrays).
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @param zipFn: (optional) A function that expects an array of elements at a
     *   single node of the object tree, and returns a `DeepMapResult`.  The
     *   `DeepMapResult` either provides a result value for that node (i.e.,
     *   representing the subtree), or indicates that the node should be processed
     *   recursively.  The default zipFn recurses as far as possible and places
     *   arrays at the leaves.
     * @returns A `LazyIterator` of batches of elements, represented as an object
     *   with collections at the leaves.
     */
    columnMajorBatch(batchSize: number, smallLastBatch?: boolean, zipFn?: (xs: any[]) => DeepMapResult): LazyIterator<tf.TensorContainer>;
    /**
     * Concatenate this `LazyIterator` with another.
     *
     * @param iterator A `LazyIterator` to be concatenated onto this one.
     * @param baseErrorHandler An optional function that can intercept `Error`s
     *   raised during a `next()` call on the base stream.  This function can
     *   decide whether the error should be propagated, whether the error should
     *   be ignored, or whether the base stream should be terminated.
     * @returns A `LazyIterator`.
     */
    concatenate(iterator: LazyIterator<T>, baseErrorHandler?: (e: Error) => boolean): LazyIterator<T>;
    /**
     * Limits this stream to return at most `count` items.
     *
     * @param count The maximum number of items to provide from the stream. If
     * a negative or undefined value is given, the entire stream is returned
     *   unaltered.
     */
    take(count: number): LazyIterator<T>;
    /**
     * Skips the first `count` items in this stream.
     *
     * @param count The number of items to skip.  If a negative or undefined
     * value is given, the entire stream is returned unaltered.
     */
    skip(count: number): LazyIterator<T>;
    /**
     * Prefetch the first `bufferSize` items in this stream.
     *
     * Note this prefetches Promises, but makes no guarantees about when those
     * Promises resolve.
     *
     * @param bufferSize: An integer specifying the number of elements to be
     *   prefetched.
     */
    prefetch(bufferSize: number): LazyIterator<T>;
    /**
     * Randomly shuffles the elements of this stream.
     *
     * @param bufferSize: An integer specifying the number of elements from
     * this stream from which the new stream will sample.
     * @param seed: (Optional.) An integer specifying the random seed that
     * will be used to create the distribution.
     */
    shuffle(windowSize: number, seed?: string): LazyIterator<T>;
    /**
     * Force an iterator to execute serially: each next() call will await the
     * prior one, so that they cannot execute concurrently.
     */
    serial(): LazyIterator<T>;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/**
 * Stub interfaces and classes for testing tf.LayersModel.fitDataset().
 *
 * TODO(cais, soergel): Remove this in favor of actual interfaces and classes
 *   when ready.
 */
declare abstract class LazyIterator_2<T> {
    abstract next(): Promise<IteratorResult<T>>;
}

declare class LeakyReLU extends Layer {
    /** @nocollapse */
    static className: string;
    readonly alpha: number;
    readonly DEFAULT_ALPHA = 0.3;
    constructor(args?: LeakyReLULayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

export declare const LeakyRelu = "LeakyRelu";

/**
 * Leaky version of a rectified linear unit.
 *
 * It allows a small gradient when the unit is not active:
 * `f(x) = alpha * x for x < 0.`
 * `f(x) = x for x >= 0.`
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers'
 * }
 */
declare function leakyReLU(args?: LeakyReLULayerArgs): LeakyReLU;

export declare const leakyRelu: typeof leakyRelu_;

/**
 * Computes leaky rectified linear element-wise.
 *
 * See
 * [http://web.stanford.edu/~awni/papers/relu_hybrid_icml2013_final.pdf](
 *     http://web.stanford.edu/~awni/papers/relu_hybrid_icml2013_final.pdf)
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.leakyRelu(0.1).print();  // or tf.leakyRelu(x, 0.1)
 * ```
 * @param x The input tensor.
 * @param alpha The scaling factor for negative values, defaults to 0.2.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function leakyRelu_<T extends Tensor>(x: T | TensorLike, alpha?: number): T;

export declare interface LeakyReluAttrs {
    alpha: number;
}

export declare type LeakyReluInputs = Pick<NamedTensorInfoMap, 'x'>;

declare interface LeakyReLULayerArgs extends LayerArgs {
    /**
     * Float `>= 0`. Negative slope coefficient. Defaults to `0.3`.
     */
    alpha?: number;
}

/**
 * LeCun normal initializer.
 *
 * It draws samples from a truncated normal distribution centered on 0
 * with `stddev = sqrt(1 / fanIn)`
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * References:
 *   [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
 *   [Efficient Backprop](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function leCunNormal(args: SeedOnlyInitializerArgs): Initializer;

/**
 * LeCun uniform initializer.
 *
 * It draws samples from a uniform distribution in the interval
 * `[-limit, limit]` with `limit = sqrt(3 / fanIn)`,
 * where `fanIn` is the number of input units in the weight tensor.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function leCunUniform(args: SeedOnlyInitializerArgs): Initializer;

export declare const Less = "Less";

export declare const less: typeof less_;

/**
 * Returns the truth value of (a < b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.less(b).print();
 * ```
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function less_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare const LessEqual = "LessEqual";

export declare const lessEqual: typeof lessEqual_;

/**
 * Returns the truth value of (a <= b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.lessEqual(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function lessEqual_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const lessEqualImpl: SimpleBinaryKernelImpl;

export declare type LessEqualInputs = BinaryInputs;

declare const lessImpl: SimpleBinaryKernelImpl;

export declare type LessInputs = BinaryInputs;

export declare const linalg: {
    bandPart: <T extends Tensor<Rank>>(a: TensorLike | T, numLower: number, numUpper: number) => T;
    gramSchmidt: (xs: Tensor2D | Tensor1D[]) => Tensor2D | Tensor1D[];
    qr: (x: Tensor<Rank>, fullMatrices?: boolean) => [Tensor<Rank>, Tensor<Rank>];
};

declare function linkProgram(gl: WebGLRenderingContext, program: WebGLProgram): void;

export declare const LinSpace = "LinSpace";

/**
 * Return an evenly spaced sequence of numbers over the given interval.
 *
 * ```js
 * tf.linspace(0, 9, 10).print();
 * ```
 * @param start The start value of the sequence.
 * @param stop The end value of the sequence.
 * @param num The number of values to generate.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function linspace(start: number, stop: number, num: number): Tensor1D;

export declare interface LinSpaceAttrs {
    start: number;
    stop: number;
    num: number;
}

declare function linSpaceImpl(start: number, stop: number, num: number): TypedArray_2;

/**
 * List all models stored in registered storage mediums.
 *
 * For a web browser environment, the registered mediums are Local Storage and
 * IndexedDB.
 *
 * ```js
 * // First create and save a model.
 * const model = tf.sequential();
 * model.add(tf.layers.dense(
 *     {units: 1, inputShape: [10], activation: 'sigmoid'}));
 * await model.save('localstorage://demo/management/model1');
 *
 * // Then list existing models.
 * console.log(JSON.stringify(await tf.io.listModels()));
 *
 * // Delete the model.
 * await tf.io.removeModel('localstorage://demo/management/model1');
 *
 * // List models again.
 * console.log(JSON.stringify(await tf.io.listModels()));
 * ```
 *
 * @returns A `Promise` of a dictionary mapping URLs of existing models to
 * their model artifacts info. URLs include medium-specific schemes, e.g.,
 *   'indexeddb://my/model/1'. Model artifacts info include type of the
 * model's topology, byte sizes of the topology, weights, etc.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Management',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
declare function listModels(): Promise<{
    [url: string]: ModelArtifactsInfo;
}>;

/**
 * Load a graph model given a URL to the model definition.
 *
 * Example of loading MobileNetV2 from a URL and making a prediction with a
 * zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
 * const model = await tf.loadGraphModel(modelUrl);
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 *
 * Example of loading MobileNetV2 from a TF Hub URL and making a prediction with
 * a zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2';
 * const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 * @param modelUrl The url or an `io.IOHandler` that loads the model.
 * @param options Options for the HTTP request, which allows to send credentials
 *    and custom headers.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */
export declare function loadGraphModel(modelUrl: string | io_2.IOHandler, options?: io_2.LoadOptions): Promise<GraphModel>;

/**
 * Type definition for handlers of loading operations.
 */
declare type LoadHandler = () => Promise<ModelArtifacts>;

/**
 * Load a model composed of Layer objects, including its topology and optionally
 * weights. See the Tutorial named "How to import a Keras Model" for usage
 * examples.
 *
 * This method is applicable to:
 *
 * 1. Models created with the `tf.layers.*`, `tf.sequential`, and
 * `tf.model` APIs of TensorFlow.js and later saved with the
 * `tf.LayersModel.save` method.
 * 2. Models converted from Keras or TensorFlow tf.keras using the
 * [tensorflowjs_converter](https://github.com/tensorflow/tfjs/tree/master/tfjs-converter).
 *
 * This mode is *not* applicable to TensorFlow `SavedModel`s or their converted
 * forms. For those models, use `tf.loadGraphModel`.
 *
 * Example 1. Load a model from an HTTP server.
 *
 * ```js
 * const model = await tf.loadLayersModel(
 *     'https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
 * model.summary();
 * ```
 *
 * Example 2: Save `model`'s topology and weights to browser [local
 * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
 * then load it back.
 *
 * ```js
 * const model = tf.sequential(
 *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
 * console.log('Prediction from original model:');
 * model.predict(tf.ones([1, 3])).print();
 *
 * const saveResults = await model.save('localstorage://my-model-1');
 *
 * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
 * console.log('Prediction from loaded model:');
 * loadedModel.predict(tf.ones([1, 3])).print();
 * ```
 *
 * Example 3. Saving `model`'s topology and weights to browser
 * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
 * then load it back.
 *
 * ```js
 * const model = tf.sequential(
 *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
 * console.log('Prediction from original model:');
 * model.predict(tf.ones([1, 3])).print();
 *
 * const saveResults = await model.save('indexeddb://my-model-1');
 *
 * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
 * console.log('Prediction from loaded model:');
 * loadedModel.predict(tf.ones([1, 3])).print();
 * ```
 *
 * Example 4. Load a model from user-selected files from HTML
 * [file input
 * elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
 *
 * ```js
 * // Note: this code snippet will not work without the HTML elements in the
 * //   page
 * const jsonUpload = document.getElementById('json-upload');
 * const weightsUpload = document.getElementById('weights-upload');
 *
 * const model = await tf.loadLayersModel(
 *     tf.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
 * ```
 *
 * @param pathOrIOHandler Can be either of the two formats
 *   1. A string path to the `ModelAndWeightsConfig` JSON describing
 *      the model in the canonical TensorFlow.js format. For file://
 *      (tfjs-node-only), http:// and https:// schemas, the path can be
 *      either absolute or relative.
 *   2. An `tf.io.IOHandler` object that loads model artifacts with its `load`
 *      method.
 * @param options Optional configuration arguments for the model loading,
 *   including:
 *   - `strict`: Require that the provided weights exactly match those required
 *     by the layers.  Default true.  Passing false means that both extra
 *     weights and missing weights will be silently ignored.
 *   - `onProgress`: A function of the signature `(fraction: number) => void',
 *     that can be used as the progress callback for the model loading.
 * @returns A `Promise` of `tf.LayersModel`, with the topology and weights
 *     loaded.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */
export declare function loadLayersModel(pathOrIOHandler: string | io_2.IOHandler, options?: io_2.LoadOptions): Promise<LayersModel>;

/** @innamespace io */
declare interface LoadOptions {
    /**
     * RequestInit (options) for HTTP requests.
     *
     * For detailed information on the supported fields, see
     * [https://developer.mozilla.org/en-US/docs/Web/API/Request/Request](
     *     https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
     */
    requestInit?: RequestInit;
    /**
     * Progress callback.
     */
    onProgress?: OnProgressCallback;
    /**
     * A function used to override the `window.fetch` function.
     */
    fetchFunc?: Function;
    /**
     * Strict loading model: whether extraneous weights or missing
     * weights should trigger an `Error`.
     *
     * If `true`, require that the provided weights exactly match those
     * required by the layers. `false` means that both extra weights
     * and missing weights will be silently ignored.
     *
     * Default: `true`.
     */
    strict?: boolean;
    /**
     * Path prefix for weight files, by default this is calculated from the
     * path of the model JSON file.
     *
     * For instance, if the path to the model JSON file is
     * `http://localhost/foo/model.json`, then the default path prefix will be
     * `http://localhost/foo/`. If a weight file has the path value
     * `group1-shard1of2` in the weight manifest, then the weight file will be
     * loaded from `http://localhost/foo/group1-shard1of2` by default. However,
     * if you provide a `weightPathPrefix` value of
     * `http://localhost/foo/alt-weights`, then the weight file will be loaded
     * from the path `http://localhost/foo/alt-weights/group1-shard1of2` instead.
     */
    weightPathPrefix?: string;
    /**
     * Whether the module or model is to be loaded from TF Hub.
     *
     * Setting this to `true` allows passing a TF-Hub module URL, omitting the
     * standard model file name and the query parameters.
     *
     * Default: `false`.
     */
    fromTFHub?: boolean;
    /**
     * An async function to convert weight file name to URL. The weight file
     * names are stored in model.json's weightsManifest.paths field. By default we
     * consider weight files are colocated with the model.json file. For example:
     *     model.json URL: https://www.google.com/models/1/model.json
     *     group1-shard1of1.bin url:
     *        https://www.google.com/models/1/group1-shard1of1.bin
     *
     * With this func you can convert the weight file name to any URL.
     */
    weightUrlConverter?: (weightFileName: string) => Promise<string>;
}

/**
 * Reads a weights manifest JSON configuration, fetches the weights and
 * returns them as `Tensor`s.
 *
 * @param manifest The weights manifest JSON.
 * @param filePathPrefix The path prefix for filenames given in the manifest.
 *     Defaults to the empty string.
 * @param weightNames The names of the weights to be fetched.
 */
declare function loadWeights(manifest: WeightsManifestConfig, filePathPrefix?: string, weightNames?: string[], requestInit?: RequestInit): Promise<NamedTensorMap>;

export declare const localResponseNormalization: typeof localResponseNormalization_;

/**
 * Normalizes the activation of a local neighborhood across or within
 * channels.
 *
 * @param x The input tensor. The 4-D input tensor is treated as a 3-D array
 *     of 1D vectors (along the last dimension), and each vector is
 *     normalized independently.
 * @param depthRadius The number of adjacent channels in the 1D normalization
 *     window.
 * @param bias A constant bias term for the basis.
 * @param alpha A scale factor, usually positive.
 * @param beta An exponent.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
declare function localResponseNormalization_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, depthRadius?: number, bias?: number, alpha?: number, beta?: number): T;

/**
 * Computes flat index for a given location (multidimentionsal index) in a
 * Tensor/multidimensional array.
 *
 * @param locs Location in the tensor.
 * @param rank Rank of the tensor.
 * @param strides Tensor strides.
 */
declare function locToIndex(locs: number[], rank: number, strides: number[]): number;

export declare const Log = "Log";

export declare const log: typeof log_;

export declare const Log1p = "Log1p";

export declare const log1p: typeof log1p_;

/**
 * Computes natural logarithm of the input `tf.Tensor` plus one
 * element-wise: `ln(1 + x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, Math.E - 1]);
 *
 * x.log1p().print();  // or tf.log1p(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function log1p_<T extends Tensor>(x: T | TensorLike): T;

export declare type Log1pInputs = UnaryInputs;

/**
 * Computes natural logarithm of the input `tf.Tensor` element-wise: `ln(x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, Math.E]);
 *
 * x.log().print();  // or tf.log(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function log_<T extends Tensor>(x: T | TensorLike): T;

declare function log_2(...msg: Array<{}>): void;

export declare const LogicalAnd = "LogicalAnd";

export declare const logicalAnd: typeof logicalAnd_;

/**
 * Returns the truth value of `a AND b` element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([false, false, true, true], 'bool');
 * const b = tf.tensor1d([false, true, false, true], 'bool');
 *
 * a.logicalAnd(b).print();
 * ```
 *
 * @param a The first input tensor. Must be of dtype bool.
 * @param b The second input tensor. Must be of dtype bool.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function logicalAnd_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare type LogicalAndInputs = BinaryInputs;

export declare const LogicalNot = "LogicalNot";

export declare const logicalNot: typeof logicalNot_;

/**
 * Returns the truth value of `NOT x` element-wise.
 *
 * ```js
 * const a = tf.tensor1d([false, true], 'bool');
 *
 * a.logicalNot().print();
 * ```
 *
 * @param x The input tensor. Must be of dtype 'bool'.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function logicalNot_<T extends Tensor>(x: T | TensorLike): T;

export declare type LogicalNotInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const LogicalOr = "LogicalOr";

export declare const logicalOr: typeof logicalOr_;

/**
 * Returns the truth value of `a OR b` element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([false, false, true, true], 'bool');
 * const b = tf.tensor1d([false, true, false, true], 'bool');
 *
 * a.logicalOr(b).print();
 * ```
 * @param a The first input tensor. Must be of dtype bool.
 * @param b The second input tensor. Must be of dtype bool.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function logicalOr_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare type LogicalOrInputs = BinaryInputs;

export declare const logicalXor: typeof logicalXor_;

/**
 * Returns the truth value of `a XOR b` element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([false, false, true, true], 'bool');
 * const b = tf.tensor1d([false, true, false, true], 'bool');
 *
 * a.logicalXor(b).print();
 * ```
 *
 * @param a The first input tensor. Must be of dtype bool.
 * @param b The second input tensor. Must be of dtype bool.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function logicalXor_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const logImpl: SimpleUnaryImpl;

export declare type LogInputs = UnaryInputs;

/**
 * Logs in which values can only be numbers.
 *
 * Used when calling client-provided custom callbacks.
 */
export declare type Logs = {
    [key: string]: number;
};

export declare const logSigmoid: typeof logSigmoid_;

/**
 * Computes log sigmoid of the input `tf.Tensor` element-wise:
 * `logSigmoid(x)`. For numerical stability, we use `-tf.softplus(-x)`.
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.logSigmoid().print();  // or tf.logSigmoid(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function logSigmoid_<T extends Tensor>(x: T | TensorLike): T;

export declare const LogSoftmax = "LogSoftmax";

export declare const logSoftmax: typeof logSoftmax_;

/**
 * Computes the log softmax.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 *
 * a.logSoftmax().print();  // or tf.logSoftmax(a)
 * ```
 *
 * ```js
 * const a = tf.tensor2d([2, 4, 6, 1, 2, 3], [2, 3]);
 *
 * a.logSoftmax().print();  // or tf.logSoftmax(a)
 * ```
 *
 * @param logits The logits array.
 * @param axis The dimension softmax would be performed on. Defaults to `-1`
 *     which indicates the last dimension.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
declare function logSoftmax_<T extends Tensor>(logits: T | TensorLike, axis?: number): T;

export declare interface LogSoftmaxAttrs {
    axis: number;
}

export declare type LogSoftmaxInputs = Pick<NamedTensorInfoMap, 'logits'>;

export declare const logSumExp: typeof logSumExp_;

/**
 * Computes the log(sum(exp(elements across the reduction dimensions)).
 *
 * Reduces the input along the dimensions given in `axis`. Unless `keepDims`
 * is true, the rank of the array is reduced by 1 for each entry in `axis`.
 * If `keepDims` is true, the reduced dimensions are retained with length 1.
 * If `axis` has no entries, all dimensions are reduced, and an array with a
 * single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.logSumExp().print();  // or tf.logSumExp(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.logSumExp(axis).print();  // or tf.logSumExp(a, axis)
 * ```
 * @param x The input tensor.
 * @param axis The dimension(s) to reduce. If null (the default),
 *     reduces all dimensions.
 * @param keepDims If true, retains reduced dimensions with length
 *     of 1. Defaults to false.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function logSumExp_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

export declare const losses: {
    absoluteDifference: <T extends Tensor<Rank>, O extends Tensor<Rank>>(labels: TensorLike | T, predictions: TensorLike | T, weights?: TensorLike | Tensor<Rank>, reduction?: Reduction) => O;
    computeWeightedLoss: <T_1 extends Tensor<Rank>, O_1 extends Tensor<Rank>>(losses: TensorLike | T_1, weights?: TensorLike | Tensor<Rank>, reduction?: Reduction) => O_1;
    cosineDistance: <T_2 extends Tensor<Rank>, O_2 extends Tensor<Rank>>(labels: TensorLike | T_2, predictions: TensorLike | T_2, axis: number, weights?: TensorLike | Tensor<Rank>, reduction?: Reduction) => O_2;
    hingeLoss: <T_3 extends Tensor<Rank>, O_3 extends Tensor<Rank>>(labels: TensorLike | T_3, predictions: TensorLike | T_3, weights?: TensorLike | Tensor<Rank>, reduction?: Reduction) => O_3;
    huberLoss: <T_4 extends Tensor<Rank>, O_4 extends Tensor<Rank>>(labels: TensorLike | T_4, predictions: TensorLike | T_4, weights?: TensorLike | Tensor<Rank>, delta?: number, reduction?: Reduction) => O_4;
    logLoss: <T_5 extends Tensor<Rank>, O_5 extends Tensor<Rank>>(labels: TensorLike | T_5, predictions: TensorLike | T_5, weights?: TensorLike | Tensor<Rank>, epsilon?: number, reduction?: Reduction) => O_5;
    meanSquaredError: <T_6 extends Tensor<Rank>, O_6 extends Tensor<Rank>>(labels: TensorLike | T_6, predictions: TensorLike | T_6, weights?: TensorLike | Tensor<Rank>, reduction?: Reduction) => O_6;
    sigmoidCrossEntropy: <T_7 extends Tensor<Rank>, O_7 extends Tensor<Rank>>(multiClassLabels: TensorLike | T_7, logits: TensorLike | T_7, weights?: TensorLike | Tensor<Rank>, labelSmoothing?: number, reduction?: Reduction) => O_7;
    softmaxCrossEntropy: <T_8 extends Tensor<Rank>, O_8 extends Tensor<Rank>>(onehotLabels: TensorLike | T_8, logits: TensorLike | T_8, weights?: TensorLike | Tensor<Rank>, labelSmoothing?: number, reduction?: Reduction) => O_8;
};

/**
 * A type representing the strings that are valid loss names.
 */
declare type LossIdentifier = typeof lossOptions[number];

/**
 * List of all known loss names.
 */
declare const lossOptions: ("mean_squared_error" | "mean_absolute_error" | "mean_absolute_percentage_error" | "mean_squared_logarithmic_error" | "squared_hinge" | "hinge" | "categorical_hinge" | "logcosh" | "categorical_crossentropy" | "sparse_categorical_crossentropy" | "kullback_leibler_divergence" | "poisson" | "cosine_proximity")[];

/**
 * Type for loss a metric function.
 *
 * Takes a true value and a predicted value, and returns a loss or metric value.
 */
declare type LossOrMetricFn = (yTrue: Tensor_2, yPred: Tensor_2) => Tensor_2;

/**
 * a type for valid values of the `loss_weights` field.
 */
declare type LossWeights = number[] | {
    [key: string]: number;
};

export declare const LRN = "LRN";

export declare interface LRNAttrs {
    depthRadius: number;
    bias: number;
    alpha: number;
    beta: number;
}

export declare const LRNGrad = "LRNGrad";

export declare interface LRNGradAttrs {
    depthRadius: number;
    bias: number;
    alpha: number;
    beta: number;
}

export declare type LRNGradInputs = Pick<NamedTensorInfoMap, 'x' | 'y' | 'dy'>;

export declare type LRNInputs = Pick<NamedTensorInfoMap, 'x'>;

declare class LSTM extends RNN {
    /** @nocollapse */
    static className: string;
    constructor(args: LSTMLayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict): T;
}

/**
 * Long-Short Term Memory layer - Hochreiter 1997.
 *
 * This is an `RNN` layer consisting of one `LSTMCell`. However, unlike
 * the underlying `LSTMCell`, the `apply` method of `LSTM` operates
 * on a sequence of inputs. The shape of the input (not including the first,
 * batch dimension) needs to be at least 2-D, with the first dimension being
 * time steps. For example:
 *
 * ```js
 * const lstm = tf.layers.lstm({units: 8, returnSequences: true});
 *
 * // Create an input with 10 time steps.
 * const input = tf.input({shape: [10, 20]});
 * const output = lstm.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the `LSTMCell`'s number of units.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function lstm(args: LSTMLayerArgs): LSTM;

declare class LSTMCell extends RNNCell {
    /** @nocollapse */
    static className: string;
    readonly units: number;
    readonly activation: Activation_2;
    readonly recurrentActivation: Activation_2;
    readonly useBias: boolean;
    readonly kernelInitializer: Initializer;
    readonly recurrentInitializer: Initializer;
    readonly biasInitializer: Initializer;
    readonly unitForgetBias: boolean;
    readonly kernelConstraint: Constraint;
    readonly recurrentConstraint: Constraint;
    readonly biasConstraint: Constraint;
    readonly kernelRegularizer: Regularizer;
    readonly recurrentRegularizer: Regularizer;
    readonly biasRegularizer: Regularizer;
    readonly dropout: number;
    readonly recurrentDropout: number;
    readonly dropoutFunc: Function;
    readonly stateSize: number[];
    readonly implementation: number;
    readonly DEFAULT_ACTIVATION = "tanh";
    readonly DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid";
    readonly DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
    readonly DEFAULT_RECURRENT_INITIALIZER = "orthogonal";
    readonly DEFAULT_BIAS_INITIALIZER = "zeros";
    kernel: LayerVariable;
    recurrentKernel: LayerVariable;
    bias: LayerVariable;
    constructor(args: LSTMCellLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Cell class for `LSTM`.
 *
 * `LSTMCell` is distinct from the `RNN` subclass `LSTM` in that its
 * `apply` method takes the input data of only a single time step and returns
 * the cell's output at the time step, while `LSTM` takes the input data
 * over a number of time steps. For example:
 *
 * ```js
 * const cell = tf.layers.lstmCell({units: 2});
 * const input = tf.input({shape: [10]});
 * const output = cell.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10]: This is the cell's output at a single time step. The 1st
 * // dimension is the unknown batch size.
 * ```
 *
 * Instance(s) of `LSTMCell` can be used to construct `RNN` layers. The
 * most typical use of this workflow is to combine a number of cells into a
 * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
 * RNN. For example:
 *
 * ```js
 * const cells = [
 *   tf.layers.lstmCell({units: 4}),
 *   tf.layers.lstmCell({units: 8}),
 * ];
 * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
 *
 * // Create an input with 10 time steps and a length-20 vector at each step.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the last `lstmCell`'s number of units.
 * ```
 *
 * To create an `RNN` consisting of only *one* `LSTMCell`, use the
 * `tf.layers.lstm`.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function lstmCell(args: LSTMCellLayerArgs): LSTMCell;

/**
 * @docalias (data: Tensor2D, c: Tensor2D, h: Tensor2D): [Tensor2D, Tensor2D]
 */
export declare type LSTMCellFunc = {
    (data: Tensor2D, c: Tensor2D, h: Tensor2D): [Tensor2D, Tensor2D];
};

export declare interface LSTMCellLayerArgs extends SimpleRNNCellLayerArgs {
    /**
     * Activation function to use for the recurrent step.
     *
     * Defaults to hard sigmoid (`hardSigmoid`).
     *
     * If `null`, no activation is applied.
     */
    recurrentActivation?: ActivationIdentifier;
    /**
     * If `true`, add 1 to the bias of the forget gate at initialization.
     * Setting it to `true` will also force `biasInitializer = 'zeros'`.
     * This is recommended in
     * [Jozefowicz et
     * al.](http://www.jmlr.org/proceedings/papers/v37/jozefowicz15.pdf).
     */
    unitForgetBias?: boolean;
    /**
     * Implementation mode, either 1 or 2.
     *
     * Mode 1 will structure its operations as a larger number of
     *   smaller dot products and additions.
     *
     * Mode 2 will batch them into fewer, larger operations. These modes will
     * have different performance profiles on different hardware and
     * for different applications.
     *
     * Note: For superior performance, TensorFlow.js always uses implementation
     * 2, regardless of the actual value of this configuration field.
     */
    implementation?: number;
}

export declare interface LSTMLayerArgs extends SimpleRNNLayerArgs {
    /**
     * Activation function to use for the recurrent step.
     *
     * Defaults to hard sigmoid (`hardSigmoid`).
     *
     * If `null`, no activation is applied.
     */
    recurrentActivation?: ActivationIdentifier;
    /**
     * If `true`, add 1 to the bias of the forget gate at initialization.
     * Setting it to `true` will also force `biasInitializer = 'zeros'`.
     * This is recommended in
     * [Jozefowicz et
     * al.](http://www.jmlr.org/proceedings/papers/v37/jozefowicz15.pdf).
     */
    unitForgetBias?: boolean;
    /**
     * Implementation mode, either 1 or 2.
     *   Mode 1 will structure its operations as a larger number of
     *   smaller dot products and additions, whereas mode 2 will
     *   batch them into fewer, larger operations. These modes will
     *   have different performance profiles on different hardware and
     *   for different applications.
     *
     * Note: For superior performance, TensorFlow.js always uses implementation
     * 2, regardless of the actual value of this config field.
     */
    implementation?: number;
}

declare function makeOnesTypedArray<D extends DataType>(size: number, dtype: D): DataTypeMap[D];

declare function makeTypesMatch<T extends Tensor>(a: T, b: T): [T, T];

/**
 * Make nested `TypedArray` filled with zeros.
 * @param shape The shape information for the nested array.
 * @param dtype dtype of the array element.
 */
declare function makeZerosNestedTypedArray<D extends DataType>(shape: number[], dtype: D): number | any[];

declare function makeZerosTypedArray<D extends DataType>(size: number, dtype: D): DataTypeMap[D];

declare function MAPE(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

declare function mape(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

declare class Masking extends Layer {
    /** @nocollapse */
    static className: string;
    maskValue: number;
    constructor(args?: MaskingArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): {
        maskValue: number;
    };
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * Masks a sequence by using a mask value to skip timesteps.
 *
 * If all features for a given sample timestep are equal to `mask_value`,
 * then the sample timestep will be masked (skipped) in all downstream layers
 * (as long as they support masking).
 *
 * If any downstream layer does not support masking yet receives such
 * an input mask, an exception will be raised.
 *
 * Arguments:
 *   - `maskValue`: Either None or mask value to skip.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape`
 *   (tuple of integers, does not include the samples axis)
 *   when using this layer as the first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * @doc {heading: 'Layers', subheading: 'Mask', namespace: 'layers'}
 */
declare function masking(args?: MaskingArgs): Masking;

declare interface MaskingArgs extends LayerArgs {
    /**
     * Masking Value. Defaults to `0.0`.
     */
    maskValue?: number;
}

/** Converts a binary mask to an array of axes. Used in stridedSlice(). */
declare function maskToAxes(mask: number): number[];

declare namespace math {
    export {
        confusionMatrix
    }
}
export { math }

export declare class MathBackendCPU extends KernelBackend_2 {
    blockSize: number;
    data: DataStorage_2<TensorData<DataType_2>>;
    private firstUse;
    private static nextDataId;
    private nextDataId;
    constructor();
    write(values: backend_util_2.BackendValues, shape: number[], dtype: DataType_2): DataId_3;
    /**
     * Create a data bucket in cpu backend.
     * @param shape Shape of the `TensorInfo`.
     * @param dtype DType of the `TensorInfo`.
     * @param values The value of the `TensorInfo` stored as a flattened array.
     */
    makeTensorInfo(shape: number[], dtype: DataType_2, values?: backend_util_2.BackendValues | string[]): TensorInfo_3;
    /** Return refCount of a `TensorData`. */
    refCount(dataId: DataId_3): number;
    /** Increase refCount of a `TensorData`. */
    incRef(dataId: DataId_3): void;
    /** Decrease refCount of a `TensorData`. */
    decRef(dataId: DataId_3): void;
    move(dataId: DataId_3, values: backend_util_2.BackendValues, shape: number[], dtype: DataType_2, refCount: number): void;
    numDataIds(): number;
    read(dataId: DataId_3): Promise<backend_util_2.BackendValues>;
    readSync(dataId: DataId_3): backend_util_2.BackendValues;
    bufferSync<R extends Rank_2>(t: TensorInfo_3): TensorBuffer_2<R>;
    makeOutput<T extends Tensor_2>(values: backend_util_2.BackendValues, shape: number[], dtype: DataType_2): T;
    /**
     * Dispose the memory if the dataId has 0 refCount. Return true if the memory
     * is released or memory is not managed in this backend, false if memory is
     * not cleared.
     * @param dataId
     * @oaram force Optional, remove the data regardless of refCount
     */
    disposeData(dataId: DataId_3, force?: boolean): boolean;
    disposeIntermediateTensorInfo(tensorInfo: TensorInfo_3): void;
    time(f: () => void): Promise<BackendTimingInfo_2>;
    memory(): {
        unreliable: boolean;
        reasons: string[];
    };
    where(condition: Tensor_2): Tensor2D_2;
    dispose(): void;
    floatPrecision(): 16 | 32;
    /** Returns the smallest representable number.  */
    epsilon(): number;
}

export declare class MathBackendWebGL extends KernelBackend_2 {
    texData: DataStorage_2<TextureData>;
    gpgpu: GPGPUContext;
    private static nextDataId;
    private nextDataId;
    private pendingRead;
    private pendingDisposal;
    dataRefCount: WeakMap<object, number>;
    private numBytesInGPU;
    private canvas;
    private programTimersStack;
    private activeTimers;
    private uploadWaitMs;
    private downloadWaitMs;
    private lastGlFlushTime;
    private floatPrecisionValue;
    private textureManager;
    private binaryCache;
    private gpgpuCreatedLocally;
    private numMBBeforeWarning;
    private warnedAboutMemory;
    constructor(gpgpu?: GPGPUContext);
    numDataIds(): number;
    write(values: BackendValues_2, shape: number[], dtype: DataType_2): DataId_4;
    /** Return refCount of a `TensorData`. */
    refCount(dataId: DataId_4): number;
    /** Increase refCount of a `TextureData`. */
    incRef(dataId: DataId_4): void;
    /** Decrease refCount of a `TextureData`. */
    decRef(dataId: DataId_4): void;
    move(dataId: DataId_4, values: BackendValues_2, shape: number[], dtype: DataType_2, refCount: number): void;
    disposeIntermediateTensorInfo(tensorInfo: TensorInfo_3): void;
    readSync(dataId: DataId_4): BackendValues_2;
    read(dataId: DataId_4): Promise<BackendValues_2>;
    bufferSync<R extends Rank_2>(t: TensorInfo_3): TensorBuffer_2<R>;
    private checkNumericalProblems;
    private getValuesFromTexture;
    timerAvailable(): boolean;
    time(f: () => void): Promise<WebGLTimingInfo>;
    memory(): WebGLMemoryInfo;
    private startTimer;
    private endTimer;
    private getQueryTime;
    private pendingDeletes;
    /**
     * Decrease the RefCount on the dataId and dispose the memory if the dataId
     * has 0 refCount. If there are pending read on the data, the disposal would
     * added to the pending delete queue. Return true if the dataId is removed
     * from backend or the backend does not contain the dataId, false if the
     * dataId is not removed. Memory may or may not be released even when dataId
     * is removed, which also depends on dataRefCount, see `releaseGPU`.
     * @param dataId
     * @oaram force Optional, remove the data regardless of refCount
     */
    disposeData(dataId: DataId_4, force?: boolean): boolean;
    private releaseGPUData;
    getTexture(dataId: DataId_4): WebGLTexture;
    /**
     * Returns internal information for the specific data bucket. Used in unit
     * tests.
     */
    getDataInfo(dataId: DataId_4): TextureData;
    shouldExecuteOnCPU(inputs: TensorInfo_3[], sizeThreshold?: number): boolean;
    getGPGPUContext(): GPGPUContext;
    where(condition: Tensor_2): Tensor2D_2;
    private packedUnaryOp;
    abs<T extends Tensor_2>(x: T): T;
    makeTensorInfo(shape: number[], dtype: DataType_2, values?: BackendValues_2 | string[]): TensorInfo_3;
    private makeOutput;
    unpackTensor(input: TensorInfo_3): TensorInfo_3;
    packTensor(input: TensorInfo_3): TensorInfo_3;
    private packedReshape;
    private decode;
    runWebGLProgram(program: GPGPUProgram, inputs: TensorInfo_3[], outputDtype: DataType_2, customUniformValues?: number[][], preventEagerUnpackingOfOutput?: boolean): TensorInfo_3;
    compileAndRun(program: GPGPUProgram, inputs: TensorInfo_3[], outputDtype?: DataType_2, customUniformValues?: number[][], preventEagerUnpackingOfOutput?: boolean): TensorInfo_3;
    private getAndSaveBinary;
    getTextureManager(): TextureManager;
    private disposed;
    dispose(): void;
    floatPrecision(): 16 | 32;
    /** Returns the smallest representable number.  */
    epsilon(): number;
    uploadToGPU(dataId: DataId_4): void;
    private convertAndCacheOnCPU;
    private acquireTexture;
    private computeBytes;
}

export declare const matMul: typeof matMul_;

/**
 * Computes the dot product of two matrices, A * B. These must be matrices.
 *
 * ```js
 * const a = tf.tensor2d([1, 2], [1, 2]);
 * const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * a.matMul(b).print();  // or tf.matMul(a, b)
 * ```
 * @param a First matrix in dot product operation.
 * @param b Second matrix in dot product operation.
 * @param transposeA If true, `a` is transposed before multiplication.
 * @param transposeB If true, `b` is transposed before multiplication.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
declare function matMul_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike, transposeA?: boolean, transposeB?: boolean): T;

declare const matMul_2: typeof fusedMatMul_;

export declare const Max = "Max";

export declare const max: typeof max_;

/**
 * Computes the maximum of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and an
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.max().print();  // or tf.max(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.max(axis).print();  // or tf.max(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function max_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

export declare interface MaxAttrs {
    reductionIndices: number | number[];
    keepDims: boolean;
}

declare function maxImpl(aVals: TypedArray_2, reduceSize: number, outShape: number[], dtype: DataType_2): TypedArray_2;

export declare const Maximum = "Maximum";

export declare const maximum: typeof maximum_;

/**
 * Returns the max of a and b (`a > b ? a : b`) element-wise.
 * Supports broadcasting.
 *
 * We also expose `tf.maximumStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.maximum(b).print();  // or tf.maximum(a, b)
 * ```
 *
 * ```js
 * // Broadcast maximum a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.maximum(b).print();  // or tf.maximum(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function maximum_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare class Maximum_2 extends Merge {
    /** @nocollapse */
    static className: string;
    constructor(args?: LayerArgs);
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
}

/**
 * Layer that computes the element-wise maximum an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape and returns a
 * single tensor (also of the same shape). For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const maxLayer = tf.layers.maximum();
 * const max = maxLayer.apply([input1, input2]);
 * console.log(JSON.stringify(max.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function maximum_2(args?: LayerArgs): Maximum_2;

declare const maximumImpl: SimpleBinaryKernelImpl;

export declare type MaximumInputs = BinaryInputs;

export declare type MaxInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * MaxNorm weight constraint.
 *
 * Constrains the weights incident to each hidden unit
 * to have a norm less than or equal to a desired value.
 *
 * References
 *       - [Dropout: A Simple Way to Prevent Neural Networks from Overfitting
 * Srivastava, Hinton, et al.
 * 2014](http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
 *
 * @doc {heading: 'Constraints',namespace: 'constraints'}
 */
declare function maxNorm(args: MaxNormArgs): Constraint;

declare interface MaxNormArgs {
    /**
     * Maximum norm for incoming weights
     */
    maxValue?: number;
    /**
     * Axis along which to calculate norms.
     *
     *  For instance, in a `Dense` layer the weight matrix
     *  has shape `[inputDim, outputDim]`,
     *  set `axis` to `0` to constrain each weight vector
     *  of length `[inputDim,]`.
     *  In a `Conv2D` layer with `dataFormat="channels_last"`,
     *  the weight tensor has shape
     *  `[rows, cols, inputDepth, outputDepth]`,
     *  set `axis` to `[0, 1, 2]`
     *  to constrain the weights of each filter tensor of size
     *  `[rows, cols, inputDepth]`.
     */
    axis?: number;
}

export declare const MaxPool = "MaxPool";

export declare const maxPool: typeof maxPool_;

declare const maxPool1d: typeof maxPooling1d;

declare const maxPool2d: typeof maxPooling2d;

export declare const MaxPool3D = "MaxPool3D";

export declare const maxPool3d: typeof maxPool3d_;

/**
 * Computes the 3D max pooling.
 *
 * ```js
 * const x = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
 * const result = tf.maxPool3d(x, 2, 1, 'valid');
 * result.print();
 * ```
 *
 * @param x The input tensor, of rank 5 or rank 4 of shape
 *     `[batch, depth, height, width, inChannels]`.
 * @param filterSize The filter size:
 *     `[filterDepth, filterHeight, filterWidth]`.
 *     If `filterSize` is a single number,
 *     then `filterDepth == filterHeight == filterWidth`.
 * @param strides The strides of the pooling:
 *     `[strideDepth, strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideDepth == strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param dataFormat An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function maxPool3d_<T extends Tensor4D | Tensor5D>(x: T | TensorLike, filterSize: [number, number, number] | number, strides: [number, number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil', dataFormat?: 'NDHWC' | 'NCDHW'): T;

export declare interface MaxPool3DAttrs {
    filterSize: [number, number, number] | number;
    strides: [number, number, number] | number;
    pad: 'valid' | 'same' | number;
    dataFormat: 'NDHWC' | 'NCDHW';
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare const MaxPool3DGrad = "MaxPool3DGrad";

export declare interface MaxPool3DGradAttrs {
    filterSize: [number, number, number] | number;
    strides: [number, number, number] | number;
    pad: 'valid' | 'same' | number;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare type MaxPool3DGradInputs = Pick<NamedTensorInfoMap, 'dy' | 'input' | 'output'>;

export declare type MaxPool3DInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Computes the 2D max pooling of an image.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filterSize The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in dilated pooling. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 */
declare function maxPool_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number | conv_util.ExplicitPadding, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;

export declare interface MaxPoolAttrs {
    filterSize: [number, number] | number;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare const MaxPoolGrad = "MaxPoolGrad";

export declare interface MaxPoolGradAttrs {
    filterSize: [number, number] | number;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number | ExplicitPadding;
    dimRoundingMode?: 'floor' | 'round' | 'ceil';
}

export declare type MaxPoolGradInputs = Pick<NamedTensorInfoMap, 'dy' | 'input' | 'output'>;

declare class MaxPooling1D extends Pooling1D {
    /** @nocollapse */
    static className: string;
    constructor(args: Pooling1DLayerArgs);
    protected poolingFunction(inputs: Tensor_2, poolSize: [number, number], strides: [number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
}

/**
 * Max pooling operation for temporal data.
 *
 * Input shape:  `[batchSize, inLength, channels]`
 *
 * Output shape: `[batchSize, pooledLength, channels]`
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function maxPooling1d(args: Pooling1DLayerArgs): MaxPooling1D;

declare class MaxPooling2D extends Pooling2D {
    /** @nocollapse */
    static className: string;
    constructor(args: Pooling2DLayerArgs);
    protected poolingFunction(inputs: Tensor_2, poolSize: [number, number], strides: [number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
}

/**
 * Max pooling operation for spatial data.
 *
 * Input shape
 *   - If `dataFormat === CHANNEL_LAST`:
 *       4D tensor with shape:
 *       `[batchSize, rows, cols, channels]`
 *   - If `dataFormat === CHANNEL_FIRST`:
 *      4D tensor with shape:
 *       `[batchSize, channels, rows, cols]`
 *
 * Output shape
 *   - If `dataFormat=CHANNEL_LAST`:
 *       4D tensor with shape:
 *       `[batchSize, pooleRows, pooledCols, channels]`
 *   - If `dataFormat=CHANNEL_FIRST`:
 *       4D tensor with shape:
 *       `[batchSize, channels, pooleRows, pooledCols]`
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function maxPooling2d(args: Pooling2DLayerArgs): MaxPooling2D;

declare class MaxPooling3D extends Pooling3D {
    /** @nocollapse */
    static className: string;
    constructor(args: Pooling3DLayerArgs);
    protected poolingFunction(inputs: Tensor_2, poolSize: [number, number, number], strides: [number, number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
}

/**
 * Max pooling operation for 3D data.
 *
 * Input shape
 *   - If `dataFormat === channelsLast`:
 *       5D tensor with shape:
 *       `[batchSize, depths, rows, cols, channels]`
 *   - If `dataFormat === channelsFirst`:
 *      5D tensor with shape:
 *       `[batchSize, channels, depths, rows, cols]`
 *
 * Output shape
 *   - If `dataFormat=channelsLast`:
 *       5D tensor with shape:
 *       `[batchSize, pooledDepths, pooledRows, pooledCols, channels]`
 *   - If `dataFormat=channelsFirst`:
 *       5D tensor with shape:
 *       `[batchSize, channels, pooledDepths, pooledRows, pooledCols]`
 *
 * @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'}
 */
declare function maxPooling3d(args: Pooling3DLayerArgs): MaxPooling3D;

export declare type MaxPoolInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const MaxPoolWithArgmax = "MaxPoolWithArgmax";

export declare const maxPoolWithArgmax: typeof maxPoolWithArgmax_;

/**
 * Computes the 2D max pooling of an image with Argmax index.
 * The indices in argmax are flattened, so that a maximum value at position `[b,
 * y, x, c]` becomes flattened index: `(y * width + x) * channels + c` if
 * include_batch_in_index is False; `((b * height + y) * width + x) * channels
 * +c` if include_batch_in_index is True.
 *
 * The indices returned are always in `[0, height) x [0, width)` before
 * flattening.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filterSize The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 * @param dataFormat An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param includeBatchIndex Defaults to False. Whether to include batch
 *    dimension in flattened index of argmax.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function maxPoolWithArgmax_<T extends Tensor4D>(x: T | TensorLike, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number, includeBatchInIndex?: boolean): NamedTensorMap;

export declare interface MaxPoolWithArgmaxAttrs {
    filterSize: [number, number] | number;
    strides: [number, number] | number;
    pad: 'valid' | 'same' | number;
    includeBatchInIndex: boolean;
}

export declare type MaxPoolWithArgmaxInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const Mean = "Mean";

export declare const mean: typeof mean_;

/**
 * Computes the mean of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces `x` along the dimensions given in `axis`. Unless `keepDims` is
 * true, the rank of the `tf.Tensor` is reduced by 1 for each entry in `axis`.
 * If `keepDims` is true, the reduced dimensions are retained with length 1.
 * If `axis` has no entries, all dimensions are reduced, and a `tf.Tensor` with
 * a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.mean().print();  // or tf.mean(a)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.mean(axis).print();  // or tf.mean(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function mean_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

/**
 * Loss or metric function: Mean absolute error.
 *
 * Mathematically, mean absolute error is defined as:
 *   `mean(abs(yPred - yTrue))`,
 * wherein the `mean` is applied over feature dimensions.
 *
 * ```js
 * const yTrue = tf.tensor2d([[0, 1], [0, 0], [2, 3]]);
 * const yPred = tf.tensor2d([[0, 1], [0, 1], [-2, -3]]);
 * const mse = tf.metrics.meanAbsoluteError(yTrue, yPred);
 * mse.print();
 * ```
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Mean absolute error Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function meanAbsoluteError(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

/**
 * Loss or metric function: Mean absolute percentage error.
 *
 * ```js
 * const yTrue = tf.tensor2d([[0, 1], [10, 20]]);
 * const yPred = tf.tensor2d([[0, 1], [11, 24]]);
 * const mse = tf.metrics.meanAbsolutePercentageError(yTrue, yPred);
 * mse.print();
 * ```
 *
 * Aliases: `tf.metrics.MAPE`, `tf.metrics.mape`.
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Mean absolute percentage error Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function meanAbsolutePercentageError(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare interface MeanAttrs {
    axis: number | number[];
    keepDims: boolean;
}

export declare type MeanInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Loss or metric function: Mean squared error.
 *
 * ```js
 * const yTrue = tf.tensor2d([[0, 1], [3, 4]]);
 * const yPred = tf.tensor2d([[0, 1], [-3, -4]]);
 * const mse = tf.metrics.meanSquaredError(yTrue, yPred);
 * mse.print();
 * ```
 *
 * Aliases: `tf.metrics.MSE`, `tf.metrics.mse`.
 *
 * @param yTrue Truth Tensor.
 * @param yPred Prediction Tensor.
 * @return Mean squared error Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function meanSquaredError(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

/**
 * Returns memory info at the current time in the program. The result is an
 * object with the following properties:
 *
 * - `numBytes`: Number of bytes allocated (undisposed) at this time.
 * - `numTensors`: Number of unique tensors allocated.
 * - `numDataBuffers`: Number of unique data buffers allocated
 *   (undisposed) at this time, which is ≤ the number of tensors
 *   (e.g. `a.reshape(newShape)` makes a new Tensor that shares the same
 *   data buffer with `a`).
 * - `unreliable`: True if the memory usage is unreliable. See `reasons` when
 *    `unreliable` is true.
 * - `reasons`: `string[]`, reasons why the memory is unreliable, present if
 *    `unreliable` is true.
 *
 * WebGL Properties:
 * - `numBytesInGPU`: Number of bytes allocated (undisposed) in the GPU only at
 *     this time.
 *
 * @doc {heading: 'Performance', subheading: 'Memory'}
 */
export declare function memory(): MemoryInfo;

export declare type MemoryInfo = {
    numTensors: number;
    numDataBuffers: number;
    numBytes: number;
    unreliable?: boolean;
    reasons: string[];
};

/**
 * Generic Merge layer for element-wise merge functions.
 *
 * Used to implement `Sum`, `Average`, `Concatenate`, etc.
 */
declare abstract class Merge extends Layer {
    protected reshapeRequired: boolean;
    constructor(args?: LayerArgs);
    /**
     * Logic for merging multiple tensors, to be overridden by subclasses.
     * @param inputs
     */
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
    /**
     * Computes the shape of the result of an elementwise operation.
     *
     * @param shape1: Shape of the first tensor.
     * @param shape2: Shape of the second tensor.
     * @returns Expected output shape when an elementwise operation is carried
     *   out on 2 tensors with shapes `shape1` and `shape2`.
     * @throws ValueError: If `shape1` and `shape2` are not compatible for
     *   element-wise operations.
     */
    private computeElementwiseOpOutputShape;
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2;
}

/**
 * Merges real and imaginary Float32Arrays into a single complex Float32Array.
 *
 * The memory layout is interleaved as follows:
 * real: [r0, r1, r2]
 * imag: [i0, i1, i2]
 * complex: [r0, i0, r1, i1, r2, i2]
 *
 * This is the inverse of splitRealAndImagArrays.
 *
 * @param real The real values of the complex tensor values.
 * @param imag The imag values of the complex tensor values.
 * @returns A complex tensor as a Float32Array with merged values.
 */
declare function mergeRealAndImagArrays(real: Float32Array, imag: Float32Array): Float32Array;

/**
 * Broadcasts parameters for evaluation on an N-D grid.
 *
 * Given N one-dimensional coordinate arrays `*args`, returns a list `outputs`
 * of N-D coordinate arrays for evaluating expressions on an N-D grid.
 *
 * Notes:
 * `meshgrid` supports cartesian ('xy') and matrix ('ij') indexing conventions.
 * When the `indexing` argument is set to 'xy' (the default), the broadcasting
 * instructions for the first two dimensions are swapped.
 * Examples:
 * Calling `const [X, Y] = meshgrid(x, y)` with the tensors
 *
 * ```javascript
 * const x = [1, 2, 3];
 * const y = [4, 5, 6];
 * const [X, Y] = tf.meshgrid(x, y);
 * // X = [[1, 2, 3],
 * //      [1, 2, 3],
 * //      [1, 2, 3]]
 * // Y = [[4, 4, 4],
 * //      [5, 5, 5],
 * //      [6, 6, 6]]
 * ```
 *
 * @param x Tensor with rank geq 1.
 * @param y Tensor with rank geq 1.
 * @param indexing
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
export declare function meshgrid<T extends Tensor>(x?: T | TensorLike, y?: T | TensorLike, { indexing }?: {
    indexing?: string;
}): T[];

/**
 * Interface for SavedModel/GraphModel MetaGraph info.
 */
export declare interface MetaGraph {
    tags: string[];
    signatureDefs: SignatureDef;
}

/**
 * @deprecated Deprecated interface for SavedModel/GraphModel MetaGraph info.
 *     User MetaGraph instead.
 */
export declare interface MetaGraphInfo {
    tags: string[];
    signatureDefs: SignatureDefInfo;
}

declare namespace metrics {
    export {
        binaryAccuracy,
        binaryCrossentropy,
        sparseCategoricalAccuracy,
        categoricalAccuracy,
        categoricalCrossentropy,
        precision,
        recall,
        cosineProximity,
        meanAbsoluteError,
        meanAbsolutePercentageError,
        MAPE,
        mape,
        meanSquaredError,
        MSE,
        mse
    }
}
export { metrics }

declare type MetricsIdentifier = string;

/**
 * Create an iterator that generate frequency-domain spectrogram `Tensor`s from
 * microphone audio stream with browser's native FFT. This API only works in
 * browser environment when the device has microphone.
 *
 * Note: this code snippet only works when the device has a microphone. It will
 * request permission to open the microphone when running.
 * ```js
 * const mic = await tf.data.microphone({
 *   fftSize: 1024,
 *   columnTruncateLength: 232,
 *   numFramesPerSpectrogram: 43,
 *   sampleRateHz:44100,
 *   includeSpectrogram: true,
 *   includeWaveform: true
 * });
 * const audioData = await mic.capture();
 * const spectrogramTensor = audioData.spectrogram;
 * spectrogramTensor.print();
 * const waveformTensor = audioData.waveform;
 * waveformTensor.print();
 * mic.stop();
 * ```
 *
 * @param microphoneConfig A `MicrophoneConfig` object that contains
 *     configurations of reading audio data from microphone.
 *
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   ignoreCI: true
 *  }
 */
declare function microphone(microphoneConfig?: MicrophoneConfig): Promise<MicrophoneIterator>;

/**
 * Interface configuring data from microphone audio stream.
 */
declare interface MicrophoneConfig {
    sampleRateHz?: 44100 | 48000;
    fftSize?: number;
    columnTruncateLength?: number;
    numFramesPerSpectrogram?: number;
    audioTrackConstraints?: MediaTrackConstraints;
    smoothingTimeConstant?: number;
    includeSpectrogram?: boolean;
    includeWaveform?: boolean;
}

/**
 * Provide a stream of tensors from microphone audio stream. The tensors are
 * representing audio data as frequency-domain spectrogram generated with
 * browser's native FFT. Tensors representing time-domain waveform is available
 * based on configuration. Only works in browser environment.
 */
declare class MicrophoneIterator extends LazyIterator<TensorContainer_2> {
    protected readonly microphoneConfig: MicrophoneConfig;
    private isClosed;
    private stream;
    private readonly fftSize;
    private readonly columnTruncateLength;
    private freqData;
    private timeData;
    private readonly numFrames;
    private analyser;
    private audioContext;
    private sampleRateHz;
    private readonly audioTrackConstraints;
    private readonly smoothingTimeConstant;
    private readonly includeSpectrogram;
    private readonly includeWaveform;
    private constructor();
    summary(): string;
    static create(microphoneConfig?: MicrophoneConfig): Promise<MicrophoneIterator>;
    start(): Promise<void>;
    next(): Promise<IteratorResult<TensorContainer_2>>;
    capture(): Promise<{
        spectrogram: Tensor3D_2;
        waveform: Tensor2D_2;
    }>;
    private getAudioData;
    stop(): void;
    toArray(): Promise<Tensor_2[]>;
    getSampleRate(): number;
    private flattenQueue;
    private getTensorFromAudioDataArray;
}

export declare const Min = "Min";

export declare const min: typeof min_;

/**
 * Computes the minimum value from the input.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the array is reduced by 1 for each entry in `axes`.
 * If `keepDims` is true, the reduced dimensions are retained with length 1.
 * If `axes` has no entries, all dimensions are reduced, and an array with a
 * single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.min().print();  // or tf.min(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.min(axis).print();  // or tf.min(x, axis)
 * ```
 *
 * @param x The input Tensor.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function min_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

export declare interface MinAttrs {
    axis: number | number[];
    keepDims: boolean;
}

export declare const Minimum = "Minimum";

export declare const minimum: typeof minimum_;

/**
 * Returns the min of a and b (`a < b ? a : b`) element-wise.
 * Supports broadcasting.
 *
 * We also expose `minimumStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.minimum(b).print();  // or tf.minimum(a, b)
 * ```
 *
 * ```js
 * // Broadcast minimum a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.minimum(b).print();  // or tf.minimum(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function minimum_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare class Minimum_2 extends Merge {
    /** @nocollapse */
    static className: string;
    constructor(args?: LayerArgs);
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
}

/**
 * Layer that computes the element-wise minimum of an `Array` of inputs.
 *
 * It takes as input a list of tensors, all of the same shape and returns a
 * single tensor (also of the same shape). For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const minLayer = tf.layers.minimum();
 * const min = minLayer.apply([input1, input2]);
 * console.log(JSON.stringify(min.shape));
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function minimum_2(args?: LayerArgs): Minimum_2;

declare const minimumImpl: SimpleBinaryKernelImpl;

export declare type MinimumInputs = BinaryInputs;

export declare type MinInputs = Pick<NamedTensorInfoMap, 'x'>;

/** @doc {heading: 'Constraints', namespace: 'constraints'} */
declare function minMaxNorm(config: MinMaxNormArgs): Constraint;

declare interface MinMaxNormArgs {
    /**
     * Minimum norm for incoming weights
     */
    minValue?: number;
    /**
     * Maximum norm for incoming weights
     */
    maxValue?: number;
    /**
     * Axis along which to calculate norms.
     * For instance, in a `Dense` layer the weight matrix
     * has shape `[inputDim, outputDim]`,
     * set `axis` to `0` to constrain each weight vector
     * of length `[inputDim,]`.
     * In a `Conv2D` layer with `dataFormat="channels_last"`,
     * the weight tensor has shape
     * `[rows, cols, inputDepth, outputDepth]`,
     * set `axis` to `[0, 1, 2]`
     * to constrain the weights of each filter tensor of size
     * `[rows, cols, inputDepth]`.
     */
    axis?: number;
    /**
     * Rate for enforcing the constraint: weights will be rescaled to yield:
     * `(1 - rate) * norm + rate * norm.clip(minValue, maxValue)`.
     * Effectively, this means that rate=1.0 stands for strict
     * enforcement of the constraint, while rate<1.0 means that
     * weights will be rescaled at each step to slowly move
     * towards a value inside the desired interval.
     */
    rate?: number;
}

export declare const MirrorPad = "MirrorPad";

export declare const mirrorPad: typeof mirrorPad_;

/**
 * Pads a `tf.Tensor` using mirror padding.
 *
 * This operation implements the `REFLECT` and `SYMMETRIC` modes of pad.
 *
 * ```js
 * const x = tf.range(0, 9).reshape([1, 1, 3, 3]);
 * x.mirrorPad([[0, 0], [0, 0], [2, 2], [2, 2]], 'reflect').print();
 * ```
 * @param x The tensor to pad.
 * @param paddings An array of length `R` (the rank of the tensor), where
 * each element is a length-2 tuple of ints `[padBefore, padAfter]`,
 * specifying how much to pad along each dimension of the tensor.
 * In "reflect" mode, the padded regions do not include the borders,
 * while in "symmetric" mode the padded regions do include the borders.
 * For example, if the input is `[1, 2, 3]` and paddings is `[0, 2]`,
 * then the output is `[1, 2, 3, 2, 1]` in "reflect" mode, and
 * `[1, 2, 3, 3, 2]` in "symmetric" mode.
 * If `mode` is "reflect" then both `paddings[D, 0]` and `paddings[D, 1]`
 * must be no greater than `x.shape[D] - 1`. If mode is "symmetric"
 * then both `paddings[D, 0]` and `paddings[D, 1]` must be no greater than
 * `x.shape[D]`
 * @param mode String to specify padding mode. Can be `'reflect' | 'symmetric'`
 */
/** @doc {heading: 'Tensors', subheading: 'Transformations'} */
declare function mirrorPad_<T extends Tensor>(x: T | TensorLike, paddings: Array<[number, number]>, mode: 'reflect' | 'symmetric'): T;

export declare interface MirrorPadAttrs {
    paddings: Array<[number, number]>;
    mode: 'reflect' | 'symmetric';
}

export declare type MirrorPadInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare function mockIsMobile(value: boolean | undefined): void;

export declare const Mod = "Mod";

export declare const mod: typeof mod_;

/**
 * Returns the mod of a and b element-wise.
 * `floor(x / y) * y + mod(x, y) = x`
 * Supports broadcasting.
 *
 * We also expose `tf.modStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.mod(b).print();  // or tf.mod(a, b)
 * ```
 *
 * ```js
 * // Broadcast a mod b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.mod(b).print();  // or tf.mod(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function mod_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

/**
 * A model is a data structure that consists of `Layers` and defines inputs
 * and outputs.
 *
 * The key difference between `tf.model` and `tf.sequential` is that
 * `tf.model` is more generic, supporting an arbitrary graph (without
 * cycles) of layers. `tf.sequential` is less generic and supports only a linear
 * stack of layers.
 *
 * When creating a `tf.LayersModel`, specify its input(s) and output(s). Layers
 * are used to wire input(s) to output(s).
 *
 * For example, the following code snippet defines a model consisting of
 * two `dense` layers, with 10 and 4 units, respectively.
 *
 * ```js
 * // Define input, which has a size of 5 (not including batch dimension).
 * const input = tf.input({shape: [5]});
 *
 * // First dense layer uses relu activation.
 * const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu'});
 * // Second dense layer uses softmax activation.
 * const denseLayer2 = tf.layers.dense({units: 4, activation: 'softmax'});
 *
 * // Obtain the output symbolic tensor by applying the layers on the input.
 * const output = denseLayer2.apply(denseLayer1.apply(input));
 *
 * // Create the model based on the inputs.
 * const model = tf.model({inputs: input, outputs: output});
 *
 * // The model can be used for training, evaluation and prediction.
 * // For example, the following line runs prediction with the model on
 * // some fake data.
 * model.predict(tf.ones([2, 5])).print();
 * ```
 * See also:
 *   `tf.sequential`, `tf.loadLayersModel`.
 *
 * @doc {heading: 'Models', subheading: 'Creation'}
 */
export declare function model(args: ContainerArgs): LayersModel;

/**
 * Options for loading a saved mode in TensorFlow.js format.
 */
export declare interface ModelAndWeightsConfig {
    /**
     * A JSON object or JSON string containing the model config.
     *
     * This can be either of the following two formats:
     *   - A model archiecture-only config,  i.e., a format consistent with the
     *     return value of`keras.Model.to_json()`.
     *   - A full model config, containing not only model architecture, but also
     *     training options and state, i.e., a format consistent with the return
     *     value of `keras.models.save_model()`.
     */
    modelTopology: PyJsonDict;
    /**
     * A weights manifest in TensorFlow.js format.
     */
    weightsManifest?: io_2.WeightsManifestConfig;
    /**
     * Path to prepend to the paths in `weightManifest` before fetching.
     *
     * The path may optionally end in a slash ('/').
     */
    pathPrefix?: string;
}

/**
 * The serialized artifacts of a model, including topology and weights.
 *
 * The `modelTopology`, `trainingConfig`, `weightSpecs` and `weightData` fields
 * of this interface are optional, in order to support topology- or weights-only
 * saving and loading.
 *
 * Note this interface is used internally in IOHandlers.  For the file format
 * written to disk as `model.json`, see `ModelJSON`.
 */
declare interface ModelArtifacts {
    /**
     * Model topology.
     *
     * For Keras-style `tf.Model`s, this is a JSON object.
     * For TensorFlow-style models (e.g., `SavedModel`), this is the JSON
     * encoding of the `GraphDef` protocol buffer.
     */
    modelTopology?: {} | ArrayBuffer;
    /**
     * Serialized configuration for the model's training.
     */
    trainingConfig?: TrainingConfig;
    /**
     * Weight specifications.
     *
     * This corresponds to the weightsData below.
     */
    weightSpecs?: WeightsManifestEntry[];
    /**
     * Binary buffer for all weight values concatenated in the order specified
     * by `weightSpecs`.
     */
    weightData?: ArrayBuffer;
    /**
     * Hard-coded format name for models saved from TensorFlow.js or converted
     * by TensorFlow.js Converter.
     */
    format?: string;
    /**
     * What library is responsible for originally generating this artifact.
     *
     * Used for debugging purposes. E.g., 'TensorFlow.js v1.0.0'.
     */
    generatedBy?: string;
    /**
     * What library or tool is responsible for converting the original model
     * to this format, applicable only if the model is output by a converter.
     *
     * Used for debugging purposes.  E.g., 'TensorFlow.js Converter v1.0.0'.
     *
     * A value of `null` means the model artifacts are generated without any
     * conversion process (e.g., saved directly from a TensorFlow.js
     * `tf.LayersModel` instance.)
     */
    convertedBy?: string | null;
    /**
     * Inputs and outputs signature for saved model.
     */
    signature?: {};
    /**
     * User-defined metadata about the model.
     */
    userDefinedMetadata?: {
        [key: string]: {};
    };
    /**
     * Initializer for the model.
     */
    modelInitializer?: {};
}

declare interface ModelArtifactsInfo {
    /**
     * Timestamp for when the model is saved.
     */
    dateSaved: Date;
    /**
     * TODO (cais,yassogba) consider removing GraphDef as GraphDefs now
     * come in a JSON format and none of our IOHandlers support a non json
     * format. We could conder replacing this with 'Binary' if we want to
     * allow future handlers to save to non json formats (though they will
     * probably want more information than 'Binary').
     * Type of the model topology
     *
     * Type of the model topology
     *
     * Possible values:
     *   - JSON: JSON config (human-readable, e.g., Keras JSON).
     *   - GraphDef: TensorFlow
     *     [GraphDef](https://www.tensorflow.org/extend/tool_developers/#graphdef)
     *     protocol buffer (binary).
     */
    modelTopologyType: 'JSON' | 'GraphDef';
    /**
     * Size of model topology (Keras JSON or GraphDef), in bytes.
     */
    modelTopologyBytes?: number;
    /**
     * Size of weight specification or manifest, in bytes.
     */
    weightSpecsBytes?: number;
    /**
     * Size of weight value data, in bytes.
     */
    weightDataBytes?: number;
}

/**
 * Configuration for calls to `LayersModel.compile()`.
 */
export declare interface ModelCompileArgs {
    /**
     * An instance of `tf.train.Optimizer` or a string name for an Optimizer.
     */
    optimizer: string | Optimizer_2;
    /**
     * Object function(s) or name(s) of object function(s).
     * If the model has multiple outputs, you can use a different loss
     * on each output by passing a dictionary or an Array of losses.
     * The loss value that will be minimized by the model will then be the sum
     * of all individual losses.
     */
    loss: string | string[] | {
        [outputName: string]: string;
    } | LossOrMetricFn | LossOrMetricFn[] | {
        [outputName: string]: LossOrMetricFn;
    };
    /**
     * List of metrics to be evaluated by the model during training and testing.
     * Typically you will use `metrics=['accuracy']`.
     * To specify different metrics for different outputs of a multi-output
     * model, you could also pass a dictionary.
     */
    metrics?: string | LossOrMetricFn | Array<string | LossOrMetricFn> | {
        [outputName: string]: string | LossOrMetricFn;
    };
}

export declare interface ModelEvaluateArgs {
    /**
     * Batch size (Integer). If unspecified, it will default to 32.
     */
    batchSize?: number;
    /**
     * Verbosity mode.
     */
    verbose?: ModelLoggingVerbosity;
    /**
     * Tensor of weights to weight the contribution of different samples to the
     * loss and metrics.
     */
    sampleWeight?: Tensor_2;
    /**
     * integer: total number of steps (batches of samples)
     * before declaring the evaluation round finished. Ignored with the default
     * value of `undefined`.
     */
    steps?: number;
}

/**
 * Interface for configuring model evaluation based on a dataset object.
 */
declare interface ModelEvaluateDatasetArgs {
    /**
     * Number of batches to draw from the dataset object before ending the
     * evaluation.
     */
    batches?: number;
    /**
     * Verbosity mode.
     */
    verbose?: ModelLoggingVerbosity;
}

/**
 * Interface configuration model training based on data as `tf.Tensor`s.
 */
export declare interface ModelFitArgs {
    /**
     * Number of samples per gradient update. If unspecified, it
     * will default to 32.
     */
    batchSize?: number;
    /**
     * Integer number of times to iterate over the training data arrays.
     */
    epochs?: number;
    /**
     * Verbosity level.
     *
     * Expected to be 0, 1, or 2. Default: 1.
     *
     * 0 - No printed message during fit() call.
     * 1 - In Node.js (tfjs-node), prints the progress bar, together with
     *     real-time updates of loss and metric values and training speed.
     *     In the browser: no action. This is the default.
     * 2 - Not implemented yet.
     */
    verbose?: ModelLoggingVerbosity;
    /**
     * List of callbacks to be called during training.
     * Can have one or more of the following callbacks:
     *   - `onTrainBegin(logs)`: called when training starts.
     *   - `onTrainEnd(logs)`: called when training ends.
     *   - `onEpochBegin(epoch, logs)`: called at the start of every epoch.
     *   - `onEpochEnd(epoch, logs)`: called at the end of every epoch.
     *   - `onBatchBegin(batch, logs)`: called at the start of every batch.
     *   - `onBatchEnd(batch, logs)`: called at the end of every batch.
     *   - `onYield(epoch, batch, logs)`: called every `yieldEvery` milliseconds
     *      with the current epoch, batch and logs. The logs are the same
     *      as in `onBatchEnd()`. Note that `onYield` can skip batches or
     *      epochs. See also docs for `yieldEvery` below.
     */
    callbacks?: BaseCallback[] | CustomCallbackArgs | CustomCallbackArgs[];
    /**
     * Float between 0 and 1: fraction of the training data
     * to be used as validation data. The model will set apart this fraction of
     * the training data, will not train on it, and will evaluate the loss and
     * any model metrics on this data at the end of each epoch.
     * The validation data is selected from the last samples in the `x` and `y`
     * data provided, before shuffling.
     */
    validationSplit?: number;
    /**
     * Data on which to evaluate the loss and any model
     * metrics at the end of each epoch. The model will not be trained on this
     * data. This could be a tuple [xVal, yVal] or a tuple [xVal, yVal,
     * valSampleWeights]. The model will not be trained on this data.
     * `validationData` will override `validationSplit`.
     */
    validationData?: [
    Tensor_2 | Tensor_2[],
    Tensor_2 | Tensor_2[]
    ] | [Tensor_2 | Tensor_2[], Tensor_2 | Tensor_2[], Tensor_2 | Tensor_2[]];
    /**
     * Whether to shuffle the training data before each epoch. Has
     * no effect when `stepsPerEpoch` is not `null`.
     */
    shuffle?: boolean;
    /**
     * Optional object mapping class indices (integers) to
     * a weight (float) to apply to the model's loss for the samples from this
     * class during training. This can be useful to tell the model to "pay more
     * attention" to samples from an under-represented class.
     *
     * If the model has multiple outputs, a class weight can be specified for
     * each of the outputs by setting this field an array of weight object
     * or a object that maps model output names (e.g., `model.outputNames[0]`)
     * to weight objects.
     */
    classWeight?: ClassWeight | ClassWeight[] | ClassWeightMap;
    /**
     * Optional array of the same length as x, containing
     * weights to apply to the model's loss for each sample. In the case of
     * temporal data, you can pass a 2D array with shape (samples,
     * sequenceLength), to apply a different weight to every timestep of every
     * sample. In this case you should make sure to specify
     * sampleWeightMode="temporal" in compile().
     */
    sampleWeight?: Tensor_2;
    /**
     * Epoch at which to start training (useful for resuming a previous training
     * run). When this is used, `epochs` is the index of the "final epoch".
     * The model is not trained for a number of iterations given by `epochs`,
     * but merely until the epoch of index `epochs` is reached.
     */
    initialEpoch?: number;
    /**
     * Total number of steps (batches of samples) before
     * declaring one epoch finished and starting the next epoch. When training
     * with Input Tensors such as TensorFlow data tensors, the default `null` is
     * equal to the number of unique samples in your dataset divided by the
     * batch size, or 1 if that cannot be determined.
     */
    stepsPerEpoch?: number;
    /**
     * Only relevant if `stepsPerEpoch` is specified. Total number of steps
     * (batches of samples) to validate before stopping.
     */
    validationSteps?: number;
    /**
     * Configures the frequency of yielding the main thread to other tasks.
     *
     * In the browser environment, yielding the main thread can improve the
     * responsiveness of the page during training. In the Node.js environment,
     * it can ensure tasks queued in the event loop can be handled in a timely
     * manner.
     *
     * The value can be one of the following:
     *   - `'auto'`: The yielding happens at a certain frame rate (currently set
     *               at 125ms). This is the default.
     *   - `'batch'`: yield every batch.
     *   - `'epoch'`: yield every epoch.
     *   - any `number`: yield every `number` milliseconds.
     *   - `'never'`: never yield. (yielding can still happen through `await
     *      nextFrame()` calls in custom callbacks.)
     */
    yieldEvery?: YieldEveryOptions;
}

/**
 * Interface for configuring model training based on a dataset object.
 */
export declare interface ModelFitDatasetArgs<T> {
    /**
     * (Optional) Total number of steps (batches of samples) before
     * declaring one epoch finished and starting the next epoch. It should
     * typically be equal to the number of samples of your dataset divided by
     * the batch size, so that `fitDataset`() call can utilize the entire dataset.
     * If it is not provided, use `done` return value in `iterator.next()` as
     * signal to finish an epoch.
     */
    batchesPerEpoch?: number;
    /**
     * Integer number of times to iterate over the training dataset.
     */
    epochs: number;
    /**
     * Verbosity level.
     *
     * Expected to be 0, 1, or 2. Default: 1.
     *
     * 0 - No printed message during fit() call.
     * 1 - In Node.js (tfjs-node), prints the progress bar, together with
     *     real-time updates of loss and metric values and training speed.
     *     In the browser: no action. This is the default.
     * 2 - Not implemented yet.
     */
    verbose?: ModelLoggingVerbosity;
    /**
     * List of callbacks to be called during training.
     * Can have one or more of the following callbacks:
     *   - `onTrainBegin(logs)`: called when training starts.
     *   - `onTrainEnd(logs)`: called when training ends.
     *   - `onEpochBegin(epoch, logs)`: called at the start of every epoch.
     *   - `onEpochEnd(epoch, logs)`: called at the end of every epoch.
     *   - `onBatchBegin(batch, logs)`: called at the start of every batch.
     *   - `onBatchEnd(batch, logs)`: called at the end of every batch.
     *   - `onYield(epoch, batch, logs)`: called every `yieldEvery` milliseconds
     *      with the current epoch, batch and logs. The logs are the same
     *      as in `onBatchEnd()`. Note that `onYield` can skip batches or
     *      epochs. See also docs for `yieldEvery` below.
     */
    callbacks?: BaseCallback[] | CustomCallbackArgs | CustomCallbackArgs[];
    /**
     * Data on which to evaluate the loss and any model
     * metrics at the end of each epoch. The model will not be trained on this
     * data. This could be any of the following:
     *
     *   - An array `[xVal, yVal]`, where the two values may be `tf.Tensor`,
     *     an array of Tensors, or a map of string to Tensor.
     *   - Similarly, an array ` [xVal, yVal, valSampleWeights]`
     *     (not implemented yet).
     *   - a `Dataset` object with elements of the form `{xs: xVal, ys: yVal}`,
     *     where `xs` and `ys` are the feature and label tensors, respectively.
     *
     * If `validationData` is an Array of Tensor objects, each `tf.Tensor` will be
     * sliced into batches during validation, using the parameter
     * `validationBatchSize` (which defaults to 32). The entirety of the
     * `tf.Tensor` objects will be used in the validation.
     *
     * If `validationData` is a dataset object, and the `validationBatches`
     * parameter is specified, the validation will use `validationBatches` batches
     * drawn from the dataset object. If `validationBatches` parameter is not
     * specified, the validation will stop when the dataset is exhausted.
     *
     * The model will not be trained on this data.
     */
    validationData?: [
    TensorOrArrayOrMap,
    TensorOrArrayOrMap
    ] | [TensorOrArrayOrMap, TensorOrArrayOrMap, TensorOrArrayOrMap] | Dataset_2<T>;
    /**
     * Optional batch size for validation.
     *
     * Used only if `validationData` is an array of `tf.Tensor` objects, i.e., not
     * a dataset object.
     *
     * If not specified, its value defaults to 32.
     */
    validationBatchSize?: number;
    /**
     * (Optional) Only relevant if `validationData` is specified and is a dataset
     * object.
     *
     * Total number of batches of samples to draw from `validationData` for
     * validation purpose before stopping at the end of every epoch. If not
     * specified, `evaluateDataset` will use `iterator.next().done` as signal to
     * stop validation.
     */
    validationBatches?: number;
    /**
     * Configures the frequency of yielding the main thread to other tasks.
     *
     * In the browser environment, yielding the main thread can improve the
     * responsiveness of the page during training. In the Node.js environment,
     * it can ensure tasks queued in the event loop can be handled in a timely
     * manner.
     *
     * The value can be one of the following:
     *   - `'auto'`: The yielding happens at a certain frame rate (currently set
     *               at 125ms). This is the default.
     *   - `'batch'`: yield every batch.
     *   - `'epoch'`: yield every epoch.
     *   - a `number`: Will yield every `number` milliseconds.
     *   - `'never'`: never yield. (But yielding can still happen through `await
     *      nextFrame()` calls in custom callbacks.)
     */
    yieldEvery?: YieldEveryOptions;
    /**
     * Epoch at which to start training (useful for resuming a previous training
     * run). When this is used, `epochs` is the index of the "final epoch".
     * The model is not trained for a number of iterations given by `epochs`,
     * but merely until the epoch of index `epochs` is reached.
     */
    initialEpoch?: number;
    /**
     * Optional object mapping class indices (integers) to
     * a weight (float) to apply to the model's loss for the samples from this
     * class during training. This can be useful to tell the model to "pay more
     * attention" to samples from an under-represented class.
     *
     * If the model has multiple outputs, a class weight can be specified for
     * each of the outputs by setting this field an array of weight object
     * or a object that maps model output names (e.g., `model.outputNames[0]`)
     * to weight objects.
     */
    classWeight?: ClassWeight | ClassWeight[] | ClassWeightMap;
}

/**
 * Parses a JSON model configuration file and returns a model instance.
 *
 * ```js
 * // This example shows how to serialize a model using `toJSON()` and
 * // deserialize it as another model using `tf.models.modelFromJSON()`.
 * // Note: this example serializes and deserializes only the topology
 * // of the model; the weights of the loaded model will be different
 * // from those of the the original model, due to random weight
 * // initialization.
 * // To load the topology and weights of a model, use `tf.loadLayersModel()`.
 * const model1 = tf.sequential();
 * model1.add(tf.layers.repeatVector({inputShape: [2], n: 4}));
 * // Serialize `model1` as a JSON object.
 * const model1JSON = model1.toJSON(null, false);
 * model1.summary();
 *
 * const model2 = await tf.models.modelFromJSON(model1JSON);
 * model2.summary();
 * ```
 *
 *  @param modelAndWeightsConfig JSON object or string encoding a model and
 *       weights configuration. It can also be only the topology JSON of the
 *       model, in which case the weights will not be loaded.
 *  @param custom_objects Optional dictionary mapping names
 *       (strings) to custom classes or functions to be
 *       considered during deserialization.
 * @returns A TensorFlow.js Layers `tf.LayersModel` instance (uncompiled).
 */
declare function modelFromJSON(modelAndWeightsConfig: ModelAndWeightsConfig | PyJsonDict, customObjects?: serialization_2.ConfigDict): Promise<LayersModel>;

/**
 * The on-disk format of the `model.json` file.
 *
 * TF.js 1.0 always populates the optional fields when writing model.json.
 * Prior versions did not provide those fields.
 */
declare interface ModelJSON {
    /**
     * Model topology.
     *
     * For Keras-style `tf.Model`s, this is a JSON object.
     * For TensorFlow-style models (e.g., `SavedModel`), this is the JSON
     * encoding of the `GraphDef` protocol buffer.
     */
    modelTopology: {};
    /** Model training configuration. */
    trainingConfig?: TrainingConfig;
    /**
     * Weights manifest.
     *
     * The weights manifest consists of an ordered list of weight-manifest
     * groups. Each weight-manifest group consists of a number of weight values
     * stored in a number of paths. See the documentation of
     * `WeightsManifestConfig` for more details.
     */
    weightsManifest: WeightsManifestConfig;
    /**
     * Hard-coded format name for models saved from TensorFlow.js or converted
     * by TensorFlow.js Converter.
     */
    format?: string;
    /**
     * What library is responsible for originally generating this artifact.
     *
     * Used for debugging purposes. E.g., 'TensorFlow.js v1.0.0'.
     */
    generatedBy?: string;
    /**
     * What library or tool is responsible for converting the original model
     * to this format, applicable only if the model is output by a converter.
     *
     * Used for debugging purposes.  E.g., 'TensorFlow.js Converter v1.0.0'.
     *
     * A value of `null` means the model artifacts are generated without any
     * conversion process (e.g., saved directly from a TensorFlow.js
     * `tf.LayersModel` instance.)
     */
    convertedBy?: string | null;
    /**
     * Inputs and outputs signature for saved model.
     */
    signature?: {};
    /**
     * User-defined metadata about the model.
     */
    userDefinedMetadata?: {
        [key: string]: {};
    };
    /**
     * Initializer for the model.
     */
    modelInitializer?: {};
}

/** Verbosity logging level when fitting a model. */
declare enum ModelLoggingVerbosity {
    SILENT = 0,
    VERBOSE = 1
}

declare interface ModelPredictArgs {
    /**
     * Optional. Batch size (Integer). If unspecified, it will default to 32.
     */
    batchSize?: number;
    /**
     * Optional. Verbosity mode. Defaults to false.
     */
    verbose?: boolean;
}

export declare interface ModelPredictConfig {
    /**
     * Optional. Batch size (Integer). If unspecified, it will default to 32.
     */
    batchSize?: number;
    /**
     * Optional. Verbosity mode. Defaults to false.
     */
    verbose?: boolean;
}

declare namespace models {
    export {
        modelFromJSON
    }
}
export { models }

/**
 * An interface for the manager of a model store.
 *
 * A model store is defined as a storage medium on which multiple models can
 * be stored. Each stored model has a unique `path` as its identifier.
 * A `ModelStoreManager` for the store allows actions including
 *
 * - Listing the models stored in the store.
 * - Deleting a model from the store.
 */
declare interface ModelStoreManager {
    /**
     * List all models in the model store.
     *
     * @returns A dictionary mapping paths of existing models to their
     *   model artifacts info. Model artifacts info include type of the model's
     *   topology, byte sizes of the topology, weights, etc.
     */
    listModels(): Promise<{
        [path: string]: ModelArtifactsInfo;
    }>;
    /**
     * Remove a model specified by `path`.
     *
     * @param path
     * @returns ModelArtifactsInfo of the deleted model (if and only if deletion
     *   is successful).
     * @throws Error if deletion fails, e.g., if no model exists at `path`.
     */
    removeModel(path: string): Promise<ModelArtifactsInfo>;
}

/**
 * Interface for model input/output tensor info.
 */
export declare interface ModelTensorInfo {
    name: string;
    shape?: number[];
    dtype: DataType;
    tfDtype?: string;
}

export declare type ModInputs = BinaryInputs;

export declare const moments: typeof moments_;

/**
 * Calculates the mean and variance of `x`. The mean and variance are
 * calculated by aggregating the contents of `x` across `axes`. If `x` is
 * 1-D and `axes = [0]` this is just the mean and variance of a vector.
 *
 * @param x The input tensor.
 * @param axis The dimension(s) along with to compute mean and
 *     variance. By default it reduces all dimensions.
 * @param keepDims If true, the moments have the same dimensionality as the
 *     input.
 * @return An object with two keys: `mean` and `variance`.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
declare function moments_(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): {
    mean: Tensor;
    variance: Tensor;
};

/** @doclink Optimizer */
export declare class MomentumOptimizer extends SGDOptimizer {
    protected learningRate: number;
    private momentum;
    private useNesterov;
    /** @nocollapse */
    static className: string;
    private m;
    private accumulations;
    constructor(learningRate: number, momentum: number, useNesterov?: boolean);
    applyGradients(variableGradients: NamedVariableMap | NamedTensor[]): void;
    dispose(): void;
    /**
     * Sets the momentum of the optimizer.
     *
     * @param momentum
     */
    setMomentum(momentum: number): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type MomentumOptimizerConfig = {
    learning_rate: number;
    momentum: number;
    use_nesterov?: boolean;
};

declare type MomentumSerialization = BaseSerialization<'Momentum', MomentumOptimizerConfig>;

/**
 * Move a model from one URL to another.
 *
 * This function supports:
 *
 * 1. Moving within a storage medium, e.g.,
 *    `tf.io.moveModel('localstorage://model-1', 'localstorage://model-2')`
 * 2. Moving between two storage mediums, e.g.,
 *    `tf.io.moveModel('localstorage://model-1', 'indexeddb://model-1')`
 *
 * ```js
 * // First create and save a model.
 * const model = tf.sequential();
 * model.add(tf.layers.dense(
 *     {units: 1, inputShape: [10], activation: 'sigmoid'}));
 * await model.save('localstorage://demo/management/model1');
 *
 * // Then list existing models.
 * console.log(JSON.stringify(await tf.io.listModels()));
 *
 * // Move the model, from Local Storage to IndexedDB.
 * await tf.io.moveModel(
 *     'localstorage://demo/management/model1',
 *     'indexeddb://demo/management/model1');
 *
 * // List models again.
 * console.log(JSON.stringify(await tf.io.listModels()));
 *
 * // Remove the moved model.
 * await tf.io.removeModel('indexeddb://demo/management/model1');
 * ```
 *
 * @param sourceURL Source URL of moving.
 * @param destURL Destination URL of moving.
 * @returns ModelArtifactsInfo of the copied model (if and only if copying
 *   is successful).
 * @throws Error if moving fails, e.g., if no model exists at `sourceURL`, or
 *   if `oldPath` and `newPath` are identical.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Management',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
declare function moveModel(sourceURL: string, destURL: string): Promise<ModelArtifactsInfo>;

export declare const movingAverage: typeof movingAverage_;

/**
 * Compute the moving average of a variable.
 *
 * Without zeroDebias, the moving average operation is defined by:
 *   `v += delta`
 * where
 *   `delta = (1 - decay) * (x - v)`
 *
 * With zeroDebias (default), the `delta` term is scaled to debias the
 * effect of the (assumed) zero-initialization of `v`.
 *   `delta /= (1 - decay ^ step)`
 *
 * For more details on the zero-debiasing algorithm, see:
 *   https://arxiv.org/abs/1412.6980
 *
 * Note that this function is completely stateless and does not keep track of
 * step count. The step count needs to be maintained by the caller and passed
 * in as `step`.
 *
 * @param v The current moving average value.
 * @param x New input value, must have the same shape and dtype as `v`.
 * @param decay The decay factor. Typical values are 0.95 and 0.99.
 * @param step Step count.
 * @param zeroDebias: Whether zeroDebias is to be performed (default: `true`).
 * @returns The new moving average value.
 *
 * @doc {heading: 'Operations', subheading: 'Moving Average'}
 */
declare function movingAverage_<T extends Tensor>(v: T | TensorLike, x: T | TensorLike, decay: number | Scalar, step?: number | Scalar, zeroDebias?: boolean): T;

declare function MSE(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

declare function mse(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare const mul: typeof mul_;

/**
 * Multiplies two `tf.Tensor`s element-wise, A * B. Supports broadcasting.
 *
 * We also expose `tf.mulStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3, 4]);
 * const b = tf.tensor1d([2, 3, 4, 5]);
 *
 * a.mul(b).print();  // or tf.mul(a, b)
 * ```
 *
 * ```js
 * // Broadcast mul a with b.
 * const a = tf.tensor1d([1, 2, 3, 4]);
 * const b = tf.scalar(5);
 *
 * a.mul(b).print();  // or tf.mul(a, b)
 * ```
 * @param a The first tensor to multiply.
 * @param b The second tensor to multiply. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function mul_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

export declare const Multinomial = "Multinomial";

export declare const multinomial: typeof multinomial_;

/**
 * Creates a `tf.Tensor` with values drawn from a multinomial distribution.
 *
 * ```js
 * const probs = tf.tensor([.75, .25]);
 * tf.multinomial(probs, 3).print();
 * ```
 *
 * @param logits 1D array with unnormalized log-probabilities, or
 *     2D array of shape `[batchSize, numOutcomes]`. See the `normalized`
 *     parameter.
 * @param numSamples Number of samples to draw for each row slice.
 * @param seed The seed number.
 * @param normalized Whether the provided `logits` are normalized true
 *     probabilities (sum to 1). Defaults to false.
 * @return 1D array of shape `[numSamples]`, or 2D array of shape
 *     `[batchSize, numSamples]`, depending on the rank of the input.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
declare function multinomial_(logits: Tensor1D | Tensor2D | TensorLike, numSamples: number, seed?: number, normalized?: boolean): Tensor1D | Tensor2D;

export declare interface MultinomialAttrs {
    numSamples: number;
    seed: number;
    normalized: boolean;
}

export declare type MultinomialInputs = Pick<NamedTensorInfoMap, 'logits'>;

export declare const Multiply = "Multiply";

/**
 * Layer that multiplies (element-wise) an `Array` of inputs.
 *
 * It takes as input an Array of tensors, all of the same
 * shape, and returns a single tensor (also of the same shape).
 * For example:
 *
 * ```js
 * const input1 = tf.input({shape: [2, 2]});
 * const input2 = tf.input({shape: [2, 2]});
 * const input3 = tf.input({shape: [2, 2]});
 * const multiplyLayer = tf.layers.multiply();
 * const product = multiplyLayer.apply([input1, input2, input3]);
 * console.log(product.shape);
 * // You get [null, 2, 2], with the first dimension as the undetermined batch
 * // dimension.
 *
 * @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'}
 */
declare function multiply(args?: LayerArgs): Multiply_2;

declare class Multiply_2 extends Merge {
    /** @nocollapse */
    static className: string;
    constructor(args?: LayerArgs);
    protected mergeFunction(inputs: Tensor_2[]): Tensor_2;
}

declare const multiplyImpl: SimpleBinaryKernelImpl;

export declare type MultiplyInputs = BinaryInputs;

export declare const multiRNNCell: typeof multiRNNCell_;

/**
 * Computes the next states and outputs of a stack of LSTMCells.
 *
 * Each cell output is used as input to the next cell.
 *
 * Returns `[cellState, cellOutput]`.
 *
 * Derived from tf.contrib.rn.MultiRNNCell.
 *
 * @param lstmCells Array of LSTMCell functions.
 * @param data The input to the cell.
 * @param c Array of previous cell states.
 * @param h Array of previous cell outputs.
 *
 * @doc {heading: 'Operations', subheading: 'RNN'}
 */
declare function multiRNNCell_(lstmCells: LSTMCellFunc[], data: Tensor2D | TensorLike, c: Array<Tensor2D | TensorLike>, h: Array<Tensor2D | TensorLike>): [Tensor2D[], Tensor2D[]];

export declare interface NamedAttrMap {
    [name: string]: Attribute;
}

declare type NamedGradientMap = {
    [inputName: string]: () => Tensor;
};

declare interface NamedTensor {
    name: string;
    tensor: Tensor;
}

declare interface NamedTensor_2 {
    name: string;
    tensor: Tensor_2;
}

export declare interface NamedTensorInfoMap {
    [name: string]: TensorInfo | undefined;
}

/** @docalias {[name: string]: Tensor} */
export declare type NamedTensorMap = {
    [name: string]: Tensor;
};

declare type NamedTensorsMap = {
    [key: string]: Tensor_2[];
};

declare type NamedVariableMap = {
    [name: string]: Variable;
};

declare function nearestDivisor(size: number, start: number): number;

declare function nearestLargerEven(val: number): number;

export declare const Neg = "Neg";

export declare const neg: typeof neg_;

/**
 * Computes `-1 * x` element-wise.
 *
 * ```js
 * const x = tf.tensor2d([1, 2, -2, 0], [2, 2]);
 *
 * x.neg().print();  // or tf.neg(x)
 * ```
 *
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function neg_<T extends Tensor>(x: T | TensorLike): T;

declare function negImpl(xVals: TypedArray_2, xShape: number[], xDtype: DataType_2): [
TypedArray_2,
number[]
];

export declare type NegInputs = UnaryInputs;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns a promise that resolve when a requestAnimationFrame has completed.
 *
 * On Node.js this uses setImmediate instead of requestAnimationFrame.
 *
 * This is simply a sugar method so that users can do the following:
 * `await tf.nextFrame();`
 *
 * @doc {heading: 'Performance', subheading: 'Timing'}
 */
export declare function nextFrame(): Promise<void>;

/**
 * A `Node` describes the connectivity between two layers.
 *
 * Each time a layer is connected to some new input,
 * a node is added to `layer.inboundNodes`.
 *
 * Each time the output of a layer is used by another layer,
 * a node is added to `layer.outboundNodes`.
 *
 * `nodeIndices` and `tensorIndices` are basically fine-grained coordinates
 * describing the origin of the `inputTensors`, verifying the following:
 *
 * `inputTensors[i] ==
 * inboundLayers[i].inboundNodes[nodeIndices[i]].outputTensors[
 *   tensorIndices[i]]`
 *
 * A node from layer A to layer B is added to:
 *     A.outboundNodes
 *     B.inboundNodes
 */
declare class Node_2 {
    callArgs?: Kwargs;
    /**
     * The layer that takes `inputTensors` and turns them into `outputTensors`
     * (the node gets created when the `call` method of the layer is called).
     */
    outboundLayer: Layer;
    /**
     * A list of layers, the same length as `inputTensors`, the layers from where
     * `inputTensors` originate.
     */
    inboundLayers: Layer[];
    /**
     * A list of integers, the same length as `inboundLayers`. `nodeIndices[i]` is
     * the origin node of `inputTensors[i]` (necessary since each inbound layer
     * might have several nodes, e.g. if the layer is being shared with a
     * different data stream).
     */
    nodeIndices: number[];
    /**
     * A list of integers, the same length as `inboundLayers`. `tensorIndices[i]`
     * is the index of `inputTensors[i]` within the output of the inbound layer
     * (necessary since each inbound layer might have multiple tensor outputs,
     * with each one being independently manipulable).
     */
    tensorIndices: number[];
    /** List of input tensors. */
    inputTensors: SymbolicTensor[];
    /** List of output tensors. */
    outputTensors: SymbolicTensor[];
    /** List of input masks (a mask can be a tensor, or null). */
    inputMasks: Tensor_2[];
    /** List of output masks (a mask can be a tensor, or null). */
    outputMasks: Tensor_2[];
    /** List of input shape tuples. */
    inputShapes: Shape | Shape[];
    /** List of output shape tuples. */
    outputShapes: Shape | Shape[];
    readonly id: number;
    constructor(args: NodeArgs, callArgs?: Kwargs);
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Constructor arguments for Node.
 */
declare interface NodeArgs {
    /**
     * The layer that takes `inputTensors` and turns them into `outputTensors`.
     * (the node gets created when the `call` method of the layer is called).
     */
    outboundLayer: Layer;
    /**
     * A list of layers, the same length as `inputTensors`, the layers from where
     * `inputTensors` originate.
     */
    inboundLayers: Layer[];
    /**
     * A list of integers, the same length as `inboundLayers`. `nodeIndices[i]` is
     * the origin node of `inputTensors[i]` (necessary since each inbound layer
     * might have several nodes, e.g. if the layer is being shared with a
     * different data stream).
     */
    nodeIndices: number[];
    /**
     * A list of integers, the same length as `inboundLayers`. `tensorIndices[i]`
     * is the index of `inputTensors[i]` within the output of the inbound layer
     * (necessary since each inbound layer might have multiple tensor outputs,
     * with each one being independently manipulable).
     */
    tensorIndices: number[];
    /** List of input tensors. */
    inputTensors: SymbolicTensor[];
    /** List of output tensors. */
    outputTensors: SymbolicTensor[];
    /** List of input masks (a mask can be a tensor, or null). */
    inputMasks: Tensor_2[];
    /** List of output masks (a mask can be a tensor, or null). */
    outputMasks: Tensor_2[];
    /** List of input shape tuples. */
    inputShapes: Shape | Shape[];
    /** List of output shape tuples. */
    outputShapes: Shape | Shape[];
}

declare interface NonMaxSuppressionResult {
    selectedIndices: number[];
    selectedScores?: number[];
    validOutputs?: number;
}

export declare const NonMaxSuppressionV3 = "NonMaxSuppressionV3";

export declare interface NonMaxSuppressionV3Attrs {
    maxOutputSize: number;
    iouThreshold: number;
    scoreThreshold: number;
}

declare function nonMaxSuppressionV3Impl(boxes: TypedArray, scores: TypedArray, maxOutputSize: number, iouThreshold: number, scoreThreshold: number): NonMaxSuppressionResult;

export declare type NonMaxSuppressionV3Inputs = Pick<NamedTensorInfoMap, 'boxes' | 'scores'>;

export declare const NonMaxSuppressionV4 = "NonMaxSuppressionV4";

export declare interface NonMaxSuppressionV4Attrs {
    maxOutputSize: number;
    iouThreshold: number;
    scoreThreshold: number;
    padToMaxOutputSize: boolean;
}

declare function nonMaxSuppressionV4Impl(boxes: TypedArray, scores: TypedArray, maxOutputSize: number, iouThreshold: number, scoreThreshold: number, padToMaxOutputSize: boolean): NonMaxSuppressionResult;

export declare type NonMaxSuppressionV4Inputs = Pick<NamedTensorInfoMap, 'boxes' | 'scores'>;

export declare const NonMaxSuppressionV5 = "NonMaxSuppressionV5";

export declare interface NonMaxSuppressionV5Attrs {
    maxOutputSize: number;
    iouThreshold: number;
    scoreThreshold: number;
    softNmsSigma: number;
}

declare function nonMaxSuppressionV5Impl(boxes: TypedArray, scores: TypedArray, maxOutputSize: number, iouThreshold: number, scoreThreshold: number, softNmsSigma: number): NonMaxSuppressionResult;

export declare type NonMaxSuppressionV5Inputs = Pick<NamedTensorInfoMap, 'boxes' | 'scores'>;

/**
 * Constains the weight to be non-negative.
 *
 * @doc {heading: 'Constraints', namespace: 'constraints'}
 */
declare function nonNeg(): Constraint;

export declare const norm: typeof norm_;

/**
 * Computes the norm of scalar, vectors, and matrices.
 * This function can compute several different vector norms (the 1-norm, the
 * Euclidean or 2-norm, the inf-norm, and in general the p-norm for p > 0)
 * and matrix norms (Frobenius, 1-norm, and inf-norm).
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * x.norm().print();  // or tf.norm(x)
 * ```
 *
 * @param x The input array.
 * @param ord Optional. Order of the norm. Supported norm types are
 * following:
 *
 *  | ord        | norm for matrices         | norm for vectors
 *  |------------|---------------------------|---------------------
 *  |'euclidean' |Frobenius norm             |2-norm
 *  |'fro'       |Frobenius norm	           |
 *  |Infinity    |max(sum(abs(x), axis=1))   |max(abs(x))
 *  |-Infinity   |min(sum(abs(x), axis=1))   |min(abs(x))
 *  |1           |max(sum(abs(x), axis=0))   |sum(abs(x))
 *  |2           |                           |sum(abs(x)^2)^1/2*
 *
 * @param axis Optional. If axis is null (the default), the input is
 * considered a vector and a single vector norm is computed over the entire
 * set of values in the Tensor, i.e. norm(x, ord) is equivalent
 * to norm(x.reshape([-1]), ord). If axis is a integer, the input
 * is considered a batch of vectors, and axis determines the axis in x
 * over which to compute vector norms. If axis is a 2-tuple of integer it is
 * considered a batch of matrices and axis determines the axes in NDArray
 * over which to compute a matrix norm.
 * @param keepDims Optional. If true, the norm have the same dimensionality
 * as the input.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
declare function norm_(x: Tensor | TensorLike, ord?: number | 'euclidean' | 'fro', axis?: number | number[], keepDims?: boolean): Tensor;

export declare const NotEqual = "NotEqual";

export declare const notEqual: typeof notEqual_;

/**
 * Returns the truth value of (a != b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([0, 2, 3]);
 *
 * a.notEqual(b).print();
 * ```
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function notEqual_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const notEqualImpl: SimpleBinaryKernelImpl;

export declare type NotEqualInputs = BinaryInputs;

/**
 * Returns the current high-resolution time in milliseconds relative to an
 * arbitrary time in the past. It works across different platforms (node.js,
 * browsers).
 *
 * ```js
 * console.log(tf.util.now());
 * ```
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function now(): number;

export declare type NumericDataType = 'float32' | 'int32' | 'bool' | 'complex64';

export declare const OneHot = "OneHot";

export declare const oneHot: typeof oneHot_;

/**
 * Creates a one-hot `tf.Tensor`. The locations represented by `indices` take
 * value `onValue` (defaults to 1), while all other locations take value
 * `offValue` (defaults to 0). If `indices` is rank `R`, the output has rank
 * `R+1` with the last axis of size `depth`.
 *
 * ```js
 * tf.oneHot(tf.tensor1d([0, 1], 'int32'), 3).print();
 * ```
 *
 * @param indices `tf.Tensor` of indices with dtype `int32`.
 * @param depth The depth of the one hot dimension.
 * @param onValue A number used to fill in the output when the index matches
 * the location.
 * @param offValue A number used to fill in the output when the index does
 *     not match the location.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function oneHot_(indices: Tensor | TensorLike, depth: number, onValue?: number, offValue?: number): Tensor;

export declare interface OneHotAttrs {
    depth: number;
    onValue: number;
    offValue: number;
}

export declare type OneHotInputs = Pick<NamedTensorInfoMap, 'indices'>;

/**
 * Creates a `tf.Tensor` with all elements set to 1.
 *
 * ```js
 * tf.ones([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param dtype The type of an element in the resulting tensor. Defaults to
 *     'float'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function ones<R extends Rank>(shape: ShapeMap[R], dtype?: DataType): Tensor<R>;

/**
 * Initializer that generates tensors initialized to 1.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function ones_2(): Initializer;

export declare const OnesLike = "OnesLike";

export declare const onesLike: typeof onesLike_;

/**
 * Creates a `tf.Tensor` with all elements set to 1 with the same shape as the
 * given tensor.
 *
 * ```js
 * const x = tf.tensor([1, 2]);
 * tf.onesLike(x).print();
 * ```
 * @param x A tensor.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function onesLike_<T extends Tensor>(x: T | TensorLike): T;

export declare type OnesLikeInputs = UnaryInputs;

/**
 * Callback for the progress of a long-running action such as an HTTP
 * request for a large binary object.
 *
 * `fraction` should be a number in the [0, 1] interval, indicating how
 * much of the action has completed.
 */
declare type OnProgressCallback = (fraction: number) => void;

/**
 * Used for wrapping functions that perform math operations on
 * Tensors. The function will be wrapped in a named scope that cleans all
 * memory usage after the function is done.
 */
export declare function op<T extends Function>(f: {
    [name: string]: T;
}): T;

export declare const OP_SCOPE_SUFFIX = "__op";

export declare interface OpExecutor {
    (node: GraphNode): Tensor_2 | Tensor_2[] | Promise<Tensor_2 | Tensor_2[]>;
}

/** @doc {heading: 'Training', subheading: 'Classes', namespace: 'train'} */
export declare abstract class Optimizer extends Serializable {
    protected iterations_: number;
    /**
     * Executes `f()` and minimizes the scalar output of `f()` by computing
     * gradients of y with respect to the list of trainable variables provided by
     * `varList`. If no list is provided, it defaults to all trainable variables.
     *
     * @param f The function to execute and whose output to minimize.
     * @param returnCost Whether to return the scalar cost value produced by
     * executing `f()`.
     * @param varList An optional list of variables to update. If specified, only
     * the trainable variables in varList will be updated by minimize. Defaults to
     * all trainable variables.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers'}
     */
    minimize(f: () => Scalar, returnCost?: boolean, varList?: Variable[]): Scalar | null;
    /**
     * The number of iterations that this optimizer instance has been invoked for.
     */
    get iterations(): number;
    protected incrementIterations(): void;
    /**
     * Executes f() and computes the gradient of the scalar output of f() with
     * respect to the list of trainable variables provided by `varList`. If no
     * list is provided, it defaults to all trainable variables.
     *
     * @param f The function to execute and whose output to use for computing
     * gradients with respect to variables.
     * @param varList An optional list of variables to compute gradients with
     * respect to. If specified, only the trainable variables in varList will have
     * gradients computed with respect to. Defaults to all trainable variables.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers'}
     */
    computeGradients(f: () => Scalar, varList?: Variable[]): {
        value: Scalar;
        grads: NamedTensorMap;
    };
    /**
     * Updates variables by using the computed gradients.
     *
     * @param variableGradients A mapping of variable name to its gradient value.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers'}
     */
    abstract applyGradients(variableGradients: NamedTensorMap | NamedTensor[]): void;
    /**
     * Dispose the variables (if any) owned by this optimizer instance.
     */
    dispose(): void;
    saveIterations(): Promise<NamedTensor>;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    /**
     * Extract the first element of the weight values and set it
     * as the iterations counter variable of this instance of optimizer.
     *
     * @param weightValues
     * @returns Weight values with the first element consumed and excluded.
     */
    protected extractIterations(weightValues: NamedTensor[]): Promise<NamedTensor[]>;
}

export declare class OptimizerConstructors {
    /**
     * Constructs a `tf.SGDOptimizer` that uses stochastic gradient descent.
     *
     * ```js
     * // Fit a quadratic function by learning the coefficients a, b, c.
     * const xs = tf.tensor1d([0, 1, 2, 3]);
     * const ys = tf.tensor1d([1.1, 5.9, 16.8, 33.9]);
     *
     * const a = tf.scalar(Math.random()).variable();
     * const b = tf.scalar(Math.random()).variable();
     * const c = tf.scalar(Math.random()).variable();
     *
     * // y = a * x^2 + b * x + c.
     * const f = x => a.mul(x.square()).add(b.mul(x)).add(c);
     * const loss = (pred, label) => pred.sub(label).square().mean();
     *
     * const learningRate = 0.01;
     * const optimizer = tf.train.sgd(learningRate);
     *
     * // Train the model.
     * for (let i = 0; i < 10; i++) {
     *   optimizer.minimize(() => loss(f(xs), ys));
     * }
     *
     * // Make predictions.
     * console.log(
     *     `a: ${a.dataSync()}, b: ${b.dataSync()}, c: ${c.dataSync()}`);
     * const preds = f(xs).dataSync();
     * preds.forEach((pred, i) => {
     *   console.log(`x: ${i}, pred: ${pred}`);
     * });
     * ```
     *
     * @param learningRate The learning rate to use for the SGD algorithm.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static sgd(learningRate: number): SGDOptimizer;
    /**
     * Constructs a `tf.MomentumOptimizer` that uses momentum gradient
     * descent.
     *
     * See
     * [http://proceedings.mlr.press/v28/sutskever13.pdf](
     * http://proceedings.mlr.press/v28/sutskever13.pdf)
     *
     * @param learningRate The learning rate to use for the Momentum gradient
     * descent algorithm.
     * @param momentum The momentum to use for the momentum gradient descent
     * algorithm.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static momentum(learningRate: number, momentum: number, useNesterov?: boolean): MomentumOptimizer;
    /**
     * Constructs a `tf.RMSPropOptimizer` that uses RMSProp gradient
     * descent. This implementation uses plain momentum and is not centered
     * version of RMSProp.
     *
     * See
     * [http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf](
     * http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf)
     *
     * @param learningRate The learning rate to use for the RMSProp gradient
     * descent algorithm.
     * @param decay The discounting factor for the history/coming gradient.
     * @param momentum The momentum to use for the RMSProp gradient descent
     * algorithm.
     * @param epsilon Small value to avoid zero denominator.
     * @param centered If true, gradients are normalized by the estimated
     * variance of the gradient.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static rmsprop(learningRate: number, decay?: number, momentum?: number, epsilon?: number, centered?: boolean): RMSPropOptimizer;
    /**
     * Constructs a `tf.AdamOptimizer` that uses the Adam algorithm.
     * See [https://arxiv.org/abs/1412.6980](https://arxiv.org/abs/1412.6980)
     *
     * @param learningRate The learning rate to use for the Adam gradient
     * descent algorithm.
     * @param beta1 The exponential decay rate for the 1st moment estimates.
     * @param beta2 The exponential decay rate for the 2nd moment estimates.
     * @param epsilon A small constant for numerical stability.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adam(learningRate?: number, beta1?: number, beta2?: number, epsilon?: number): AdamOptimizer;
    /**
     * Constructs a `tf.AdadeltaOptimizer` that uses the Adadelta algorithm.
     * See [https://arxiv.org/abs/1212.5701](https://arxiv.org/abs/1212.5701)
     *
     * @param learningRate The learning rate to use for the Adadelta gradient
     * descent algorithm.
     * @param rho The learning rate decay over each update.
     * @param epsilon A constant epsilon used to better condition the grad
     * update.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adadelta(learningRate?: number, rho?: number, epsilon?: number): AdadeltaOptimizer;
    /**
     * Constructs a `tf.AdamaxOptimizer` that uses the Adamax algorithm.
     * See [https://arxiv.org/abs/1412.6980](https://arxiv.org/abs/1412.6980)
     *
     * @param learningRate The learning rate to use for the Adamax gradient
     * descent algorithm.
     * @param beta1 The exponential decay rate for the 1st moment estimates.
     * @param beta2 The exponential decay rate for the 2nd moment estimates.
     * @param epsilon A small constant for numerical stability.
     * @param decay The learning rate decay over each update.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adamax(learningRate?: number, beta1?: number, beta2?: number, epsilon?: number, decay?: number): AdamaxOptimizer;
    /**
     * Constructs a `tf.AdagradOptimizer` that uses the Adagrad algorithm.
     * See
     * [http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf](
     * http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf)
     * or
     * [http://ruder.io/optimizing-gradient-descent/index.html#adagrad](
     * http://ruder.io/optimizing-gradient-descent/index.html#adagrad)
     *
     * @param learningRate The learning rate to use for the Adagrad gradient
     * descent algorithm.
     * @param initialAccumulatorValue Starting value for the accumulators, must be
     * positive.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adagrad(learningRate: number, initialAccumulatorValue?: number): AdagradOptimizer;
}

declare type OptimizerSerialization = AdadeltaSerialization | AdagradSerialization | AdamSerialization | AdamaxSerialization | MomentumSerialization | RMSPropSerialization | SGDSerialization;

/**
 * Initializer that generates a random orthogonal matrix.
 *
 * Reference:
 * [Saxe et al., http://arxiv.org/abs/1312.6120](http://arxiv.org/abs/1312.6120)
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function orthogonal(args: OrthogonalArgs): Initializer;

declare interface OrthogonalArgs extends SeedOnlyInitializerArgs {
    /**
     * Multiplicative factor to apply to the orthogonal matrix. Defaults to 1.
     */
    gain?: number;
}

export declare const outerProduct: typeof outerProduct_;

/**
 * Computes the outer product of two vectors, `v1` and `v2`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([3, 4, 5]);
 *
 * tf.outerProduct(a, b).print();
 * ```
 * @param v1 The first vector in the outer product operation.
 * @param v2 The second vector in the outer product operation.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
declare function outerProduct_(v1: Tensor1D | TensorLike, v2: Tensor1D | TensorLike): Tensor2D;

export declare const Pack = "Pack";

export declare interface PackAttrs {
    axis: number;
}

declare enum PackingScheme {
    /**
     * All values in a single texel are densely packed without any constraints.
     *
     * This is how the shader encodes a tensor with shape = [2, 3, 4]
     * (indices are [batch, row, col]).
     *
     * 000|001   010|011   020|021
     * -------   -------   -------
     * 002|003   012|013   022|023
     *
     * 100|101   110|111   120|121
     * -------   -------   -------
     * 102|103   112|113   122|123
     *
     */
    DENSE = 0,
    /**
     * Single texels contain only values from the same batch, and from adjacent
     * rows and columns.
     *
     * This is how the shader encodes a tensor with shape = [2, 3, 5]
     * (indices are [batch, row, col]).
     *
     * 000|001   002|003   004|xxx   020|021   022|023   024|xxx
     * -------   -------   -------   -------   -------   -------
     * 010|011   012|013   014|xxx   xxx|xxx   xxx|xxx   xxx|xxx
     *
     * 100|101   102|103   104|xxx   120|121   122|123   124|xxx
     * -------   -------   -------   -------   -------   -------
     * 110|111   112|113   114|xxx   xxx|xxx   xxx|xxx   xxx|xxx
     *
     */
    SHARED_BATCH = 1
}

export declare type PackInputs = TensorInfo[];

export declare const pad: typeof pad_;

export declare const pad1d: typeof pad1d_;

/**
 * Pads a `tf.Tensor1D` with a given value and paddings. See `pad` for details.
 */
declare function pad1d_(x: Tensor1D | TensorLike, paddings: [number, number], constantValue?: number): Tensor1D;

export declare const pad2d: typeof pad2d_;

/**
 * Pads a `tf.Tensor2D` with a given value and paddings. See `pad` for details.
 */
declare function pad2d_(x: Tensor2D | TensorLike, paddings: [[number, number], [number, number]], constantValue?: number): Tensor2D;

export declare const pad3d: typeof pad3d_;

/**
 * Pads a `tf.Tensor3D` with a given value and paddings. See `pad` for details.
 */
declare function pad3d_(x: Tensor3D | TensorLike, paddings: [[number, number], [number, number], [number, number]], constantValue?: number): Tensor3D;

export declare const pad4d: typeof pad4d_;

/**
 * Pads a `tf.Tensor4D` with a given value and paddings. See `pad` for details.
 */
declare function pad4d_(x: Tensor4D | TensorLike, paddings: [
[
number,
number
],
[number, number],
[number, number],
[number, number]
], constantValue?: number): Tensor4D;

/**
 * Pads a `tf.Tensor` with a given value and paddings.
 *
 * This operation implements `CONSTANT` mode. For `REFLECT` and `SYMMETRIC`,
 * refer to `tf.mirrorPad`
 *
 * Also available are stricter rank-specific methods with the same signature
 * as this method that assert that `paddings` is of given length.
 *   - `tf.pad1d`
 *   - `tf.pad2d`
 *   - `tf.pad3d`
 *   - `tf.pad4d`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * x.pad([[1, 2]]).print();
 * ```
 * @param x The tensor to pad.
 * @param paddings An array of length `R` (the rank of the tensor), where
 * each element is a length-2 tuple of ints `[padBefore, padAfter]`,
 * specifying how much to pad along each dimension of the tensor.
 * @param constantValue The pad value to use. Defaults to 0.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function pad_<T extends Tensor>(x: T | TensorLike, paddings: Array<[number, number]>, constantValue?: number): T;

/** @docinline */
declare type PaddingMode = 'valid' | 'same' | 'causal';

declare type PadInfo = {
    top: number;
    left: number;
    right: number;
    bottom: number;
    type: PadType;
};

declare type PadInfo3D = {
    top: number;
    left: number;
    right: number;
    bottom: number;
    front: number;
    back: number;
    type: PadType;
};

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare type PadType = 'SAME' | 'VALID' | 'NUMBER' | 'EXPLICIT';

export declare const PadV2 = "PadV2";

export declare interface PadV2Attrs {
    paddings: Array<[number, number]>;
    constantValue: number;
}

export declare type PadV2Inputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare const PARALLELIZE_THRESHOLD = 30;

declare type Params = {
    [key: string]: number | string | boolean | number[] | string[] | boolean[];
};

declare function parseAxisParam(axis: number | number[], shape: number[]): number[];

declare function parseSliceParams(x: TensorInfo, begin: number | number[], size?: number | number[]): number[][];

declare class Permute extends Layer {
    /** @nocollapse */
    static className: string;
    readonly dims: number[];
    private readonly dimsIncludingBatch;
    constructor(args: PermuteLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Permutes the dimensions of the input according to a given pattern.
 *
 * Useful for, e.g., connecting RNNs and convnets together.
 *
 * Example:
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.permute({
 *   dims: [2, 1],
 *   inputShape: [10, 64]
 * }));
 * console.log(model.outputShape);
 * // Now model's output shape is [null, 64, 10], where null is the
 * // unpermuted sample (batch) dimension.
 * ```
 *
 * Input shape:
 *   Arbitrary. Use the configuration field `inputShape` when using this
 *   layer as the first layer in a model.
 *
 * Output shape:
 *   Same rank as the input shape, but with the dimensions re-ordered (i.e.,
 *   permuted) according to the `dims` configuration of this layer.
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function permute(args: PermuteLayerArgs): Permute;

declare interface PermuteLayerArgs extends LayerArgs {
    /**
     * Array of integers. Permutation pattern. Does not include the
     * sample (batch) dimension. Index starts at 1.
     * For instance, `[2, 1]` permutes the first and second dimensions
     * of the input.
     */
    dims: number[];
}

/** Type for representing image data in Uint8Array type. */
export declare interface PixelData {
    width: number;
    height: number;
    data: Uint8Array;
}

/**
 * At any given time a single platform is active and represents and
 * implementation of this interface. In practice, a platform is an environment
 * where TensorFlow.js can be executed, e.g. the browser or Node.js.
 */
export declare interface Platform {
    /**
     * Makes an HTTP request.
     * @param path The URL path to make a request to
     * @param init The request init. See init here:
     *     https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
     */
    fetch(path: string, requestInits?: RequestInit, options?: RequestDetails): Promise<Response>;
    /**
     * Returns the current high-resolution time in milliseconds relative to an
     * arbitrary time in the past. It works across different platforms (node.js,
     * browsers).
     */
    now(): number;
    /**
     * Encode the provided string into an array of bytes using the provided
     * encoding.
     */
    encode(text: string, encoding: string): Uint8Array;
    /** Decode the provided bytes into a string using the provided encoding. */
    decode(bytes: Uint8Array, encoding: string): string;
}

export declare const Pool = "Pool";

export declare const pool: typeof pool_;

/**
 * Performs an N-D pooling operation
 *
 * @param input The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param windowShape The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param poolingType The type of pooling, either 'max' or 'avg'.
 * @param pad The type of padding algorithm:
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_guides/python/nn#Convolution](
 *         https://www.tensorflow.org/api_guides/python/nn#Convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in dilated pooling. Defaults to `[1, 1]`. If `dilationRate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function pool_<T extends Tensor3D | Tensor4D>(input: T | TensorLike, windowShape: [number, number] | number, poolingType: 'avg' | 'max', pad: 'valid' | 'same' | number | conv_util.ExplicitPadding, dilations?: [number, number] | number, strides?: [number, number] | number): T;

/**
 * Abstract class for different pooling 1D layers.
 */
declare abstract class Pooling1D extends Layer {
    protected readonly poolSize: [number];
    protected readonly strides: [number];
    protected readonly padding: PaddingMode;
    /**
     *
     * @param args Parameters for the Pooling layer.
     *
     * config.poolSize defaults to 2.
     */
    constructor(args: Pooling1DLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    protected abstract poolingFunction(inputs: Tensor_2, poolSize: [number, number], strides: [number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

declare interface Pooling1DLayerArgs extends LayerArgs {
    /**
     * Size of the window to pool over, should be an integer.
     */
    poolSize?: number | [number];
    /**
     * Period at which to sample the pooled values.
     *
     * If `null`, defaults to `poolSize`.
     */
    strides?: number | [number];
    /** How to fill in data that's not an integer multiple of poolSize. */
    padding?: PaddingMode;
}

/**
 * Abstract class for different pooling 2D layers.
 */
declare abstract class Pooling2D extends Layer {
    protected readonly poolSize: [number, number];
    protected readonly strides: [number, number];
    protected readonly padding: PaddingMode;
    protected readonly dataFormat: DataFormat;
    constructor(args: Pooling2DLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    protected abstract poolingFunction(inputs: Tensor_2, poolSize: [number, number], strides: [number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

declare interface Pooling2DLayerArgs extends LayerArgs {
    /**
     * Factors by which to downscale in each dimension [vertical, horizontal].
     * Expects an integer or an array of 2 integers.
     *
     * For example, `[2, 2]` will halve the input in both spatial dimension.
     * If only one integer is specified, the same window length
     * will be used for both dimensions.
     */
    poolSize?: number | [number, number];
    /**
     * The size of the stride in each dimension of the pooling window. Expects
     * an integer or an array of 2 integers. Integer, tuple of 2 integers, or
     * None.
     *
     * If `null`, defaults to `poolSize`.
     */
    strides?: number | [number, number];
    /** The padding type to use for the pooling layer. */
    padding?: PaddingMode;
    /** The data format to use for the pooling layer. */
    dataFormat?: DataFormat;
}

/**
 * Abstract class for different pooling 3D layers.
 */
declare abstract class Pooling3D extends Layer {
    protected readonly poolSize: [number, number, number];
    protected readonly strides: [number, number, number];
    protected readonly padding: PaddingMode;
    protected readonly dataFormat: DataFormat;
    constructor(args: Pooling3DLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    protected abstract poolingFunction(inputs: Tensor_2, poolSize: [number, number, number], strides: [number, number, number], padding: PaddingMode, dataFormat: DataFormat): Tensor_2;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

declare interface Pooling3DLayerArgs extends LayerArgs {
    /**
     * Factors by which to downscale in each dimension [depth, height, width].
     * Expects an integer or an array of 3 integers.
     *
     * For example, `[2, 2, 2]` will halve the input in three dimensions.
     * If only one integer is specified, the same window length
     * will be used for all dimensions.
     */
    poolSize?: number | [number, number, number];
    /**
     * The size of the stride in each dimension of the pooling window. Expects
     * an integer or an array of 3 integers. Integer, tuple of 3 integers, or
     * None.
     *
     * If `null`, defaults to `poolSize`.
     */
    strides?: number | [number, number, number];
    /** The padding type to use for the pooling layer. */
    padding?: PaddingMode;
    /** The data format to use for the pooling layer. */
    dataFormat?: DataFormat;
}

export declare type PoolInputs = Pick<NamedTensorInfoMap, 'input'>;

export declare const Pow = "Pow";

export declare const pow: typeof pow_;

/**
 * Computes the power of one `tf.Tensor` to another. Supports broadcasting.
 *
 * Given a `tf.Tensor` x and a `tf.Tensor` y, this operation computes x^y for
 * corresponding elements in x and y. The result's dtype will be the upcasted
 * type of the `base` and `exp` dtypes.
 *
 * ```js
 * const a = tf.tensor([[2, 3], [4, 5]])
 * const b = tf.tensor([[1, 2], [3, 0]]).toInt();
 *
 * a.pow(b).print();  // or tf.pow(a, b)
 * ```
 *
 * ```js
 * const a = tf.tensor([[1, 2], [3, 4]])
 * const b = tf.tensor(2).toInt();
 *
 * a.pow(b).print();  // or tf.pow(a, b)
 * ```
 * We also expose `powStrict` which has the same signature as this op and
 * asserts that `base` and `exp` are the same shape (does not broadcast).
 *
 * @param base The base `tf.Tensor` to pow element-wise.
 * @param exp The exponent `tf.Tensor` to pow element-wise.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function pow_<T extends Tensor>(base: Tensor | TensorLike, exp: Tensor | TensorLike): T;

export declare type PowInputs = BinaryInputs;

/**
 * Computes the precision of the predictions with respect to the labels.
 *
 * Example:
 * ```js
 * const x = tf.tensor2d(
 *    [
 *      [0, 0, 0, 1],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1],
 *      [1, 0, 0, 0],
 *      [0, 0, 1, 0]
 *    ]
 * );
 *
 * const y = tf.tensor2d(
 *    [
 *      [0, 0, 1, 0],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1],
 *      [0, 1, 0, 0],
 *      [0, 1, 0, 0]
 *    ]
 * );
 *
 * const precision = tf.metrics.precision(x, y);
 * precision.print();
 * ```
 *
 * @param yTrue The ground truth values. Expected to be contain only 0-1 values.
 * @param yPred The predicted values. Expected to be contain only 0-1 values.
 * @return Precision Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function precision(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

declare class PReLU extends Layer {
    /** @nocollapse */
    static className: string;
    private readonly alphaInitializer;
    private readonly alphaRegularizer;
    private readonly alphaConstraint;
    private readonly sharedAxes;
    private alpha;
    readonly DEFAULT_ALPHA_INITIALIZER: InitializerIdentifier;
    constructor(args?: PReLULayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

export declare const Prelu = "Prelu";

export declare const prelu: typeof prelu_;

/**
 * Computes leaky rectified linear element-wise with parametric alphas.
 *
 * `x < 0 ? alpha * x : f(x) = x`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 * const alpha = tf.scalar(0.1);
 *
 * x.prelu(alpha).print();  // or tf.prelu(x, alpha)
 * ```
 * @param x The input tensor.
 * @param alpha Scaling factor for negative values.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function prelu_<T extends Tensor>(x: T | TensorLike, alpha: T | TensorLike): T;

/**
 * Parameterized version of a leaky rectified linear unit.
 *
 * It follows
 * `f(x) = alpha * x for x < 0.`
 * `f(x) = x for x >= 0.`
 * wherein `alpha` is a trainable weight.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers'
 * }
 */
declare function prelu_2(args?: PReLULayerArgs): PReLU;

export declare type PreluInputs = Pick<NamedTensorInfoMap, 'x' | 'alpha'>;

declare interface PReLULayerArgs extends LayerArgs {
    /**
     * Initializer for the learnable alpha.
     */
    alphaInitializer?: Initializer | InitializerIdentifier;
    /**
     * Regularizer for the learnable alpha.
     */
    alphaRegularizer?: Regularizer;
    /**
     * Constraint for the learnable alpha.
     */
    alphaConstraint?: Constraint;
    /**
     * The axes along which to share learnable parameters for the activation
     * function. For example, if the incoming feature maps are from a 2D
     * convolution with output shape `[numExamples, height, width, channels]`,
     * and you wish to share parameters across space (height and width) so that
     * each filter channels has only one set of parameters, set
     * `shared_axes: [1, 2]`.
     */
    sharedAxes?: number | number[];
}

/**
 * Validate gather nd inputs.
 *
 * @param tensor The tensor contains the source values.
 * @param indices The tensor contains the indices to slice the source.
 *
 * @returns [resultShape, numUpdates, sliceSize, strides]
 */
declare function prepareAndValidate(tensor: TensorInfo, indices: TensorInfo): [
number[],
number,
number,
number[]
];

/**
 * Prepare the split size array. When the input is a number, the axis is evenly
 * divided among the split size. When the input contains the negative value, the
 * rest of the axis is allocated toward that.
 */
declare function prepareSplitSize(x: Tensor | TensorInfo, numOrSizeSplits: number[] | number, axis?: number): number[];

/**
 * Prints information about the `tf.Tensor` including its data.
 *
 * ```js
 * const verbose = true;
 * tf.tensor2d([1, 2, 3, 4], [2, 2]).print(verbose);
 * ```
 * @param x The tensor to be printed.
 * @param verbose Whether to print verbose information about the ` Tensor`,
 * including dtype and size.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function print_2<T extends Tensor>(x: T, verbose?: boolean): void;
export { print_2 as print }

export declare const Prod = "Prod";

export declare const prod: typeof prod_;

/**
 * Computes the product of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and a
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.prod().print();  // or tf.prod(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.prod(axis).print();  // or tf.prod(x, axis)
 * ```
 *
 * @param x The input tensor to compute the product over. If the dtype is `bool`
 *   it will be converted to `int32` and the output dtype will be `int32`.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function prod_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

export declare interface ProdAttrs {
    axis: number | number[];
    keepDims: boolean;
}

declare function prodImpl(xShape: number[], xDtype: DataType_2, xVals: TypedArray_2, reductionAxes: number[]): {
    outVals: TypedArray_2;
    outShape: number[];
    outDtype: DataType_2;
};

export declare type ProdInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Executes the provided function `f()` and returns a promise that resolves
 * with information about the function's memory use:
 * - `newBytes`: the number of new bytes allocated
 * - `newTensors`: the number of new tensors created
 * - `peakBytes`: the peak number of bytes allocated
 * - `kernels`: an array of objects for each kernel involved that reports
 * their input and output shapes, number of bytes used, and number of new
 * tensors created.
 * - `kernelNames`: an array of unique strings with just the names of the
 * kernels in the `kernels` array.
 *
 * ```js
 * const profile = await tf.profile(() => {
 *   const x = tf.tensor1d([1, 2, 3]);
 *   let x2 = x.square();
 *   x2.dispose();
 *   x2 = x.square();
 *   x2.dispose();
 *   return x;
 * });
 *
 * console.log(`newBytes: ${profile.newBytes}`);
 * console.log(`newTensors: ${profile.newTensors}`);
 * console.log(`byte usage over all kernels: ${profile.kernels.map(k =>
 * k.totalBytesSnapshot)}`);
 * ```
 *
 *
 * @doc {heading: 'Performance', subheading: 'Profile'}
 */
export declare function profile(f: () => (TensorContainer | Promise<TensorContainer>)): Promise<ProfileInfo>;

declare type ProfileInfo = {
    newBytes: number;
    newTensors: number;
    peakBytes: number;
    kernels: KernelInfo[];
    result: TensorContainer;
    kernelNames: string[];
};

/**
 * A key-value dict like @see PyJsonDict, but with restricted keys.
 *
 * This makes it possible to create subtypes that have only the specified
 * fields, while requiring that the values are JSON-compatible.
 *
 * That is in contrast to extending `PyJsonDict`, or using an intersection type
 * `Foo & PyJsonDict`.  In both of those cases, the fields of Foo are actually
 * allowed to be of types that are incompatible with `PyJsonValue`.  Worse, the
 * index signature of `PyJsonValue` means that *any* key is accepted: eg.
 * `const foo: Foo = ...; foo.bogus = 12; const x = foo.bogus` works for both
 * reading and assignment, even if `bogus` is not a field of the type `Foo`,
 * because the index signature inherited from `PyJsonDict` accepts all strings.
 *
 * Here, we *both* restrict the keys to known values, *and* guarantee that the
 * values associated with those keys are compatible with `PyJsonValue`.
 *
 * This guarantee is easiest to apply via an additional incantation:
 *
 * ```
 * export interface Foo extends PyJson<keyof Foo> {
 *   a: SomeType;
 *   b: SomeOtherType;
 * }
 * ```
 *
 * Now instances of `Foo` have *only* the fields `a` and `b`, and furthermore,
 * if either the type `SomeType` or `SomeOtherType` is incompatible with
 * `PyJsonValue`, the compiler produces a typing error.
 */
declare type PyJson<Keys extends string> = {
    [x in Keys]?: PyJsonValue;
};

/**
 * An array of values within the JSON-serialized form of a serializable object.
 *
 * The keys of any nested dicts should be in snake_case (i.e., using Python
 * naming conventions) for compatibility with Python Keras.
 *
 * @see PyJsonDict
 */
declare interface PyJsonArray extends Array<PyJsonValue> {
}

/**
 * A key-value dict within the JSON-serialized form of a serializable object.
 *
 * Serialization/deserialization uses stringified-JSON as the storage
 * representation. Typically this should be used for materialized JSON
 * stored on disk or sent/received over the wire.
 *
 * The keys of this dict and of any nested dicts should be in snake_case (i.e.,
 * using Python naming conventions) for compatibility with Python Keras.
 *
 * Internally this is normally converted to a ConfigDict that has CamelCase keys
 * (using TypeScript naming conventions) and support for Enums.
 */
declare interface PyJsonDict {
    [key: string]: PyJsonValue;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/**
 * A value within the JSON-serialized form of a serializable object.
 *
 * The keys of any nested dicts should be in snake_case (i.e., using Python
 * naming conventions) for compatibility with Python Keras.
 *
 * @see PyJsonDict
 */
declare type PyJsonValue = boolean | number | string | null | PyJsonArray | PyJsonDict;

export declare const rand: typeof rand_;

/**
 * Creates a `tf.Tensor` with values sampled from a random number generator
 * function defined by the user.
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param randFunction A random number generator function which is called
 * for each element in the output tensor.
 * @param dtype The data type of the output tensor. Defaults to 'float32'.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
declare function rand_<R extends Rank>(shape: ShapeMap[R], randFunction: () => number, dtype?: DataType): Tensor<R>;

export declare const randomGamma: typeof randomGamma_;

/**
 * Creates a `tf.Tensor` with values sampled from a gamma distribution.
 *
 * ```js
 * tf.randomGamma([2, 2], 1).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param alpha The shape parameter of the gamma distribution.
 * @param beta The inverse scale parameter of the gamma distribution. Defaults
 *     to 1.
 * @param dtype The data type of the output. Defaults to float32.
 * @param seed The seed for the random number generator.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
declare function randomGamma_<R extends Rank>(shape: ShapeMap[R], alpha: number, beta?: number, dtype?: 'float32' | 'int32', seed?: number): Tensor<R>;

export declare const randomNormal: typeof randomNormal_;

/**
 * Creates a `tf.Tensor` with values sampled from a normal distribution.
 *
 * ```js
 * tf.randomNormal([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param mean The mean of the normal distribution.
 * @param stdDev The standard deviation of the normal distribution.
 * @param dtype The data type of the output.
 * @param seed The seed for the random number generator.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
declare function randomNormal_<R extends Rank>(shape: ShapeMap[R], mean?: number, stdDev?: number, dtype?: 'float32' | 'int32', seed?: number): Tensor<R>;

/**
 * Initializer that generates random values initialized to a normal
 * distribution.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function randomNormal_2(args: RandomNormalArgs): Initializer;

declare interface RandomNormalArgs {
    /** Mean of the random values to generate. */
    mean?: number;
    /** Standard deviation of the random values to generate. */
    stddev?: number;
    /** Used to seed the random generator. */
    seed?: number;
}

export declare const randomUniform: typeof randomUniform_;

/**
 * Creates a `tf.Tensor` with values sampled from a uniform distribution.
 *
 * The generated values follow a uniform distribution in the range [minval,
 * maxval). The lower bound minval is included in the range, while the upper
 * bound maxval is excluded.
 *
 * ```js
 * tf.randomUniform([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param minval The lower bound on the range of random values to generate.
 *   Defaults to 0.
 * @param maxval The upper bound on the range of random values to generate.
 *   Defaults to 1.
 * @param dtype The data type of the output tensor. Defaults to 'float32'.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
declare function randomUniform_<R extends Rank>(shape: ShapeMap[R], minval?: number, maxval?: number, dtype?: DataType, seed?: number | string): Tensor<R>;

/**
 * Initializer that generates random values initialized to a uniform
 * distribution.
 *
 * Values will be distributed uniformly between the configured minval and
 * maxval.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function randomUniform_2(args: RandomUniformArgs): Initializer;

declare interface RandomUniformArgs {
    /** Lower bound of the range of random values to generate. */
    minval?: number;
    /** Upper bound of the range of random values to generate. */
    maxval?: number;
    /** Used to seed the random generator. */
    seed?: number;
}

/**
 * Returns a sample from a uniform [a, b) distribution.
 *
 * @param a The minimum support (inclusive).
 * @param b The maximum support (exclusive).
 * @return A pseudorandom number on the half-open interval [a,b).
 */
declare function randUniform(a: number, b: number): number;

/**
 * Creates a new `tf.Tensor1D` filled with the numbers in the range provided.
 *
 * The tensor is a is half-open interval meaning it includes start, but
 * excludes stop. Decrementing ranges and negative step values are also
 * supported.sv
 *
 *
 * ```js
 * tf.range(0, 9, 2).print();
 * ```
 *
 * @param start An integer start value
 * @param stop An integer stop value
 * @param step An integer increment (will default to 1 or -1)
 * @param dtype The data type of the output tensor. Defaults to 'float32'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function range(start: number, stop: number, step?: number, dtype?: 'float32' | 'int32'): Tensor1D;

declare const Range_2 = "Range";
export { Range_2 as Range }

export declare interface RangeAttrs {
    start: number;
    stop: number;
    step: number;
    dtype: 'float32' | 'int32';
}

declare function rangeImpl(start: number, stop: number, step: number, dtype: 'float32' | 'int32'): DataTypeMap_2['float32' | 'int32'];

export declare enum Rank {
    R0 = "R0",
    R1 = "R1",
    R2 = "R2",
    R3 = "R3",
    R4 = "R4",
    R5 = "R5",
    R6 = "R6"
}

/**
 * Returns a promise that resolves when the currently selected backend (or the
 * highest priority one) has initialized. Await this promise when you are using
 * a backend that has async initialization.
 *
 * @doc {heading: 'Backends'}
 */
export declare function ready(): Promise<void>;

export declare const Real = "Real";

export declare const real: typeof real_;

/**
 * Returns the real part of a complex (or real) tensor.
 *
 * Given a tensor input, this operation returns a tensor of type float that is
 * the real part of each element in input considered as a complex number.
 *
 * If the input is real, it simply makes a clone.
 *
 * ```js
 * const x = tf.complex([-2.25, 3.25], [4.75, 5.75]);
 * tf.real(x).print();
 * ```
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function real_<T extends Tensor>(input: T | TensorLike): T;

export declare const RealDiv = "RealDiv";

export declare type RealDivInputs = BinaryInputs;

export declare type RealInputs = Pick<NamedTensorInfoMap, 'input'>;

/**
 * Computes the recall of the predictions with respect to the labels.
 *
 * Example:
 * ```js
 * const x = tf.tensor2d(
 *    [
 *      [0, 0, 0, 1],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1],
 *      [1, 0, 0, 0],
 *      [0, 0, 1, 0]
 *    ]
 * );
 *
 * const y = tf.tensor2d(
 *    [
 *      [0, 0, 1, 0],
 *      [0, 1, 0, 0],
 *      [0, 0, 0, 1],
 *      [0, 1, 0, 0],
 *      [0, 1, 0, 0]
 *    ]
 * );
 *
 * const recall = tf.metrics.recall(x, y);
 * recall.print();
 * ```
 *
 * @param yTrue The ground truth values. Expected to be contain only 0-1 values.
 * @param yPred The predicted values. Expected to be contain only 0-1 values.
 * @return Recall Tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function recall(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare const Reciprocal = "Reciprocal";

export declare const reciprocal: typeof reciprocal_;

/**
 * Computes reciprocal of x element-wise: `1 / x`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, 2]);
 *
 * x.reciprocal().print();  // or tf.reciprocal(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function reciprocal_<T extends Tensor>(x: T | TensorLike): T;

export declare type ReciprocalInputs = UnaryInputs;

export declare interface RecursiveArray<T extends any> {
    [index: number]: T | RecursiveArray<T>;
}

declare interface ReduceInfo {
    windowSize: number;
    batchSize: number;
    inSize: number;
    outSize: number;
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
export declare enum Reduction {
    NONE = 0,
    MEAN = 1,
    SUM = 2,
    SUM_BY_NONZERO_WEIGHTS = 3
}

/**
 * Registers a global backend. The registration should happen when importing
 * a module file (e.g. when importing `backend_webgl.ts`), and is used for
 * modular builds (e.g. custom tfjs bundle with only webgl support).
 *
 * @param factory The backend factory function. When called, it should
 * return a backend instance, or a promise of an instance.
 * @param priority The priority of the backend (higher = more important).
 *     In case multiple backends are registered, the priority is used to find
 *     the best backend. Defaults to 1.
 * @return False if there is already a registered backend under this name, true
 *     if not.
 *
 * @doc {heading: 'Backends'}
 */
export declare function registerBackend(name: string, factory: () => KernelBackend | Promise<KernelBackend>, priority?: number): boolean;

export declare function registerCallbackConstructor(verbosityLevel: number, callbackConstructor: BaseCallbackConstructor): void;

/**
 * Register a class with the serialization map of TensorFlow.js.
 *
 * This is often used for registering custom Layers, so they can be
 * serialized and deserialized.
 *
 * Example:
 *
 * ```js
 * class MyCustomLayer extends tf.layers.Layer {
 *   static className = 'MyCustomLayer';
 *
 *   constructor(config) {
 *     super(config);
 *   }
 * }
 * tf.serialization.registerClass(MyCustomLayer);
 * ```
 *
 * @param cls The class to be registered. It must have a public static member
 *   called `className` defined and the value must be a non-empty string.
 *
 * @doc {heading: 'Models', subheading: 'Serialization', ignoreCI: true}
 */
declare function registerClass<T extends Serializable>(cls: SerializableConstructor<T>): void;

/**
 * Registers a gradient function for a given kernel in the global registry,
 * to be used during the back-propagation of that kernel.
 *
 * @param config An object with the following properties:
 * - `kernelName` The name of the kernel that the gradient function is for.
 * - `gradFunc` The function to run during back-propagation.
 */
export declare function registerGradient(config: GradConfig): void;

/**
 * Registers the function (forward pass) for the kernel in a global registry.
 *
 * @param config A config object with the following properties:
 * - `kernelName` The official name of the kernel.
 * - `backendName` The official name of the backend.
 * - `kernelFunc` The function to run during the forward pass of the kernel.
 * - `setupFunc` Optional. Gets called once, after the backend initializes.
 * - `disposeFunc` Optional. Gets called once, right before the backend is
 * disposed.
 */
export declare function registerKernel(config: KernelConfig): void;

declare const registerLoadRouter: (loudRouter: IORouter) => void;

/**
 * Register an Op for graph model executor. This allow you to register
 * TensorFlow custom op or override existing op.
 *
 * Here is an example of registering a new MatMul Op.
 * ```js
 * const customMatmul = (node) =>
 *    tf.matMul(
 *        node.inputs[0], node.inputs[1],
 *        node.attrs['transpose_a'], node.attrs['transpose_b']);
 *
 * tf.registerOp('MatMul', customMatmul);
 * ```
 * The inputs and attrs of the node object is based on the TensorFlow op
 * registry.
 *
 * @param name The Tensorflow Op name.
 * @param opFunc An op function which is called with the current graph node
 * during execution and needs to return a tensor or a list of tensors. The node
 * has the following attributes:
 *    - attr: A map from attribute name to its value
 *    - inputs: A list of input tensors
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */
export declare function registerOp(name: string, opFunc: OpExecutor): void;

declare const registerSaveRouter: (loudRouter: IORouter) => void;

/**
 * Regularizer base class.
 */
declare abstract class Regularizer extends serialization_2.Serializable {
    abstract apply(x: Tensor_2): Scalar_2;
}

/**
 * Type for a regularizer function.
 */
declare type RegularizerFn = () => Scalar_2;

/** @docinline */
declare type RegularizerIdentifier = 'l1l2' | string;

declare namespace regularizers {
    export {
        l1l2,
        l1,
        l2
    }
}
export { regularizers }

declare class ReLU extends Layer {
    /** @nocollapse */
    static className: string;
    maxValue: number;
    constructor(args?: ReLULayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

export declare const Relu = "Relu";

/**
 * Rectified Linear Unit activation function.
 *
 * Input shape:
 *   Arbitrary. Use the config field `inputShape` (Array of integers, does
 *   not include the sample axis) when using this layer as the first layer
 *   in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers'
 * }
 */
declare function reLU(args?: ReLULayerArgs): ReLU;

export declare const relu: typeof relu_;

export declare const Relu6 = "Relu6";

export declare const relu6: typeof relu6_;

/**
 * Computes rectified linear 6 element-wise: `min(max(x, 0), 6)`.
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 8]);
 *
 * x.relu6().print();  // or tf.relu6(x)
 * ```
 * @param x The input tensor. If the dtype is `bool`, the output dtype will be
 *     `int32'.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function relu6_<T extends Tensor>(x: T | TensorLike): T;

export declare type Relu6Inputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Computes rectified linear element-wise: `max(x, 0)`.
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.relu().print();  // or tf.relu(x)
 * ```
 * @param x The input tensor. If the dtype is `bool`, the output dtype will be
 *     `int32'.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function relu_<T extends Tensor>(x: T | TensorLike): T;

export declare type ReluInputs = Pick<NamedTensorInfoMap, 'x'>;

declare interface ReLULayerArgs extends LayerArgs {
    /**
     * Float, the maximum output value.
     */
    maxValue?: number;
}

/**
 * Removes a backend and the registered factory.
 *
 * @doc {heading: 'Backends'}
 */
export declare function removeBackend(name: string): void;

/**
 * Remove a model specified by URL from a reigstered storage medium.
 *
 * ```js
 * // First create and save a model.
 * const model = tf.sequential();
 * model.add(tf.layers.dense(
 *     {units: 1, inputShape: [10], activation: 'sigmoid'}));
 * await model.save('localstorage://demo/management/model1');
 *
 * // Then list existing models.
 * console.log(JSON.stringify(await tf.io.listModels()));
 *
 * // Delete the model.
 * await tf.io.removeModel('localstorage://demo/management/model1');
 *
 * // List models again.
 * console.log(JSON.stringify(await tf.io.listModels()));
 * ```
 *
 * @param url A URL to a stored model, with a scheme prefix, e.g.,
 *   'localstorage://my-model-1', 'indexeddb://my/model/2'.
 * @returns ModelArtifactsInfo of the deleted model (if and only if deletion
 *   is successful).
 * @throws Error if deletion fails, e.g., if no model exists at `path`.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Management',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
declare function removeModel(url: string): Promise<ModelArtifactsInfo>;

declare function repeatedTry(checkFn: () => boolean, delayFn?: (counter: number) => number, maxCounter?: number): Promise<void>;

declare class RepeatVector extends Layer {
    /** @nocollapse */
    static className: string;
    readonly n: number;
    constructor(args: RepeatVectorLayerArgs);
    computeOutputShape(inputShape: Shape): Shape;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Repeats the input n times in a new dimension.
 *
 * ```js
 *  const model = tf.sequential();
 *  model.add(tf.layers.repeatVector({n: 4, inputShape: [2]}));
 *  const x = tf.tensor2d([[10, 20]]);
 *  // Use the model to do inference on a data point the model hasn't see
 *  model.predict(x).print();
 *  // output shape is now [batch, 2, 4]
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function repeatVector(args: RepeatVectorLayerArgs): RepeatVector;

declare interface RepeatVectorLayerArgs extends LayerArgs {
    /**
     * The integer number of times to repeat the input.
     */
    n: number;
}

/**
 * Additional options for Platform.fetch
 */
declare interface RequestDetails {
    /**
     * Is this request for a binary file (as opposed to a json file)
     */
    isBinary?: boolean;
}

declare function resetMaxTexturesInShader(): void;

declare function resetMaxTextureSize(): void;

export declare const Reshape = "Reshape";

export declare const reshape: typeof reshape_;

/**
 * Reshapes a `tf.Tensor` to a given shape.
 *
 * Given an input tensor, returns a new tensor with the same values as the
 * input tensor with shape `shape`.
 *
 * If one component of shape is the special value -1, the size of that
 * dimension is computed so that the total size remains constant. In
 * particular, a shape of [-1] flattens into 1-D. At most one component of
 * shape can be -1.
 *
 * If shape is 1-D or higher, then the operation returns a tensor with shape
 * shape filled with the values of tensor. In this case, the number of
 * elements implied by shape must be the same as the number of elements in
 * tensor.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * x.reshape([2, 2]).print();
 * ```
 *
 * @param x The input tensor to be reshaped.
 * @param shape An array of integers defining the output tensor shape.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function reshape_<R extends Rank>(x: Tensor | TensorLike, shape: ShapeMap[R]): Tensor<R>;

declare class Reshape_2 extends Layer {
    /** @nocollapse */
    static className: string;
    private targetShape;
    constructor(args: ReshapeLayerArgs);
    private isUnknown;
    /**
     * Finds and replaces a missing dimension in output shape.
     *
     * This is a near direct port of the internal Numpy function
     * `_fix_unknown_dimension` in `numpy/core/src/multiarray/shape.c`.
     *
     * @param inputShape: Original shape of array begin reshape.
     * @param outputShape: Target shape of the array, with at most a single
     * `null` or negative number, which indicates an underdetermined dimension
     * that should be derived from `inputShape` and the known dimensions of
     *   `outputShape`.
     * @returns: The output shape with `null` replaced with its computed value.
     * @throws: ValueError: If `inputShape` and `outputShape` do not match.
     */
    private fixUnknownDimension;
    computeOutputShape(inputShape: Shape): Shape;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Reshapes an input to a certain shape.
 *
 * ```js
 * const input = tf.input({shape: [4, 3]});
 * const reshapeLayer = tf.layers.reshape({targetShape: [2, 6]});
 * // Inspect the inferred output shape of the Reshape layer, which
 * // equals `[null, 2, 6]`. (The 1st dimension is the undermined batch size.)
 * console.log(JSON.stringify(reshapeLayer.apply(input).shape));
 * ```
 *
 * Input shape:
 *   Arbitrary, although all dimensions in the input shape must be fixed.
 *   Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 *
 * Output shape:
 *   [batchSize, targetShape[0], targetShape[1], ...,
 *    targetShape[targetShape.length - 1]].
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function reshape_2(args: ReshapeLayerArgs): Reshape_2;

export declare interface ReshapeAttrs {
    shape: number[];
}

export declare type ReshapeInputs = Pick<NamedTensorInfoMap, 'x'>;

declare interface ReshapeLayerArgs extends LayerArgs {
    /** The target shape. Does not include the batch axis. */
    targetShape: Shape;
}

export declare const ResizeBilinear = "ResizeBilinear";

export declare interface ResizeBilinearAttrs {
    alignCorners: boolean;
    halfPixelCenters: boolean;
    size: [number, number];
}

export declare const ResizeBilinearGrad = "ResizeBilinearGrad";

export declare type ResizeBilinearGradAttrs = ResizeBilinearAttrs;

export declare type ResizeBilinearGradInputs = Pick<NamedTensorInfoMap, 'images' | 'dy'>;

export declare type ResizeBilinearInputs = Pick<NamedTensorInfoMap, 'images'>;

export declare const ResizeNearestNeighbor = "ResizeNearestNeighbor";

export declare interface ResizeNearestNeighborAttrs {
    alignCorners: boolean;
    halfPixelCenters: boolean;
    size: [number, number];
}

export declare const ResizeNearestNeighborGrad = "ResizeNearestNeighborGrad";

export declare type ResizeNearestNeighborGradAttrs = ResizeNearestNeighborAttrs;

export declare type ResizeNearestNeighborGradInputs = Pick<NamedTensorInfoMap, 'images' | 'dy'>;

export declare type ResizeNearestNeighborInputs = Pick<NamedTensorInfoMap, 'images'>;

export declare const Reverse = "Reverse";

export declare const reverse: typeof reverse_;

export declare const reverse1d: typeof reverse1d_;

/**
 * Reverses a `tf.Tensor1D`.
 *
 * @param x The input tensor.
 */
declare function reverse1d_(x: Tensor1D | TensorLike): Tensor1D;

export declare const reverse2d: typeof reverse2d_;

/**
 * Reverses a `tf.Tensor2D` along a specified axis.
 *
 * @param x The input tensor.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 */
declare function reverse2d_(x: Tensor2D | TensorLike, axis?: number | number[]): Tensor2D;

export declare const reverse3d: typeof reverse3d_;

/**
 * Reverses a `tf.Tensor3D` along a specified axis.
 *
 * @param x The input tensor.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 */
declare function reverse3d_(x: Tensor3D | TensorLike, axis?: number | number[]): Tensor3D;

export declare const reverse4d: typeof reverse4d_;

/**
 * Reverses a `tf.Tensor4D` along a specified axis.
 *
 * @param x The input tensor.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 */
declare function reverse4d_(x: Tensor4D | TensorLike, axis?: number | number[]): Tensor4D;

/**
 * Reverses a `tf.Tensor` along a specified axis.
 *
 * Also available are stricter rank-specific methods that assert that `x` is
 * of the given rank:
 *   - `tf.reverse1d`
 *   - `tf.reverse2d`
 *   - `tf.reverse3d`
 *   - `tf.reverse4d`
 *
 * Except `tf.reverse1d` (which does not have axis param), all methods have
 * same signature as this method.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * x.reverse().print();
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.reverse(axis).print();
 * ```
 * @param x The input tensor to be reversed.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function reverse_<T extends Tensor>(x: T | TensorLike, axis?: number | number[]): T;

export declare interface ReverseAttrs {
    dims: number | number[];
}

export declare type ReverseInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const rfft: typeof rfft_;

/**
 * Real value input fast Fourier transform.
 *
 * Computes the 1-dimensional discrete Fourier transform over the
 * inner-most dimension of the real input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 *
 * real.rfft().print();
 * ```
 * @param input The real value input to compute an rfft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
declare function rfft_(input: Tensor, fftLength?: number): Tensor;

declare function rightPad(a: string, size: number): string;

/** @doclink Optimizer */
export declare class RMSPropOptimizer extends Optimizer {
    protected learningRate: number;
    protected decay: number;
    protected momentum: number;
    protected epsilon: number;
    /** @nocollapse */
    static className: string;
    private centered;
    private accumulatedMeanSquares;
    private accumulatedMoments;
    private accumulatedMeanGrads;
    constructor(learningRate: number, decay?: number, momentum?: number, epsilon?: number, centered?: boolean);
    applyGradients(variableGradients: NamedTensorMap | NamedTensor[]): void;
    dispose(): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type RMSPropOptimizerConfig = {
    learning_rate: number;
    decay?: number;
    momentum?: number;
    epsilon?: number;
    centered?: boolean;
};

declare type RMSPropSerialization = BaseSerialization<'RMSProp', RMSPropOptimizerConfig>;

export declare class RNN extends Layer {
    /** @nocollapse */
    static className: string;
    readonly cell: RNNCell;
    readonly returnSequences: boolean;
    readonly returnState: boolean;
    readonly goBackwards: boolean;
    readonly unroll: boolean;
    stateSpec: InputSpec[];
    protected states_: Tensor_2[];
    protected keptStates: Tensor_2[][];
    private numConstants;
    constructor(args: RNNLayerArgs);
    getStates(): Tensor_2[];
    setStates(states: Tensor_2[]): void;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    computeMask(inputs: Tensor_2 | Tensor_2[], mask?: Tensor_2 | Tensor_2[]): Tensor_2 | Tensor_2[];
    /**
     * Get the current state tensors of the RNN.
     *
     * If the state hasn't been set, return an array of `null`s of the correct
     * length.
     */
    get states(): Tensor_2[];
    set states(s: Tensor_2[]);
    build(inputShape: Shape | Shape[]): void;
    /**
     * Reset the state tensors of the RNN.
     *
     * If the `states` argument is `undefined` or `null`, will set the
     * state tensor(s) of the RNN to all-zero tensors of the appropriate
     * shape(s).
     *
     * If `states` is provided, will set the state tensors of the RNN to its
     * value.
     *
     * @param states Optional externally-provided initial states.
     * @param training Whether this call is done during training. For stateful
     *   RNNs, this affects whether the old states are kept or discarded. In
     *   particular, if `training` is `true`, the old states will be kept so
     *   that subsequent backpropgataion through time (BPTT) may work properly.
     *   Else, the old states will be discarded.
     */
    resetStates(states?: Tensor_2 | Tensor_2[], training?: boolean): void;
    apply(inputs: Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[], kwargs?: Kwargs): Tensor_2 | Tensor_2[] | SymbolicTensor | SymbolicTensor[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getInitialState(inputs: Tensor_2): Tensor_2[];
    get trainableWeights(): LayerVariable[];
    get nonTrainableWeights(): LayerVariable[];
    setFastWeightInitDuringBuild(value: boolean): void;
    getConfig(): serialization_2.ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict, customObjects?: serialization_2.ConfigDict): T;
}

/**
 * Base class for recurrent layers.
 *
 * Input shape:
 *   3D tensor with shape `[batchSize, timeSteps, inputDim]`.
 *
 * Output shape:
 *   - if `returnState`, an Array of tensors (i.e., `tf.Tensor`s). The first
 *     tensor is the output. The remaining tensors are the states at the
 *     last time step, each with shape `[batchSize, units]`.
 *   - if `returnSequences`, the output will have shape
 *     `[batchSize, timeSteps, units]`.
 *   - else, the output will have shape `[batchSize, units]`.
 *
 * Masking:
 *   This layer supports masking for input data with a variable number
 *   of timesteps. To introduce masks to your data,
 *   use an embedding layer with the `mask_zero` parameter
 *   set to `True`.
 *
 * Notes on using statefulness in RNNs:
 *   You can set RNN layers to be 'stateful', which means that the states
 *   computed for the samples in one batch will be reused as initial states
 *   for the samples in the next batch. This assumes a one-to-one mapping
 *   between samples in different successive batches.
 *
 *   To enable statefulness:
 *     - specify `stateful: true` in the layer constructor.
 *     - specify a fixed batch size for your model, by passing
 *       if sequential model:
 *         `batchInputShape=[...]` to the first layer in your model.
 *       else for functional model with 1 or more Input layers:
 *         `batchShape=[...]` to all the first layers in your model.
 *       This is the expected shape of your inputs *including the batch size*.
 *       It should be a tuple of integers, e.g. `(32, 10, 100)`.
 *     - specify `shuffle=False` when calling fit().
 *
 *   To reset the states of your model, call `.resetStates()` on either
 *   a specific layer, or on your entire model.
 *
 * Note on specifying the initial state of RNNs
 *   You can specify the initial state of RNN layers symbolically by
 *   calling them with the option `initialState`. The value of
 *   `initialState` should be a tensor or list of tensors representing
 *   the initial state of the RNN layer.
 *
 *   You can specify the initial state of RNN layers numerically by
 *   calling `resetStates` with the keyword argument `states`. The value of
 *   `states` should be a numpy array or list of numpy arrays representing
 *   the initial state of the RNN layer.
 *
 * Note on passing external constants to RNNs
 *   You can pass "external" constants to the cell using the `constants`
 *   keyword argument of `RNN.call` method. This requires that the `cell.call`
 *   method accepts the same keyword argument `constants`. Such constants
 *   can be used to conditon the cell transformation on additional static inputs
 *   (not changing over time), a.k.a an attention mechanism.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function rnn(args: RNNLayerArgs): RNN;

/**
 * An RNNCell layer.
 *
 * @doc {heading: 'Layers', subheading: 'Classes'}
 */
declare abstract class RNNCell extends Layer {
    /**
     * Size(s) of the states.
     * For RNN cells with only a single state, this is a single integer.
     */
    abstract stateSize: number | number[];
    dropoutMask: Tensor_2 | Tensor_2[];
    recurrentDropoutMask: Tensor_2 | Tensor_2[];
}

/**
 * RNNLayerConfig is identical to BaseRNNLayerConfig, except it makes the
 * `cell` property required. This interface is to be used with constructors
 * of concrete RNN layer subtypes.
 */
export declare interface RNNLayerArgs extends BaseRNNLayerArgs {
    cell: RNNCell | RNNCell[];
}

export declare const RotateWithOffset = "RotateWithOffset";

export declare interface RotateWithOffsetAttrs {
    radians: number;
    fillValue: number | [number, number, number];
    center: number | [number, number];
}

export declare type RotateWithOffsetInputs = Pick<NamedTensorInfoMap, 'image'>;

export declare const Round = "Round";

export declare const round: typeof round_;

/**
 * Computes round of input `tf.Tensor` element-wise: `round(x)`.
 * It implements banker's rounding.
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3]);
 *
 * x.round().print();  // or tf.round(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function round_<T extends Tensor>(x: T | TensorLike): T;

export declare type RoundInputs = UnaryInputs;

export declare const Rsqrt = "Rsqrt";

export declare const rsqrt: typeof rsqrt_;

/**
 * Computes reciprocal of square root of the input `tf.Tensor` element-wise:
 * `y = 1 / sqrt(x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 4, -1]);
 *
 * x.rsqrt().print();  // or tf.rsqrt(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function rsqrt_<T extends Tensor>(x: T | TensorLike): T;

declare const rsqrtImpl: SimpleUnaryImpl;

export declare type RsqrtInputs = UnaryInputs;

/** @docinline */
declare type SampleWeightMode = 'temporal';

/**
 * Options for saving a model.
 * @innamespace io
 */
declare interface SaveConfig {
    /**
     * Whether to save only the trainable weights of the model, ignoring the
     * non-trainable ones.
     */
    trainableOnly?: boolean;
    /**
     * Whether the optimizer will be saved (if exists).
     *
     * Default: `false`.
     */
    includeOptimizer?: boolean;
}

/**
 * @deprecated Deprecated interface for SavedModel/GraphModel signature
 *     input/output Tensor info. User ModelTensorInfo instead.
 */
export declare interface SavedModelTensorInfo {
    dtype: string;
    shape: number[];
    name: string;
}

/**
 * Type definition for handlers of saving operations.
 */
declare type SaveHandler = (modelArtifact: ModelArtifacts) => Promise<SaveResult>;

/**
 * Result of a saving operation.
 */
declare interface SaveResult {
    /**
     * Information about the model artifacts saved.
     */
    modelArtifactsInfo: ModelArtifactsInfo;
    /**
     * HTTP responses from the server that handled the model-saving request (if
     * any). This is applicable only to server-based saving routes.
     */
    responses?: Response[];
    /**
     * Error messages and related data (if any).
     */
    errors?: Array<{} | string>;
}

/** @doclink Tensor */
export declare type Scalar = Tensor<Rank.R0>;

/**
 * Creates rank-0 `tf.Tensor` (scalar) with the provided value and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.scalar` as it makes the code more readable.
 *
 * ```js
 * tf.scalar(3.14).print();
 * ```
 *
 * @param value The value of the scalar.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function scalar(value: number | boolean | string | Uint8Array, dtype?: DataType): Scalar;

export declare type ScalarLike = number | boolean | string | Uint8Array;

declare namespace scatter_util {
    export {
        validateUpdateShape,
        validateInput,
        calculateShapes,
        ScatterShapeInfo
    }
}
export { scatter_util }

export declare const ScatterNd = "ScatterNd";

export declare const scatterND: typeof scatterND_;

/**
 * Creates a new tensor by applying sparse updates to individual
 * values or slices within a zero tensor of the given shape tensor according to
 * indices. This operator is the inverse of the `tf.gatherND` operator which
 * extracts values or slices from a given tensor.
 *
 * ```js
 * const indices = tf.tensor2d([4, 3, 1, 7], [4, 1], 'int32');
 * const updates = tf.tensor1d([9, 10, 11, 12]);
 * const shape = [8];
 * tf.scatterND(indices, updates, shape).print() //[0, 11, 0, 10, 9, 0, 0, 12]
 * ```
 *
 * @param indices The tensor contains the indices into the output tensor.
 * @param updates The tensor contains the value for the indices.
 * @param shape: The shape of the output tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
declare function scatterND_<R extends Rank>(indices: Tensor | TensorLike, updates: Tensor | TensorLike, shape: ShapeMap[R]): Tensor<R>;

export declare interface ScatterNdAttrs {
    shape: number[];
}

export declare type ScatterNdInputs = Pick<NamedTensorInfoMap, 'indices' | 'updates'>;

declare interface ScatterShapeInfo {
    sliceRank: number;
    numUpdates: number;
    sliceSize: number;
    strides: number[];
    outputSize: number;
}

/** @docalias Function */
declare type ScopeFn<T extends TensorContainer> = () => T;

declare interface ScopeState {
    track: Tensor[];
    name: string;
    id: number;
}

declare interface SeedOnlyInitializerArgs {
    /** Random number generator seed. */
    seed?: number;
}

declare namespace segment_util {
    export {
        segOpComputeOptimalWindowSize,
        computeOutShape_2 as computeOutShape,
        collectGatherOpShapeInfo,
        SegOpInfo,
        GatherOpShapeInfo
    }
}

declare function segOpComputeOptimalWindowSize(inSize: number, numSegments: number): number;

declare interface SegOpInfo {
    windowSize: number;
    batchSize: number;
    inSize: number;
    numSegments: number;
}

export declare const Select = "Select";

export declare type SelectInputs = Pick<NamedTensorInfoMap, 'condition' | 't' | 'e'>;

export declare const Selu = "Selu";

export declare const selu: typeof selu_;

/**
 * Computes scaled exponential linear element-wise.
 *
 * `x < 0 ? scale * alpha * (exp(x) - 1) : x`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.selu().print();  // or tf.selu(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function selu_<T extends Tensor>(x: T | TensorLike): T;

declare const SELU_SCALE = 1.0507009873554805;

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare const SELU_SCALEALPHA = 1.7580993408473768;

export declare type SeluInputs = Pick<NamedTensorInfoMap, 'x'>;

declare class SeparableConv extends Conv {
    /** @nocollapse */
    static className: string;
    readonly depthMultiplier: number;
    protected readonly depthwiseInitializer?: Initializer;
    protected readonly depthwiseRegularizer?: Regularizer;
    protected readonly depthwiseConstraint?: Constraint;
    protected readonly pointwiseInitializer?: Initializer;
    protected readonly pointwiseRegularizer?: Regularizer;
    protected readonly pointwiseConstraint?: Constraint;
    readonly DEFAULT_DEPTHWISE_INITIALIZER: InitializerIdentifier;
    readonly DEFAULT_POINTWISE_INITIALIZER: InitializerIdentifier;
    protected depthwiseKernel: LayerVariable;
    protected pointwiseKernel: LayerVariable;
    constructor(rank: number, config?: SeparableConvLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

declare class SeparableConv2D extends SeparableConv {
    /** @nocollapse */
    static className: string;
    constructor(args?: SeparableConvLayerArgs);
}

export declare const separableConv2d: typeof separableConv2d_;

/**
 * 2-D convolution with separable filters.
 *
 * Performs a depthwise convolution that acts separately on channels followed
 * by a pointwise convolution that mixes channels. Note that this is
 * separability between dimensions [1, 2] and 3, not spatial separability
 * between dimensions 1 and 2.
 *
 * See
 * [https://www.tensorflow.org/api_docs/python/tf/nn/separable_conv2d](
 *     https://www.tensorflow.org/api_docs/python/tf/nn/separable_conv2d)
 * for more details.
 *
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param depthwiseFilter The depthwise filter tensor, rank 4, of shape
 *     `[filterHeight, filterWidth, inChannels, channelMultiplier]`. This is
 *     the filter used in the first step.
 * @param pointwiseFilter The pointwise filter tensor, rank 4, of shape
 *     `[1, 1, inChannels * channelMultiplier, outChannels]`. This is
 *     the filter used in the second step.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`. If strides is a single number, then `strideHeight ==
 * strideWidth`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `rate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
declare function separableConv2d_<T extends Tensor3D | Tensor4D>(x: T | TensorLike, depthwiseFilter: Tensor4D | TensorLike, pointwiseFilter: Tensor4D | TensorLike, strides: [number, number] | number, pad: 'valid' | 'same', dilation?: [number, number] | number, dataFormat?: 'NHWC' | 'NCHW'): T;

/**
 * Depthwise separable 2D convolution.
 *
 * Separable convolution consists of first performing
 * a depthwise spatial convolution
 * (which acts on each input channel separately)
 * followed by a pointwise convolution which mixes together the resulting
 * output channels. The `depthMultiplier` argument controls how many
 * output channels are generated per input channel in the depthwise step.
 *
 * Intuitively, separable convolutions can be understood as
 * a way to factorize a convolution kernel into two smaller kernels,
 * or as an extreme version of an Inception block.
 *
 * Input shape:
 *   4D tensor with shape:
 *     `[batch, channels, rows, cols]` if data_format='channelsFirst'
 *   or 4D tensor with shape:
 *     `[batch, rows, cols, channels]` if data_format='channelsLast'.
 *
 * Output shape:
 *   4D tensor with shape:
 *     `[batch, filters, newRows, newCols]` if data_format='channelsFirst'
 *   or 4D tensor with shape:
 *     `[batch, newRows, newCols, filters]` if data_format='channelsLast'.
 *     `rows` and `cols` values might have changed due to padding.
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function separableConv2d_2(args: SeparableConvLayerArgs): SeparableConv2D;

declare interface SeparableConvLayerArgs extends ConvLayerArgs {
    /**
     * The number of depthwise convolution output channels for each input
     * channel.
     * The total number of depthwise convolution output channels will be equal
     * to `filtersIn * depthMultiplier`. Default: 1.
     */
    depthMultiplier?: number;
    /**
     * Initializer for the depthwise kernel matrix.
     */
    depthwiseInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the pointwise kernel matrix.
     */
    pointwiseInitializer?: InitializerIdentifier | Initializer;
    /**
     * Regularizer function applied to the depthwise kernel matrix.
     */
    depthwiseRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the pointwise kernel matrix.
     */
    pointwiseRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Constraint function applied to the depthwise kernel matrix.
     */
    depthwiseConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint function applied to the pointwise kernel matrix.
     */
    pointwiseConstraint?: ConstraintIdentifier | Constraint;
}

/**
 * A model with a stack of layers, feeding linearly from one to the next.
 *
 * `tf.sequential` is a factory function that creates an instance of
 * `tf.Sequential`.
 *
 * ```js
 *  // Define a model for linear regression.
 *  const model = tf.sequential();
 *  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
 *
 *  // Prepare the model for training: Specify the loss and the optimizer.
 *  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
 *
 *  // Generate some synthetic data for training.
 *  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
 *  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
 *
 *  // Train the model using the data then do inference on a data point the
 *  // model hasn't seen:
 *  await model.fit(xs, ys);
 *  model.predict(tf.tensor2d([5], [1, 1])).print();
 * ```
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */
export declare class Sequential extends LayersModel {
    /** @nocollapse */
    static className: string;
    private model;
    constructor(args?: SequentialArgs);
    private checkShape;
    /**
     * Adds a layer instance on top of the layer stack.
     *
     * ```js
     *  const model = tf.sequential();
     *  model.add(tf.layers.dense({units: 8, inputShape: [1]}));
     *  model.add(tf.layers.dense({units: 4, activation: 'relu6'}));
     *  model.add(tf.layers.dense({units: 1, activation: 'relu6'}));
     *  // Note that the untrained model is random at this point.
     *  model.predict(tf.randomNormal([10, 1])).print();
     * ```
     * @param layer Layer instance.
     *
     * @exception ValueError In case the `layer` argument does not know its
     * input shape.
     * @exception ValueError In case the `layer` argument has multiple output
     *   tensors, or is already connected somewhere else (forbidden in
     *   `Sequential` models).
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    add(layer: Layer): void;
    /**
     * Removes the last layer in the model.
     *
     * @exception TypeError if there are no layers in the model.
     */
    pop(): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    build(inputShape?: Shape | Shape[]): void;
    countParams(): number;
    /**
     * Print a text summary of the Sequential model's layers.
     *
     * The summary includes
     * - Name and type of all layers that comprise the model.
     * - Output shape(s) of the layers
     * - Number of weight parameters of each layer
     * - The total number of trainable and non-trainable parameters of the
     * model.
     *
     * ```js
     * const model = tf.sequential();
     * model.add(
     *     tf.layers.dense({units: 100, inputShape: [10], activation: 'relu'}));
     * model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
     *
     * model.summary();
     * ```
     *
     * @param lineLength Custom line length, in number of characters.
     * @param positions Custom widths of each of the columns, as either
     *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
     *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
     *   right-most (i.e., ending) position of a column.
     * @param printFn Custom print function. Can be used to replace the default
     *   `console.log`. For example, you can use `x => {}` to mute the printed
     *   messages in the console.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    summary(lineLength?: number, positions?: number[], printFn?: (message?: any, ...optionalParams: any[]) => void): void;
    /**
     * Sets the weights of the model.
     *
     * @param weights Should be a list of Tensors with shapes and types matching
     *   the output of `model.getWeights()`.
     */
    setWeights(weights: Tensor_2[]): void;
    /**
     * Returns the loss value & metrics values for the model in test mode.
     *
     * Loss and metrics are specified during `compile()`, which needs to happen
     * before calls to `evaluate()`.
     *
     * Computation is done in batches.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const result = model.evaluate(tf.ones([8, 10]), tf.ones([8, 1]), {
     *   batchSize: 4,
     * });
     * result.print();
     * ```
     *
     * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
     * model has multiple inputs.
     * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
     * model has multiple outputs.
     * @param args A `ModelEvaluateConfig`, containing optional fields.
     *
     * @return `Scalar` test loss (if the model has a single output and no
     *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
     *   and/or metrics). The attribute `model.metricsNames`
     *   will give you the display labels for the scalar outputs.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    evaluate(x: Tensor_2 | Tensor_2[], y: Tensor_2 | Tensor_2[], args?: ModelEvaluateArgs): Scalar_2 | Scalar_2[];
    /**
     * Evaluate model using a dataset object.
     *
     * Note: Unlike `evaluate()`, this method is asynchronous (`async`);
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for evaluation. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g..
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs. Of the two items in the array, the
     *   first is the input feature(s) and the second is the output target(s).
     * @param args A configuration object for the dataset-based evaluation.
     * @returns Loss and metric values as an Array of `Scalar` objects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    evaluateDataset(dataset: Dataset_2<{}>, args: ModelEvaluateDatasetArgs): Promise<Scalar_2 | Scalar_2[]>;
    /**
     * Generates output predictions for the input samples.
     *
     * Computation is done in batches.
     *
     * Note: the "step" mode of predict() is currently not supported.
     *   This is because the TensorFlow.js core backend is imperative only.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predict(tf.ones([2, 10])).print();
     * ```
     *
     * @param x The input data, as a Tensor, or an `Array` of `tf.Tensor`s if
     *   the model has multiple inputs.
     * @param conifg A `ModelPredictConfig` object containing optional fields.
     *
     * @return `tf.Tensor`(s) of predictions.
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and the model's expectations, or in case a stateful model receives a
     *   number of samples that is not a multiple of the batch size.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    predict(x: Tensor_2 | Tensor_2[], args?: ModelPredictArgs): Tensor_2 | Tensor_2[];
    /**
     * Returns predictions for a single batch of samples.
     *
     * @param x: Input samples, as a Tensor, or list of Tensors (if the model
     *   has multiple inputs).
     * @return Tensor(s) of predictions
     */
    predictOnBatch(x: Tensor_2): Tensor_2 | Tensor_2[];
    /**
     * See `LayersModel.compile`.
     *
     * @param args
     */
    compile(args: ModelCompileArgs): void;
    get optimizer(): Optimizer_2;
    set optimizer(optimizer: Optimizer_2);
    /**
     * Trains the model for a fixed number of epochs (iterations on a dataset).
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const history = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
     *   batchSize: 4,
     *   epochs: 3
     * });
     * console.log(history.history.loss[0]);
     * ```
     *
     * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
     * model has multiple inputs. If all inputs in the model are named, you can
     * also pass a dictionary mapping input names to `tf.Tensor`s.
     * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
     * the model has multiple outputs. If all outputs in the model are named, you
     *  can also pass a dictionary mapping output names to `tf.Tensor`s.
     * @param args  A `ModelFitConfig`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and what the model expects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    fit(x: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, y: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, args?: ModelFitArgs): Promise<History_2>;
    /**
     * Trains the model using a dataset object.
     *
     * ```js
     * const xArray = [
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     * ];
     * const yArray = [1, 1, 1, 1];
     * // Create a dataset from the JavaScript array.
     * const xDataset = tf.data.array(xArray);
     * const yDataset = tf.data.array(yArray);
     * // Zip combines the `x` and `y` Datasets into a single Dataset, the
     * // iterator of which will return an object containing of two tensors,
     * // corresponding to `x` and `y`.  The call to `batch(4)` will bundle
     * // four such samples into a single object, with the same keys now pointing
     * // to tensors that hold 4 examples, organized along the batch dimension.
     * // The call to `shuffle(4)` causes each iteration through the dataset to
     * // happen in a different order.  The size of the shuffle window is 4.
     * const xyDataset = tf.data.zip({xs: xDataset, ys: yDataset})
     *     .batch(4)
     *     .shuffle(4);
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [9]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const history = await model.fitDataset(xyDataset, {
     *   epochs: 4,
     *   callbacks: {onEpochEnd: (epoch, logs) => console.log(logs.loss)}
     * });
     * ```
     *
     * @param dataset A dataset object. Its `iterator()` method is expected to
     *   generate a dataset iterator object, the `next()` method of which is
     *   expected to produce data batches for evaluation. The return value of the
     *   `next()` call ought to contain a boolean `done` field and a `value`
     *   field.
     *
     *   The `value` field is expected to be an object of with fields
     *   `xs` and `ys`, which point to the feature tensor and the target tensor,
     *   respectively. This case is for models with exactly one input and one
     *   output (e.g.. a sequential model). For example:
     *   ```js
     *   {value: {xs: xsTensor, ys: ysTensor}, done: false}
     *   ```
     *
     *   If the model has multiple inputs, the `xs` field of `value` should
     *   be an object mapping input names to their respective feature tensors.
     *   For example:
     *   ```js
     *   {
     *     value: {
     *       xs: {
     *         input_1: xsTensor1,
     *         input_2: xsTensor2
     *       },
     *       ys: ysTensor
     *     },
     *     done: false
     *   }
     *   ```
     *   If the model has multiple outputs, the `ys` field of `value` should
     *   be an object mapping output names to their respective target tensors.
     *   For example:
     *   ```js
     *   {
     *     value: {
     *       xs: xsTensor,
     *       ys: {
     *         output_1: ysTensor1,
     *         output_2: ysTensor2
     *       },
     *     },
     *     done: false
     *   }
     *   ```
     * @param args A `ModelFitDatasetArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */
    fitDataset<T>(dataset: Dataset_2<T>, args: ModelFitDatasetArgs<T>): Promise<History_2>;
    /**
     * Runs a single gradient update on a single batch of data.
     *
     * This method differs from `fit()` and `fitDataset()` in the following
     * regards:
     *   - It operates on exactly one batch of data.
     *   - It returns only the loss and matric values, instead of
     *     returning the batch-by-batch loss and metric values.
     *   - It doesn't support fine-grained options such as verbosity and
     *     callbacks.
     *
     * @param x Input data. It could be one of the following:
     *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
     *     multiple inputs).
     *   - An Object mapping input names to corresponding `tf.Tensor` (if the
     *     model has named inputs).
     * @param y Target darta. It could be either a `tf.Tensor` a multiple
     *   `tf.Tensor`s. It should be consistent with `x`.
     * @returns Training loss or losses (in case the model has
     *   multiple outputs), along with metrics (if any), as numbers.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    trainOnBatch(x: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }, y: Tensor_2 | Tensor_2[] | {
        [inputName: string]: Tensor_2;
    }): Promise<number | number[]>;
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict, customObjects?: serialization_2.ConfigDict, fastWeightInit?: boolean): T;
    /**
     * Setter used for force stopping of LayersModel.fit() (i.e., training).
     *
     * Example:
     *
     * ```js
     * const model = tf.sequential();
     * model.add(tf.layers.dense({units: 1, inputShape: [10]}));
     * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
     * const xs = tf.ones([8, 10]);
     * const ys = tf.zeros([8, 1]);
     *
     * const history = await model.fit(xs, ys, {
     *   epochs: 10,
     *   callbacks: {
     *     onEpochEnd: async (epoch, logs) => {
     *       if (epoch === 2) {
     *         model.stopTraining = true;
     *       }
     *     }
     *   }
     * });
     *
     * // There should be only 3 values in the loss array, instead of 10 values,
     * // due to the stopping after 3 epochs.
     * console.log(history.history.loss);
     * ```
     */
    set stopTraining(stop: boolean);
    get stopTraining(): boolean;
    getConfig(): any;
}

/**
 * Creates a `tf.Sequential` model.  A sequential model is any model where the
 * outputs of one layer are the inputs to the next layer, i.e. the model
 * topology is a simple 'stack' of layers, with no branching or skipping.
 *
 * This means that the first layer passed to a `tf.Sequential` model should have
 * a defined input shape. What that means is that it should have received an
 * `inputShape` or `batchInputShape` argument, or for some type of layers
 * (recurrent, Dense...) an `inputDim` argument.
 *
 * The key difference between `tf.model` and `tf.sequential` is that
 * `tf.sequential` is less generic, supporting only a linear stack of layers.
 * `tf.model` is more generic and supports an arbitrary graph (without
 * cycles) of layers.
 *
 * Examples:
 *
 * ```js
 * const model = tf.sequential();
 *
 * // First layer must have an input shape defined.
 * model.add(tf.layers.dense({units: 32, inputShape: [50]}));
 * // Afterwards, TF.js does automatic shape inference.
 * model.add(tf.layers.dense({units: 4}));
 *
 * // Inspect the inferred shape of the model's output, which equals
 * // `[null, 4]`. The 1st dimension is the undetermined batch dimension; the
 * // 2nd is the output size of the model's last layer.
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 *
 * It is also possible to specify a batch size (with potentially undetermined
 * batch dimension, denoted by "null") for the first layer using the
 * `batchInputShape` key. The following example is equivalent to the above:
 *
 * ```js
 * const model = tf.sequential();
 *
 * // First layer must have a defined input shape
 * model.add(tf.layers.dense({units: 32, batchInputShape: [null, 50]}));
 * // Afterwards, TF.js does automatic shape inference.
 * model.add(tf.layers.dense({units: 4}));
 *
 * // Inspect the inferred shape of the model's output.
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 *
 * You can also use an `Array` of already-constructed `Layer`s to create
 * a `tf.Sequential` model:
 *
 * ```js
 * const model = tf.sequential({
 *   layers: [tf.layers.dense({units: 32, inputShape: [50]}),
 *            tf.layers.dense({units: 4})]
 * });
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 *
 * @doc {heading: 'Models', subheading: 'Creation'}
 */
export declare function sequential(config?: SequentialArgs): Sequential;

/**
 * Configuration for a Sequential model.
 */
export declare interface SequentialArgs {
    /** Stack of layers for the model. */
    layers?: Layer[];
    /** The name of this model. */
    name?: string;
}

/**
 * Serializable defines the serialization contract.
 *
 * TFJS requires serializable classes to return their className when asked
 * to avoid issues with minification.
 */
declare abstract class Serializable {
    /**
     * Return the class name for this class to use in serialization contexts.
     *
     * Generally speaking this will be the same thing that constructor.name
     * would have returned.  However, the class name needs to be robust
     * against minification for serialization/deserialization to work properly.
     *
     * There's also places such as initializers.VarianceScaling, where
     * implementation details between different languages led to different
     * class hierarchies and a non-leaf node is used for serialization purposes.
     */
    getClassName(): string;
    /**
     * Return all the non-weight state needed to serialize this object.
     */
    abstract getConfig(): ConfigDict;
    /**
     * Creates an instance of T from a ConfigDict.
     *
     * This works for most descendants of serializable.  A few need to
     * provide special handling.
     * @param cls A Constructor for the class to instantiate.
     * @param config The Configuration for the object.
     */
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

/**
 * Type to represent the class-type of Serializable objects.
 *
 * Ie the class prototype with access to the constructor and any
 * static members/methods. Instance methods are not listed here.
 *
 * Source for this idea: https://stackoverflow.com/a/43607255
 */
declare type SerializableConstructor<T extends Serializable> = {
    new (...args: any[]): T;
    className: string;
    fromConfig: FromConfigMethod<T>;
};

declare namespace serialization {
    export {
        registerClass,
        ConfigDictValue,
        ConfigDict,
        ConfigDictArray,
        SerializableConstructor,
        FromConfigMethod,
        Serializable,
        SerializationMap
    }
}
export { serialization }

/**
 * Maps string keys to class constructors.
 *
 * Used during (de)serialization from the cross-language JSON format, which
 * requires the class name in the serialization format matches the class
 * names as used in Python, should it exist.
 */
declare class SerializationMap {
    private static instance;
    classNameMap: {
        [className: string]: [
        SerializableConstructor<Serializable>,
        FromConfigMethod<Serializable>
        ];
    };
    private constructor();
    /**
     * Returns the singleton instance of the map.
     */
    static getMap(): SerializationMap;
    /**
     * Registers the class as serializable.
     */
    static register<T extends Serializable>(cls: SerializableConstructor<T>): void;
}

/**
 * Sets the backend (cpu, webgl, wasm, etc) responsible for creating tensors and
 * executing operations on those tensors. Returns a promise that resolves
 * to a boolean if the backend initialization was successful.
 *
 * Note this disposes the current backend, if any, as well as any tensors
 * associated with it. A new backend is initialized, even if it is of the
 * same type as the previous one.
 *
 * @param backendName The name of the backend. Currently supports
 *     `'webgl'|'cpu'` in the browser, `'tensorflow'` under node.js
 *     (requires tfjs-node), and `'wasm'` (requires tfjs-backend-wasm).
 *
 * @doc {heading: 'Backends'}
 */
export declare function setBackend(backendName: string): Promise<boolean>;

export declare const setdiff1dAsync: typeof setdiff1dAsync_;

/**
 * Computes the difference between two lists of numbers.
 *
 * Given a Tensor `x` and a Tensor `y`, this operation returns a Tensor `out`
 * that represents all values that are in `x` but not in `y`. The returned
 * Tensor `out` is sorted in the same order that the numbers appear in `x`
 * (duplicates are preserved). This operation also returns a Tensor indices that
 * represents the position of each out element in `x`. In other words:
 *
 * `out[i] = x[idx[i]] for i in [0, 1, ..., out.length - 1]`
 *
 * ```js
 * const x = [1, 2, 3, 4, 5, 6];
 * const y = [1, 3, 5];
 *
 * const [out, indices] = await tf.setdiff1dAsync(x, y);
 * out.print(); // [2, 4, 6]
 * indices.print(); // [1, 3, 5]
 * ```
 *
 * @param x 1-D Tensor. Values to keep.
 * @param y 1-D Tensor. Must have the same type as x. Values to exclude in the
 *     output.
 * @returns Promise of Tensor tuple [out, indices].
 *  out: Tensor with the same type as x.
 *  indices: A Tensor of type int32.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function setdiff1dAsync_(x: Tensor | TensorLike, y: Tensor | TensorLike): Promise<[Tensor, Tensor]>;

/**
 * Sets the global platform.
 *
 * @param platformName The name of this platform.
 * @param platform A platform implementation.
 */
export declare function setPlatform(platformName: string, platform: Platform): void;

export declare function setWebGLContext(webGLVersion: number, gl: WebGLRenderingContext): void;

/** @doclink Optimizer */
export declare class SGDOptimizer extends Optimizer {
    protected learningRate: number;
    /** @nocollapse */
    static className: string;
    protected c: Scalar;
    constructor(learningRate: number);
    applyGradients(variableGradients: NamedTensorMap | NamedTensor[]): void;
    /**
     * Sets the learning rate of the optimizer.
     */
    setLearningRate(learningRate: number): void;
    dispose(): void;
    getWeights(): Promise<NamedTensor[]>;
    setWeights(weightValues: NamedTensor[]): Promise<void>;
    getConfig(): ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends Serializable>(cls: SerializableConstructor<T>, config: ConfigDict): T;
}

declare type SGDOptimizerConfig = {
    learning_rate: number;
};

declare type SGDSerialization = BaseSerialization<'SGD', SGDOptimizerConfig>;

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/** @docalias (null | number)[] */
export declare type Shape = Array<null | number>;

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/** @docalias number[] */
export declare interface ShapeMap {
    R0: number[];
    R1: [number];
    R2: [number, number];
    R3: [number, number, number];
    R4: [number, number, number, number];
    R5: [number, number, number, number, number];
    R6: [number, number, number, number, number, number];
}

declare namespace shared {
    export {
        simpleAbsImpl,
        addImpl,
        bincountImpl,
        bincountReduceImpl,
        ceilImpl,
        concatImpl,
        equalImpl,
        expImpl,
        expm1Impl,
        floorImpl,
        gatherNdImpl,
        gatherV2Impl,
        greaterImpl,
        greaterEqualImpl,
        lessImpl,
        lessEqualImpl,
        linSpaceImpl,
        logImpl,
        maxImpl,
        maximumImpl,
        minimumImpl,
        multiplyImpl,
        negImpl,
        notEqualImpl,
        prodImpl,
        rangeImpl,
        rsqrtImpl,
        sigmoidImpl,
        sliceImpl,
        sparseFillEmptyRowsImpl,
        sparseReshapeImpl,
        sparseSegmentReductionImpl,
        sqrtImpl,
        squaredDifferenceImpl,
        stridedSliceImpl,
        stringNGramsImpl,
        stringSplitImpl,
        stringToHashBucketFastImpl,
        subImpl,
        tileImpl,
        topKImpl,
        transposeImpl,
        uniqueImpl,
        ComplexBinaryKernelImpl,
        SimpleBinaryKernelImpl
    }
}
export { shared }

declare const shouldFuse: (gradientDepth: number, activation: Activation) => boolean;

/**
 * Shuffles the array in-place using Fisher-Yates algorithm.
 *
 * ```js
 * const a = [1, 2, 3, 4, 5];
 * tf.util.shuffle(a);
 * console.log(a);
 * ```
 *
 * @param array The array to shuffle in-place.
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function shuffle(array: any[] | Uint32Array | Int32Array | Float32Array): void;

/**
 * Shuffles two arrays in-place the same way using Fisher-Yates algorithm.
 *
 * ```js
 * const a = [1,2,3,4,5];
 * const b = [11,22,33,44,55];
 * tf.util.shuffleCombo(a, b);
 * console.log(a, b);
 * ```
 *
 * @param array The first array to shuffle in-place.
 * @param array2 The second array to shuffle in-place with the same permutation
 *     as the first array.
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function shuffleCombo(array: any[] | Uint32Array | Int32Array | Float32Array, array2: any[] | Uint32Array | Int32Array | Float32Array): void;

export declare const Sigmoid = "Sigmoid";

export declare const sigmoid: typeof sigmoid_;

/**
 * Computes sigmoid element-wise, `1 / (1 + exp(-x))`
 *
 * ```js
 * const x = tf.tensor1d([0, -1, 2, -3]);
 *
 * x.sigmoid().print();  // or tf.sigmoid(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function sigmoid_<T extends Tensor>(x: T | TensorLike): T;

declare const sigmoidImpl: SimpleUnaryImpl;

export declare type SigmoidInputs = UnaryInputs;

export declare const Sign = "Sign";

export declare const sign: typeof sign_;

/**
 * Returns an element-wise indication of the sign of a number.
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3, NaN, 0]);
 *
 * x.sign().print();  // or tf.sign(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function sign_<T extends Tensor>(x: T | TensorLike): T;

export declare const signal: {
    hammingWindow: (windowLength: number) => Tensor1D;
    hannWindow: (windowLength: number) => Tensor1D;
    frame: (signal: Tensor1D, frameLength: number, frameStep: number, padEnd?: boolean, padValue?: number) => Tensor<Rank>;
    stft: (signal: Tensor1D, frameLength: number, frameStep: number, fftLength?: number, windowFn?: (length: number) => Tensor1D) => Tensor<Rank>;
};

/**
 * Interface for SavedModel/GraphModel SignatureDef info.
 */
export declare interface SignatureDef {
    [key: string]: SignatureDefEntry;
}

/**
 * Interface for SavedModel/GraphModel SignatureDef entry.
 */
export declare interface SignatureDefEntry {
    inputs: {
        [key: string]: ModelTensorInfo;
    };
    outputs: {
        [key: string]: ModelTensorInfo;
    };
}

/**
 * @deprecated Deprecated interface for SavedModel/GraphModel SignatureDef info.
 *     User SignatureDef instead.
 */
export declare interface SignatureDefInfo {
    [key: string]: {
        inputs: {
            [key: string]: SavedModelTensorInfo;
        };
        outputs: {
            [key: string]: SavedModelTensorInfo;
        };
    };
}

export declare type SignInputs = UnaryInputs;

declare function simpleAbsImpl(vals: TypedArray_2): Float32Array;

declare type SimpleBinaryKernelImpl = (aShape: number[], bShape: number[], aVals: TypedArray_2 | string[], bVals: TypedArray_2 | string[], dtype: DataType_2) => [TypedArray_2, number[]];

declare class SimpleRNN extends RNN {
    /** @nocollapse */
    static className: string;
    constructor(args: SimpleRNNLayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict): T;
}

/**
 * Fully-connected RNN where the output is to be fed back to input.
 *
 * This is an `RNN` layer consisting of one `SimpleRNNCell`. However, unlike
 * the underlying `SimpleRNNCell`, the `apply` method of `SimpleRNN` operates
 * on a sequence of inputs. The shape of the input (not including the first,
 * batch dimension) needs to be at least 2-D, with the first dimension being
 * time steps. For example:
 *
 * ```js
 * const rnn = tf.layers.simpleRNN({units: 8, returnSequences: true});
 *
 * // Create an input with 10 time steps.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the `SimpleRNNCell`'s number of units.
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function simpleRNN(args: SimpleRNNLayerArgs): SimpleRNN;

declare class SimpleRNNCell extends RNNCell {
    /** @nocollapse */
    static className: string;
    readonly units: number;
    readonly activation: Activation_2;
    readonly useBias: boolean;
    readonly kernelInitializer: Initializer;
    readonly recurrentInitializer: Initializer;
    readonly biasInitializer: Initializer;
    readonly kernelConstraint: Constraint;
    readonly recurrentConstraint: Constraint;
    readonly biasConstraint: Constraint;
    readonly kernelRegularizer: Regularizer;
    readonly recurrentRegularizer: Regularizer;
    readonly biasRegularizer: Regularizer;
    readonly dropout: number;
    readonly recurrentDropout: number;
    readonly dropoutFunc: Function;
    readonly stateSize: number;
    kernel: LayerVariable;
    recurrentKernel: LayerVariable;
    bias: LayerVariable;
    readonly DEFAULT_ACTIVATION = "tanh";
    readonly DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
    readonly DEFAULT_RECURRENT_INITIALIZER = "orthogonal";
    readonly DEFAULT_BIAS_INITIALIZER: InitializerIdentifier;
    constructor(args: SimpleRNNCellLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Cell class for `SimpleRNN`.
 *
 * `SimpleRNNCell` is distinct from the `RNN` subclass `SimpleRNN` in that its
 * `apply` method takes the input data of only a single time step and returns
 * the cell's output at the time step, while `SimpleRNN` takes the input data
 * over a number of time steps. For example:
 *
 * ```js
 * const cell = tf.layers.simpleRNNCell({units: 2});
 * const input = tf.input({shape: [10]});
 * const output = cell.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10]: This is the cell's output at a single time step. The 1st
 * // dimension is the unknown batch size.
 * ```
 *
 * Instance(s) of `SimpleRNNCell` can be used to construct `RNN` layers. The
 * most typical use of this workflow is to combine a number of cells into a
 * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
 * RNN. For example:
 *
 * ```js
 * const cells = [
 *   tf.layers.simpleRNNCell({units: 4}),
 *   tf.layers.simpleRNNCell({units: 8}),
 * ];
 * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
 *
 * // Create an input with 10 time steps and a length-20 vector at each step.
 * const input = tf.input({shape: [10, 20]});
 * const output = rnn.apply(input);
 *
 * console.log(JSON.stringify(output.shape));
 * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
 * // same as the sequence length of `input`, due to `returnSequences`: `true`;
 * // 3rd dimension is the last `SimpleRNNCell`'s number of units.
 * ```
 *
 * To create an `RNN` consisting of only *one* `SimpleRNNCell`, use the
 * `tf.layers.simpleRNN`.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function simpleRNNCell(args: SimpleRNNCellLayerArgs): SimpleRNNCell;

export declare interface SimpleRNNCellLayerArgs extends LayerArgs {
    /**
     * units: Positive integer, dimensionality of the output space.
     */
    units: number;
    /**
     * Activation function to use.
     * Default: hyperbolic tangent ('tanh').
     * If you pass `null`,  'linear' activation will be applied.
     */
    activation?: ActivationIdentifier;
    /**
     * Whether the layer uses a bias vector.
     */
    useBias?: boolean;
    /**
     * Initializer for the `kernel` weights matrix, used for the linear
     * transformation of the inputs.
     */
    kernelInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the `recurrentKernel` weights matrix, used for
     * linear transformation of the recurrent state.
     */
    recurrentInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the bias vector.
     */
    biasInitializer?: InitializerIdentifier | Initializer;
    /**
     * Regularizer function applied to the `kernel` weights matrix.
     */
    kernelRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the `recurrent_kernel` weights matrix.
     */
    recurrentRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the bias vector.
     */
    biasRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Constraint function applied to the `kernel` weights matrix.
     */
    kernelConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint function applied to the `recurrentKernel` weights matrix.
     */
    recurrentConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraintfunction applied to the bias vector.
     */
    biasConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Float number between 0 and 1. Fraction of the units to drop for the linear
     * transformation of the inputs.
     */
    dropout?: number;
    /**
     * Float number between 0 and 1. Fraction of the units to drop for the linear
     * transformation of the recurrent state.
     */
    recurrentDropout?: number;
    /**
     * This is added for test DI purpose.
     */
    dropoutFunc?: Function;
}

export declare interface SimpleRNNLayerArgs extends BaseRNNLayerArgs {
    /**
     * Positive integer, dimensionality of the output space.
     */
    units: number;
    /**
     * Activation function to use.
     *
     * Defaults to  hyperbolic tangent (`tanh`)
     *
     * If you pass `null`, no activation will be applied.
     */
    activation?: ActivationIdentifier;
    /**
     * Whether the layer uses a bias vector.
     */
    useBias?: boolean;
    /**
     * Initializer for the `kernel` weights matrix, used for the linear
     * transformation of the inputs.
     */
    kernelInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the `recurrentKernel` weights matrix, used for
     * linear transformation of the recurrent state.
     */
    recurrentInitializer?: InitializerIdentifier | Initializer;
    /**
     * Initializer for the bias vector.
     */
    biasInitializer?: InitializerIdentifier | Initializer;
    /**
     * Regularizer function applied to the kernel weights matrix.
     */
    kernelRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the recurrentKernel weights matrix.
     */
    recurrentRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Regularizer function applied to the bias vector.
     */
    biasRegularizer?: RegularizerIdentifier | Regularizer;
    /**
     * Constraint function applied to the kernel weights matrix.
     */
    kernelConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint function applied to the recurrentKernel weights matrix.
     */
    recurrentConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Constraint function applied to the bias vector.
     */
    biasConstraint?: ConstraintIdentifier | Constraint;
    /**
     * Number between 0 and 1. Fraction of the units to drop for the linear
     * transformation of the inputs.
     */
    dropout?: number;
    /**
     * Number between 0 and 1. Fraction of the units to drop for the linear
     * transformation of the recurrent state.
     */
    recurrentDropout?: number;
    /**
     * This is added for test DI purpose.
     */
    dropoutFunc?: Function;
}

declare type SimpleUnaryImpl = (values: TypedArray_2, dtype: DataType_2, attrs?: NamedAttrMap_2) => TypedArray_2;

export declare const Sin = "Sin";

export declare const sin: typeof sin_;

/**
 * Computes sin of the input Tensor element-wise: `sin(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, Math.PI / 2, Math.PI * 3 / 4]);
 *
 * x.sin().print();  // or tf.sin(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function sin_<T extends Tensor>(x: T | TensorLike): T;

declare interface SingleValueMap {
    bool: boolean;
    int32: number;
    float32: number;
    complex64: number;
    string: string;
}

export declare const Sinh = "Sinh";

export declare const sinh: typeof sinh_;

/**
 * Computes hyperbolic sin of the input `tf.Tensor` element-wise: `sinh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.sinh().print();  // or tf.sinh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function sinh_<T extends Tensor>(x: T | TensorLike): T;

export declare type SinhInputs = UnaryInputs;

export declare type SinInputs = UnaryInputs;

/**
 * Returns the size (number of elements) of the tensor given its shape.
 *
 * ```js
 * const shape = [3, 4, 2];
 * const size = tf.util.sizeFromShape(shape);
 * console.log(size);
 * ```
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */
declare function sizeFromShape(shape: number[]): number;

declare function sizeToSquarishShape(size: number): [number, number];

export declare const Slice = "Slice";

export declare const slice: typeof slice_;

export declare const slice1d: typeof slice1d_;

/**
 * Extracts a 1D slice from 1D array starting at coordinates `begin` and is
 * of length `size`. See `slice` for details.
 */
declare function slice1d_(x: Tensor1D | TensorLike, begin: number, size: number): Tensor1D;

export declare const slice2d: typeof slice2d_;

/**
 * Extracts a 2D slice from a 2D array starting at coordinates `begin` and
 * is of size `size`. See `slice` for details.
 */
declare function slice2d_(x: Tensor2D | TensorLike, begin: [number, number], size: [number, number]): Tensor2D;

export declare const slice3d: typeof slice3d_;

/**
 * Extracts a 3D slice from a 3D array starting at coordinates `begin` and
 * is of size `size`. See `slice` for details.
 */
declare function slice3d_(x: Tensor3D | TensorLike, begin: [number, number, number], size: [number, number, number]): Tensor3D;

export declare const slice4d: typeof slice4d_;

/**
 * Extracts a 4D slice from a 4D array starting at coordinates `begin` and
 * is of size `size`. See `slice` for details.
 */
declare function slice4d_(x: Tensor4D | TensorLike, begin: [number, number, number, number], size: [number, number, number, number]): Tensor4D;

/**
 * Extracts a slice from a `tf.Tensor` starting at coordinates `begin`
 * and is of size `size`.
 *
 * Also available are stricter rank-specific methods with the same signature
 * as this method that assert that `x` is of the given rank:
 *   - `tf.slice1d`
 *   - `tf.slice2d`
 *   - `tf.slice3d`
 *   - `tf.slice4d`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * x.slice([1], [2]).print();
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * x.slice([1, 0], [1, 2]).print();
 * ```
 * @param x The input `tf.Tensor` to slice from.
 * @param begin The coordinates to start the slice from. The length can be
 *     less than the rank of x - the rest of the axes will have implicit 0 as
 *     start. Can also be a single number, in which case it specifies the
 *     first axis.
 * @param size The size of the slice. The length can be less than the rank of
 *     x - the rest of the axes will have implicit -1. A value of -1 requests
 *     the rest of the dimensions in the axis. Can also be a single number,
 *     in which case it specifies the size of the first axis.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function slice_<R extends Rank, T extends Tensor<R>>(x: T | TensorLike, begin: number | number[], size?: number | number[]): T;

declare namespace slice_util {
    export {
        assertParamsValid,
        maskToAxes,
        computeOutShape,
        stridesWithElidedDims,
        getNormalizedAxes,
        startIndicesWithElidedDims,
        stopIndicesWithElidedDims,
        stridesForAxis,
        startForAxis,
        stopForAxis,
        isSliceContinous,
        computeFlatOffset,
        parseSliceParams,
        sliceInfo,
        SliceInfo
    }
}
export { slice_util }

export declare interface SliceAttrs {
    begin: number | number[];
    size: number | number[];
}

declare function sliceImpl(vals: BackendValues_2, begin: number[], size: number[], shape: number[], dtype: DataType_2): BackendValues_2;

declare type SliceInfo = {
    finalShapeSparse: number[];
    finalShape: number[];
    isIdentity: boolean;
    sliceDim0: boolean;
    isSimpleSlice: boolean;
    begin: number[];
    end: number[];
    strides: number[];
};

declare function sliceInfo(xShape: number[], begin: number[], end: number[], strides: number[], beginMask: number, endMask: number, ellipsisMask: number, newAxisMask: number, shrinkAxisMask: number): SliceInfo;

export declare type SliceInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const Softmax = "Softmax";

export declare const softmax: typeof softmax_;

/**
 * Computes the softmax normalized vector given the logits.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 *
 * a.softmax().print();  // or tf.softmax(a)
 * ```
 *
 * ```js
 * const a = tf.tensor2d([2, 4, 6, 1, 2, 3], [2, 3]);
 *
 * a.softmax().print();  // or tf.softmax(a)
 * ```
 *
 * @param logits The logits array.
 * @param dim The dimension softmax would be performed on. Defaults to `-1`
 *     which indicates the last dimension.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
declare function softmax_<T extends Tensor>(logits: T | TensorLike, dim?: number): T;

declare class Softmax_2 extends Layer {
    /** @nocollapse */
    static className: string;
    readonly axis: number;
    readonly softmax: (t: Tensor_2, a?: number) => Tensor_2;
    readonly DEFAULT_AXIS = 1;
    constructor(args?: SoftmaxLayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Softmax activation layer.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers'
 * }
 */
declare function softmax_2(args?: SoftmaxLayerArgs): Softmax_2;

export declare interface SoftmaxAttrs {
    dim: number;
}

export declare type SoftmaxInputs = Pick<NamedTensorInfoMap, 'logits'>;

declare interface SoftmaxLayerArgs extends LayerArgs {
    /**
     * Integer, axis along which the softmax normalization is applied.
     * Defaults to `-1` (i.e., the last axis).
     */
    axis?: number;
}

export declare const Softplus = "Softplus";

export declare const softplus: typeof softplus_;

/**
 * Computes softplus of the input `tf.Tensor` element-wise: `log(exp(x) + 1)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.softplus().print();  // or tf.softplus(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function softplus_<T extends Tensor>(x: T | TensorLike): T;

export declare type SoftplusInputs = UnaryInputs;

export declare const SpaceToBatchND = "SpaceToBatchND";

export declare const spaceToBatchND: typeof spaceToBatchND_;

/**
 * This operation divides "spatial" dimensions `[1, ..., M]` of the input into
 * a grid of blocks of shape `blockShape`, and interleaves these blocks with
 * the "batch" dimension (0) such that in the output, the spatial
 * dimensions `[1, ..., M]` correspond to the position within the grid,
 * and the batch dimension combines both the position within a spatial block
 * and the original batch position. Prior to division into blocks,
 * the spatial dimensions of the input are optionally zero padded
 * according to `paddings`. See below for a precise description.
 *
 * ```js
 * const x = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
 * const blockShape = [2, 2];
 * const paddings = [[0, 0], [0, 0]];
 *
 * x.spaceToBatchND(blockShape, paddings).print();
 * ```
 *
 * @param x A `tf.Tensor`. N-D with `x.shape` = `[batch] + spatialShape +
 * remainingShape`, where spatialShape has `M` dimensions.
 * @param blockShape A 1-D array. Must have shape `[M]`, all values must
 * be >= 1.
 * @param paddings A 2-D array. Must have shape `[M, 2]`, all values must be >=
 *     0. `paddings[i] = [padStart, padEnd]` specifies the amount to zero-pad
 * from input dimension `i + 1`, which corresponds to spatial dimension `i`. It
 * is required that
 * `(inputShape[i + 1] + padStart + padEnd) % blockShape[i] === 0`
 *
 * This operation is equivalent to the following steps:
 *
 * 1. Zero-pad the start and end of dimensions `[1, ..., M]` of the input
 * according to `paddings` to produce `padded` of shape paddedShape.
 *
 * 2. Reshape `padded` to `reshapedPadded` of shape:
 * `[batch] + [paddedShape[1] / blockShape[0], blockShape[0], ...,
 * paddedShape[M] / blockShape[M-1], blockShape[M-1]] + remainingShape`
 *
 * 3. Permute dimensions of `reshapedPadded` to produce `permutedReshapedPadded`
 * of shape: `blockShape + [batch] + [paddedShape[1] / blockShape[0], ...,
 * paddedShape[M] / blockShape[M-1]] + remainingShape`
 *
 * 4. Reshape `permutedReshapedPadded` to flatten `blockShape` into the
 * batch dimension, producing an output tensor of shape:
 * `[batch * prod(blockShape)] + [paddedShape[1] / blockShape[0], ...,
 * paddedShape[M] / blockShape[M-1]] + remainingShape`
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function spaceToBatchND_<T extends Tensor>(x: T | TensorLike, blockShape: number[], paddings: number[][]): T;

export declare interface SpaceToBatchNDAttrs {
    blockShape: number[];
    paddings: number[][];
}

export declare type SpaceToBatchNDInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const sparse: {
    sparseFillEmptyRows: (indices: TensorLike | Tensor2D, values: TensorLike | Tensor1D, denseShape: TensorLike | Tensor1D, defaultValue: ScalarLike | Scalar) => NamedTensorMap;
    sparseReshape: (inputIndices: TensorLike | Tensor2D, inputShape: TensorLike | Tensor1D, newShape: TensorLike | Tensor1D) => NamedTensorMap;
    sparseSegmentMean: (data: TensorLike | Tensor<Rank>, indices: TensorLike | Tensor1D, segmentIds: TensorLike | Tensor1D) => Tensor<Rank>;
    sparseSegmentSum: (data: TensorLike | Tensor<Rank>, indices: TensorLike | Tensor1D, segmentIds: TensorLike | Tensor1D) => Tensor<Rank>;
};

/**
 * Sparse categorical accuracy metric function.
 *
 * Example:
 * ```js
 *
 * const yTrue = tf.tensor1d([1, 1, 2, 2, 0]);
 * const yPred = tf.tensor2d(
 *      [[0, 1, 0], [1, 0, 0], [0, 0.4, 0.6], [0, 0.6, 0.4], [0.7, 0.3, 0]]);
 * const crossentropy = tf.metrics.sparseCategoricalAccuracy(yTrue, yPred);
 * crossentropy.print();
 * ```
 *
 * @param yTrue True labels: indices.
 * @param yPred Predicted probabilities or logits.
 * @returns Accuracy tensor.
 *
 * @doc {heading: 'Metrics', namespace: 'metrics'}
 */
declare function sparseCategoricalAccuracy(yTrue: Tensor_2, yPred: Tensor_2): Tensor_2;

export declare const SparseFillEmptyRows = "SparseFillEmptyRows";

declare function sparseFillEmptyRowsImpl(indices: TypedArray_2, indicesShape: number[], indicesDType: DataType_2, values: TypedArray_2, valuesDType: DataType_2, denseShape: TypedArray_2, defaultValue: number): [
TypedArray_2,
number[],
TypedArray_2,
boolean[],
number[]
];

export declare type SparseFillEmptyRowsInputs = Pick<NamedTensorInfoMap, 'indices' | 'values' | 'denseShape' | 'defaultValue'>;

export declare const SparseReshape = "SparseReshape";

declare function sparseReshapeImpl(inputIndices: TypedArray_2, inputIndicesShape: number[], inputDType: DataType_2, inputShape: number[], targetShape: number[]): [TypedArray_2, number[], number[]];

export declare type SparseReshapeInputs = Pick<NamedTensorInfoMap, 'inputIndices' | 'inputShape' | 'newShape'>;

export declare const SparseSegmentMean = "SparseSegmentMean";

export declare type SparseSegmentMeanInputs = Pick<NamedTensorInfoMap, 'data' | 'indices' | 'segmentIds'>;

declare function sparseSegmentReductionImpl(input: TypedArray_2, inputShape: number[], inputDType: DataType_2, indices: TypedArray_2, segmentIds: TypedArray_2, isMean?: boolean, defaultValue?: number): [TypedArray_2, number[]];

export declare const SparseSegmentSum = "SparseSegmentSum";

export declare type SparseSegmentSumInputs = Pick<NamedTensorInfoMap, 'data' | 'indices' | 'segmentIds'>;

export declare const SparseToDense = "SparseToDense";

export declare const sparseToDense: typeof sparseToDense_;

/**
 * Converts a sparse representation into a dense tensor.
 *
 * Builds an array dense with shape outputShape such that:
 *
 * // If sparseIndices is scalar
 * dense[i] = (i == sparseIndices ? sparseValues : defaultValue)
 *
 * // If sparseIndices is a vector, then for each i
 * dense[sparseIndices[i]] = sparseValues[i]
 *
 * // If sparseIndices is an n by d matrix, then for each i in [0, n)
 * dense[sparseIndices[i][0], ..., sparseIndices[i][d-1]] = sparseValues[i]
 * All other values in dense are set to defaultValue. If sparseValues is a
 * scalar, all sparse indices are set to this single value.
 *
 * If indices are repeated the final value is summed over all values for those
 * indices.
 *
 * ```js
 * const indices = tf.tensor1d([4, 5, 6, 1, 2, 3], 'int32');
 * const values = tf.tensor1d([10, 11, 12, 13, 14, 15], 'float32');
 * const shape = [8];
 * tf.sparseToDense(indices, values, shape).print();
 * ```
 *
 * @param sparseIndices A 0-D, 1-D, or 2-D Tensor of type int32.
 * sparseIndices[i] contains the complete index where sparseValues[i] will be
 * placed.
 * @param sparseValues A 0-D or 1-D Tensor. Values
 * corresponding to each row of sparseIndices, or a scalar value to be used for
 * all sparse indices.
 * @param outputShape Shape of the dense output tensor. the type is inferred.
 * @param defaultValue Scalar. Value to set for indices not specified in
 * sparseIndices. Defaults to zero.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
declare function sparseToDense_<R extends Rank>(sparseIndices: Tensor | TensorLike, sparseValues: Tensor | TensorLike, outputShape: ShapeMap[R], defaultValue?: Scalar | ScalarLike): Tensor<R>;

export declare interface SparseToDenseAttrs {
    outputShape: number[];
}

export declare type SparseToDenseInputs = Pick<NamedTensorInfoMap, 'sparseIndices' | 'sparseValues' | 'defaultValue'>;

declare class SpatialDropout1D extends Dropout {
    /** @nocollapse */
    static className: string;
    constructor(args: SpatialDropout1DLayerConfig);
    protected getNoiseShape(input: Tensor_2): Shape;
}

/**
 * Spatial 1D version of Dropout.
 *
 * This Layer type performs the same function as the Dropout layer, but it drops
 * entire 1D feature maps instead of individual elements. For example, if an
 * input example consists of 3 timesteps and the feature map for each timestep
 * has a size of 4, a `spatialDropout1d` layer may zero out the feature maps
 * of the 1st timesteps and 2nd timesteps completely while sparing all feature
 * elements of the 3rd timestep.
 *
 * If adjacent frames (timesteps) are strongly correlated (as is normally the
 * case in early convolution layers), regular dropout will not regularize the
 * activation and will otherwise just result in merely an effective learning
 * rate decrease. In this case, `spatialDropout1d` will help promote
 * independence among feature maps and should be used instead.
 *
 * **Arguments:**
 *   rate: A floating-point number >=0 and <=1. Fraction of the input elements
 *     to drop.
 *
 * **Input shape:**
 *   3D tensor with shape `(samples, timesteps, channels)`.
 *
 * **Output shape:**
 *   Same as the input shape.
 *
 * References:
 *   - [Efficient Object Localization Using Convolutional
 *      Networks](https://arxiv.org/abs/1411.4280)
 *
 * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
 */
declare function spatialDropout1d(args: SpatialDropout1DLayerConfig): SpatialDropout1D;

declare interface SpatialDropout1DLayerConfig extends LayerConfig {
    /** Float between 0 and 1. Fraction of the input units to drop. */
    rate: number;
    /** An integer to use as random seed. */
    seed?: number;
}

export declare const spectral: {
    fft: (input: Tensor<Rank>) => Tensor<Rank>;
    ifft: (input: Tensor<Rank>) => Tensor<Rank>;
    rfft: (input: Tensor<Rank>, fftLength?: number) => Tensor<Rank>;
    irfft: (input: Tensor<Rank>) => Tensor<Rank>;
};

export declare const split: typeof split_;

/**
 * Splits a `tf.Tensor` into sub tensors.
 *
 * If `numOrSizeSplits` is a number, splits `x` along dimension `axis`
 * into `numOrSizeSplits` smaller tensors.
 * Requires that `numOrSizeSplits` evenly divides `x.shape[axis]`.
 *
 * If `numOrSizeSplits` is a number array, splits `x` into
 * `numOrSizeSplits.length` pieces. The shape of the `i`-th piece has the
 * same size as `x` except along dimension `axis` where the size is
 * `numOrSizeSplits[i]`.
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
 * const [a, b] = tf.split(x, 2, 1);
 * a.print();
 * b.print();
 *
 * const [c, d, e] = tf.split(x, [1, 2, 1], 1);
 * c.print();
 * d.print();
 * e.print();
 * ```
 *
 * @param x The input tensor to split.
 * @param numOrSizeSplits Either an integer indicating the number of
 * splits along the axis or an array of integers containing the sizes of
 * each output tensor along the axis. If a number then it must evenly divide
 * `x.shape[axis]`; otherwise the sum of sizes must match `x.shape[axis]`.
 * Can contain one -1 indicating that dimension is to be inferred.
 * @param axis The dimension along which to split. Defaults to 0 (the first
 * dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function split_<T extends Tensor>(x: Tensor | TensorLike, numOrSizeSplits: number[] | number, axis?: number): T[];

/**
 * Splits a complex Float32Array into real and imag parts.
 *
 * The memory layout is interleaved as follows:
 * complex: [r0, i0, r1, i1, r2, i2]
 * real: [r0, r1, r2]
 * imag: [i0, i1, i2]
 *
 * This is the inverse of mergeRealAndImagArrays.
 *
 * @param complex The complex tensor values.
 * @returns An object with real and imag Float32Array components of the complex
 *     tensor.
 */
declare function splitRealAndImagArrays(complex: Float32Array): {
    real: Float32Array;
    imag: Float32Array;
};

export declare const SplitV = "SplitV";

export declare interface SplitVAttrs {
    numOrSizeSplits: number[] | number;
    axis: number;
}

export declare type SplitVInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const Sqrt = "Sqrt";

export declare const sqrt: typeof sqrt_;

/**
 * Computes square root of the input `tf.Tensor` element-wise: `y = sqrt(x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 4, -1]);
 *
 * x.sqrt().print();  // or tf.sqrt(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function sqrt_<T extends Tensor>(x: T | TensorLike): T;

declare const sqrtImpl: SimpleUnaryImpl;

export declare type SqrtInputs = UnaryInputs;

export declare const Square = "Square";

export declare const square: typeof square_;

/**
 * Computes square of `x` element-wise: `x ^ 2`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, Math.sqrt(2), -1]);
 *
 * x.square().print();  // or tf.square(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function square_<T extends Tensor>(x: T | TensorLike): T;

export declare const SquaredDifference = "SquaredDifference";

export declare const squaredDifference: typeof squaredDifference_;

/**
 * Returns (a - b) * (a - b) element-wise.
 * Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.squaredDifference(b).print();  // or tf.squaredDifference(a, b)
 * ```
 *
 * ```js
 * // Broadcast squared difference  a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.squaredDifference(b).print();  // or tf.squaredDifference(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function squaredDifference_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const squaredDifferenceImpl: SimpleBinaryKernelImpl;

export declare type SquaredDifferenceInputs = BinaryInputs;

export declare type SquareInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const squeeze: typeof squeeze_;

/**
 * Removes dimensions of size 1 from the shape of a `tf.Tensor`.
 *
 * ```js
 * const x = tf.tensor([1, 2, 3, 4], [1, 1, 4]);
 * x.squeeze().print();
 * ```
 *
 * @param x The input tensor to be squeezed.
 * @param axis An optional list of numbers. If specified, only
 *     squeezes the dimensions listed. The dimension index starts at 0. It
 * is an error to squeeze a dimension that is not 1.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
declare function squeeze_<T extends Tensor>(x: Tensor | TensorLike, axis?: number[]): T;

/** Reduces the shape by removing all dimensions of shape 1. */
declare function squeezeShape(shape: number[], axis?: number[]): {
    newShape: number[];
    keptDims: number[];
};

export declare const stack: typeof stack_;

/**
 * Stacks a list of rank-`R` `tf.Tensor`s into one rank-`(R+1)` `tf.Tensor`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * const c = tf.tensor1d([5, 6]);
 * tf.stack([a, b, c]).print();
 * ```
 *
 * @param tensors A list of tensor objects with the same shape and dtype.
 * @param axis The axis to stack along. Defaults to 0 (the first dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function stack_<T extends Tensor>(tensors: Array<T | TensorLike>, axis?: number): Tensor;

declare class StackedRNNCells extends RNNCell {
    /** @nocollapse */
    static className: string;
    protected cells: RNNCell[];
    constructor(args: StackedRNNCellsArgs);
    get stateSize(): number[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    build(inputShape: Shape | Shape[]): void;
    getConfig(): serialization_2.ConfigDict;
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict, customObjects?: serialization_2.ConfigDict): T;
    get trainableWeights(): LayerVariable[];
    get nonTrainableWeights(): LayerVariable[];
    /**
     * Retrieve the weights of a the model.
     *
     * @returns A flat `Array` of `tf.Tensor`s.
     */
    getWeights(): Tensor_2[];
    /**
     * Set the weights of the model.
     *
     * @param weights An `Array` of `tf.Tensor`s with shapes and types matching
     *     the output of `getWeights()`.
     */
    setWeights(weights: Tensor_2[]): void;
}

/**
 * Wrapper allowing a stack of RNN cells to behave as a single cell.
 *
 * Used to implement efficient stacked RNNs.
 *
 * @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'}
 */
declare function stackedRNNCells(args: StackedRNNCellsArgs): StackedRNNCells;

declare interface StackedRNNCellsArgs extends LayerArgs {
    /**
     * A `Array` of `RNNCell` instances.
     */
    cells: RNNCell[];
}

declare function startForAxis(beginMask: number, startIndices: number[], strides: number[], inputShape: number[], axis: number, ellipsisMask: number): number;

declare function startIndicesWithElidedDims(beginMask: number, ellipsisInsertionIndex: number, numElidedAxes: number, originalBegin: number[], inputShape: number[]): number[];

/**
 * TensorFlow.js-only kernels
 */
export declare const Step = "Step";

export declare const step: typeof step_;

/**
 * Computes step of the input `tf.Tensor` element-wise: `x > 0 ? 1 : alpha * x`
 *
 * ```js
 * const x = tf.tensor1d([0, 2, -1, -3]);
 *
 * x.step(.5).print();  // or tf.step(x, .5)
 * ```
 * @param x The input tensor.
 * @param alpha The gradient when input is negative.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function step_<T extends Tensor>(x: T | TensorLike, alpha?: number): T;

export declare interface StepAttrs {
    alpha: number;
}

export declare type StepInputs = UnaryInputs;

declare function stopForAxis(endMask: number, stopIndices: number[], strides: number[], inputShape: number[], axis: number, ellipsisMask: number): number;

declare function stopIndicesWithElidedDims(endMask: number, ellipsisInsertionIndex: number, numElidedAxes: number, originalEnd: number[], inputShape: number[]): number[];

export declare const StridedSlice = "StridedSlice";

export declare const stridedSlice: typeof stridedSlice_;

/**
 * Extracts a strided slice of a tensor.
 *
 * Roughly speaking, this op extracts a slice of size (end-begin)/stride from
 * the given input tensor (x). Starting at the location specified by begin the
 * slice continues by adding stride to the index until all dimensions are not
 * less than end. Note that a stride can be negative, which causes a reverse
 * slice.
 *
 * ```js
 * const t = tf.tensor3d([1, 1, 1 ,2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
 *    [3, 2, 3]);
 * t.stridedSlice([1, 0, 0], [2, 1, 3], [1, 1, 1]).print()  // [[[3, 3, 3]]]
 * t.stridedSlice([1, 0, 0], [2, 2, 3], [1, 1, 1]).print()  // [[[3, 3, 3],
 *                                                     // [4, 4, 4]]]
 * t.stridedSlice([1, -1, 0], [2, -3, 3], [1, -1, 1]).print() // [[[4, 4, 4],
 *                                                     // [3, 3, 3]]]
 * ```
 *
 * @param x The tensor to stride slice.
 * @param begin The coordinates to start the slice from.
 * @param end: The coordinates to end the slice at.
 * @param strides: The size of the slice.
 * @param beginMask: If the ith bit of beginMask is set, begin[i] is ignored
 *      and the fullest possible range in that dimension is used instead.
 * @param endMask: If the ith bit of endMask is set, end[i] is ignored
 *      and the fullest possible range in that dimension is used instead.
 * @param shrinkAxisMask: a bitmask where bit i implies that
 * the ith specification should shrink the dimensionality. begin and end must
 * imply a slice of size 1 in the dimension.
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
declare function stridedSlice_(x: Tensor | TensorLike, begin: number[], end: number[], strides?: number[], beginMask?: number, endMask?: number, ellipsisMask?: number, newAxisMask?: number, shrinkAxisMask?: number): Tensor;

export declare interface StridedSliceAttrs {
    begin: number[];
    end: number[];
    strides: number[];
    beginMask: number;
    endMask: number;
    ellipsisMask: number;
    newAxisMask: number;
    shrinkAxisMask: number;
}

declare function stridedSliceImpl<R extends Rank_2>(outShape: number[], xBuf: TensorBuffer_2<R>, strides: number[], begin: number[]): TensorBuffer_2<R>;

export declare type StridedSliceInputs = Pick<NamedTensorInfoMap, 'x'>;

declare function stridesForAxis(strides: number[], axis: number, ellipsisMask: number): number;

declare function stridesWithElidedDims(strides: number[], ellipsisInsertionIndex: number, numElidedAxes: number, inputShape: number[]): number[];

export declare const string: {
    stringNGrams: (data: TensorLike | Tensor1D, dataSplits: TensorLike | Tensor<Rank>, separator: string, nGramWidths: number[], leftPad: string, rightPad: string, padWidth: number, preserveShortSequences: boolean) => NamedTensorMap;
    stringSplit: (input: TensorLike | Tensor1D, delimiter: ScalarLike | Scalar, skipEmpty?: boolean) => NamedTensorMap;
    stringToHashBucketFast: (input: TensorLike | Tensor<Rank>, numBuckets: number) => Tensor<Rank>;
};

declare abstract class StringIterator extends LazyIterator<string> {
    /**
     * Splits a string stream on a given separator.
     *
     * It is assumed that the incoming chunk boundaries have no semantic meaning,
     * so conceptually the incoming stream is treated simply as the concatenation
     * of its elements.
     *
     * The outgoing stream provides chunks corresponding to the results of the
     * standard string split() operation (even if such a chunk spanned incoming
     * chunks).  The separators are not included.
     *
     * A typical usage is to split a text file (represented as a stream with
     * arbitrary chunk boundaries) into lines.
     *
     * @param upstream A readable stream of strings that can be treated as
     *   concatenated.
     * @param separator A character to split on.
     */
    split(separator: string): StringIterator;
}

export declare const StringNGrams = "StringNGrams";

export declare interface StringNGramsAttrs {
    separator: string;
    nGramWidths: number[];
    leftPad: string;
    rightPad: string;
    padWidth: number;
    preserveShortSequences: boolean;
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare function stringNGramsImpl(data: Uint8Array[], dataSplits: Int32Array, separator: string, nGramWidths: number[], leftPad: string, rightPad: string, padWidth: number, preserveShortSequences: boolean): [Uint8Array[], Int32Array];

export declare type StringNGramsInputs = Pick<NamedTensorInfoMap, 'data' | 'dataSplits'>;

export declare const StringSplit = "StringSplit";

export declare interface StringSplitAttrs {
    skipEmpty: boolean;
}

declare function stringSplitImpl(input: Uint8Array[], delimiter: Uint8Array, skipEmpty: boolean): [TypedArray_2, Uint8Array[], [number, number]];

export declare type StringSplitInputs = Pick<NamedTensorInfoMap, 'input' | 'delimiter'>;

export declare const StringToHashBucketFast = "StringToHashBucketFast";

export declare interface StringToHashBucketFastAttrs {
    numBuckets: number;
}

declare function stringToHashBucketFastImpl(input: Uint8Array[], numBuckets: number): TypedArray_2;

export declare type StringToHashBucketFastInputs = Pick<NamedTensorInfoMap, 'input'>;

export declare const Sub = "Sub";

export declare const sub: typeof sub_;

/**
 * Subtracts two `tf.Tensor`s element-wise, A - B. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([10, 20, 30, 40]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 *
 * a.sub(b).print();  // or tf.sub(a, b)
 * ```
 *
 * ```js
 * // Broadcast subtract a with b.
 * const a = tf.tensor1d([10, 20, 30, 40]);
 * const b = tf.scalar(5);
 *
 * a.sub(b).print();  // or tf.sub(a, b)
 * ```
 * @param a The first `tf.Tensor` to subtract from.
 * @param b The second `tf.Tensor` to be subtracted. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
declare function sub_<T extends Tensor>(a: Tensor | TensorLike, b: Tensor | TensorLike): T;

declare const subImpl: SimpleBinaryKernelImpl;

export declare type SubInputs = BinaryInputs;

export declare const Sum = "Sum";

export declare const sum: typeof sum_;

/**
 * Computes the sum of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If axes has no entries, all dimensions are reduced, and a
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.sum().print();  // or tf.sum(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.sum(axis).print();  // or tf.sum(x, axis)
 * ```
 *
 * @param x The input tensor to compute the sum over. If the dtype is `bool`
 *   it will be converted to `int32` and the output dtype will be `int32`.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
declare function sum_<T extends Tensor>(x: Tensor | TensorLike, axis?: number | number[], keepDims?: boolean): T;

declare function sum_2(arr: number[]): number;

export declare interface SumAttrs {
    axis: number | number[];
    keepDims: boolean;
}

export declare type SumInputs = Pick<NamedTensorInfoMap, 'x'>;

/** Returns the output type after summation. */
export declare function sumOutType(type: DataType): DataType;

declare function swap<T>(object: {
    [index: number]: T;
}, left: number, right: number): void;

/**
 * `tf.SymbolicTensor` is a placeholder for a Tensor without any concrete value.
 *
 * They are most often encountered when building a graph of `Layer`s for a
 * a `tf.LayersModel` and the input data's shape, but not values are known.
 *
 * @doc {heading: 'Models', 'subheading': 'Classes'}
 */
export declare class SymbolicTensor {
    readonly dtype: DataType_2;
    readonly shape: Shape;
    sourceLayer: Layer;
    readonly inputs: SymbolicTensor[];
    readonly callArgs: Kwargs;
    readonly outputTensorIndex?: number;
    readonly id: number;
    readonly name: string;
    readonly originalName?: string;
    /**
     * Rank/dimensionality of the tensor.
     */
    readonly rank: number;
    /**
     * Replacement for _keras_history.
     */
    nodeIndex: number;
    /**
     * Replacement for _keras_history.
     */
    tensorIndex: number;
    /**
     *
     * @param dtype
     * @param shape
     * @param sourceLayer The Layer that produced this symbolic tensor.
     * @param inputs The inputs passed to sourceLayer's __call__() method.
     * @param nodeIndex
     * @param tensorIndex
     * @param callArgs The keyword arguments passed to the __call__() method.
     * @param name
     * @param outputTensorIndex The index of this tensor in the list of outputs
     *   returned by apply().
     */
    constructor(dtype: DataType_2, shape: Shape, sourceLayer: Layer, inputs: SymbolicTensor[], callArgs: Kwargs, name?: string, outputTensorIndex?: number);
}

export declare const Tan = "Tan";

export declare const tan: typeof tan_;

/**
 * Computes tan of the input `tf.Tensor` element-wise, `tan(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, Math.PI / 2, Math.PI * 3 / 4]);
 *
 * x.tan().print();  // or tf.tan(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function tan_<T extends Tensor>(x: T | TensorLike): T;

export declare const Tanh = "Tanh";

export declare const tanh: typeof tanh_;

/**
 * Computes hyperbolic tangent of the input `tf.Tensor` element-wise: `tanh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, 70]);
 *
 * x.tanh().print();  // or tf.tanh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
declare function tanh_<T extends Tensor>(x: T | TensorLike): T;

declare function tanh_2(x: number): number;

export declare type TanhInputs = UnaryInputs;

export declare type TanInputs = UnaryInputs;

declare interface TapeNode {
    id: number;
    kernelName: string;
    outputs: Tensor[];
    inputs: NamedTensorMap;
    gradient?: (dys: Tensor[]) => NamedGradientMap;
    saved?: Tensor[];
}

export declare namespace Tensor { }

/**
 * A `tf.Tensor` object represents an immutable, multidimensional array of
 * numbers that has a shape and a data type.
 *
 * For performance reasons, functions that create tensors do not necessarily
 * perform a copy of the data passed to them (e.g. if the data is passed as a
 * `Float32Array`), and changes to the data will change the tensor. This is not
 * a feature and is not supported. To avoid this behavior, use the tensor before
 * changing the input data or create a copy with `copy = tf.add(yourTensor, 0)`.
 *
 * See `tf.tensor` for details on how to create a `tf.Tensor`.
 *
 * @doc {heading: 'Tensors', subheading: 'Classes'}
 */
export declare class Tensor<R extends Rank = Rank> {
    /** Unique id of this tensor. */
    readonly id: number;
    /**
     * Id of the bucket holding the data for this tensor. Multiple arrays can
     * point to the same bucket (e.g. when calling array.reshape()).
     */
    dataId: DataId_2;
    /** The shape of the tensor. */
    readonly shape: ShapeMap[R];
    /** Number of elements in the tensor. */
    readonly size: number;
    /** The data type for the array. */
    readonly dtype: DataType;
    /** The rank type for the array (see `Rank` enum). */
    readonly rankType: R;
    /** Whether this tensor has been globally kept. */
    kept: boolean;
    /** The id of the scope this tensor is being tracked in. */
    scopeId: number;
    /**
     * Number of elements to skip in each dimension when indexing. See
     * https://docs.scipy.org/doc/numpy/reference/generated/\
     * numpy.ndarray.strides.html
     */
    readonly strides: number[];
    constructor(shape: ShapeMap[R], dtype: DataType, dataId: DataId_2, id: number);
    get rank(): number;
    /**
     * Returns a promise of `tf.TensorBuffer` that holds the underlying data.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    buffer<D extends DataType = 'float32'>(): Promise<TensorBuffer<R, D>>;
    /**
     * Returns a `tf.TensorBuffer` that holds the underlying data.
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    bufferSync<D extends DataType = 'float32'>(): TensorBuffer<R, D>;
    /**
     * Returns the tensor data as a nested array. The transfer of data is done
     * asynchronously.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    array(): Promise<ArrayMap[R]>;
    /**
     * Returns the tensor data as a nested array. The transfer of data is done
     * synchronously.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    arraySync(): ArrayMap[R];
    /**
     * Asynchronously downloads the values from the `tf.Tensor`. Returns a
     * promise of `TypedArray` that resolves when the computation has finished.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    data<D extends DataType = NumericDataType>(): Promise<DataTypeMap[D]>;
    /**
     * Synchronously downloads the values from the `tf.Tensor`. This blocks the
     * UI thread until the values are ready, which can cause performance issues.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    dataSync<D extends DataType = NumericDataType>(): DataTypeMap[D];
    /** Returns the underlying bytes of the tensor's data. */
    bytes(): Promise<Uint8Array[] | Uint8Array>;
    /**
     * Disposes `tf.Tensor` from memory.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    dispose(): void;
    protected isDisposedInternal: boolean;
    get isDisposed(): boolean;
    throwIfDisposed(): void;
    /**
     * Prints the `tf.Tensor`. See `tf.print` for details.
     *
     * @param verbose Whether to print verbose information about the tensor,
     *    including dtype and size.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    print(verbose?: boolean): void;
    /**
     * Returns a copy of the tensor. See `tf.clone` for details.
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    clone<T extends Tensor>(this: T): T;
    /**
     * Returns a human-readable description of the tensor. Useful for logging.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    toString(verbose?: boolean): string;
    cast<T extends this>(dtype: DataType): T;
    variable(trainable?: boolean, name?: string, dtype?: DataType): Variable<R>;
}

/**
 * Creates a `tf.Tensor` with the provided values, shape and dtype.
 *
 * ```js
 * // Pass an array of values to create a vector.
 * tf.tensor([1, 2, 3, 4]).print();
 * ```
 *
 * ```js
 * // Pass a nested array of values to make a matrix or a higher
 * // dimensional tensor.
 * tf.tensor([[1, 2], [3, 4]]).print();
 * ```
 *
 * ```js
 * // Pass a flat array and specify a shape yourself.
 * tf.tensor([1, 2, 3, 4], [2, 2]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`. If the values are strings,
 *     they will be encoded as utf-8 and kept as `Uint8Array[]`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor<R extends Rank>(values: TensorLike, shape?: ShapeMap[R], dtype?: DataType): Tensor<R>;

/** @doclink Tensor */
export declare type Tensor1D = Tensor<Rank.R1>;

/**
 * Creates rank-1 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor1d` as it makes the code more readable.
 *
 * ```js
 * tf.tensor1d([1, 2, 3]).print();
 * ```
 *
 * @param values The values of the tensor. Can be array of numbers,
 *     or a `TypedArray`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor1d(values: TensorLike1D, dtype?: DataType): Tensor1D;

/** @doclink Tensor */
export declare type Tensor2D = Tensor<Rank.R2>;

/**
 * Creates rank-2 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor2d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor2d([[1, 2], [3, 4]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor2d([1, 2, 3, 4], [2, 2]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. If not provided, it is inferred from
 *     `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor2d(values: TensorLike2D, shape?: [number, number], dtype?: DataType): Tensor2D;

/** @doclink Tensor */
export declare type Tensor3D = Tensor<Rank.R3>;

/**
 * Creates rank-3 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor3d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor3d([[[1], [2]], [[3], [4]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. If not provided,  it is inferred from
 *     `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor3d(values: TensorLike3D, shape?: [number, number, number], dtype?: DataType): Tensor3D;

/** @doclink Tensor */
export declare type Tensor4D = Tensor<Rank.R4>;

/**
 * Creates rank-4 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor4d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor4d(values: TensorLike4D, shape?: [number, number, number, number], dtype?: DataType): Tensor4D;

/** @doclink Tensor */
export declare type Tensor5D = Tensor<Rank.R5>;

/**
 * Creates rank-5 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor5d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor5d([[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor5d(values: TensorLike5D, shape?: [number, number, number, number, number], dtype?: DataType): Tensor5D;

/** @doclink Tensor */
declare type Tensor6D = Tensor<Rank.R6>;

/**
 * Creates rank-6 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor6d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor6d([[[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function tensor6d(values: TensorLike6D, shape?: [number, number, number, number, number, number], dtype?: DataType): Tensor6D;

declare namespace tensor_util {
    export {
        makeTypesMatch,
        assertTypesMatch,
        isTensorInList,
        getTensorsInContainer
    }
}
export { tensor_util }

/**
 * A mutable object, similar to `tf.Tensor`, that allows users to set values
 * at locations before converting to an immutable `tf.Tensor`.
 *
 * See `tf.buffer` for creating a tensor buffer.
 *
 * @doc {heading: 'Tensors', subheading: 'Classes'}
 */
export declare class TensorBuffer<R extends Rank, D extends DataType = 'float32'> {
    dtype: D;
    size: number;
    shape: ShapeMap[R];
    strides: number[];
    values: DataTypeMap[D];
    constructor(shape: ShapeMap[R], dtype: D, values?: DataTypeMap[D]);
    /**
     * Sets a value in the buffer at a given location.
     *
     * @param value The value to set.
     * @param locs  The location indices.
     *
     * @doc {heading: 'Tensors', subheading: 'Creation'}
     */
    set(value: SingleValueMap[D], ...locs: number[]): void;
    /**
     * Returns the value in the buffer at the provided location.
     *
     * @param locs The location indices.
     *
     * @doc {heading: 'Tensors', subheading: 'Creation'}
     */
    get(...locs: number[]): SingleValueMap[D];
    locToIndex(locs: number[]): number;
    indexToLoc(index: number): number[];
    get rank(): number;
    /**
     * Creates an immutable `tf.Tensor` object from the buffer.
     *
     * @doc {heading: 'Tensors', subheading: 'Creation'}
     */
    toTensor(): Tensor<R>;
}

/**
 * @docalias void|number|string|TypedArray|Tensor|Tensor[]|{[key:
 * string]:Tensor|number|string}
 */
export declare type TensorContainer = void | Tensor | string | number | boolean | TensorContainerObject | TensorContainerArray | Float32Array | Int32Array | Uint8Array;

export declare interface TensorContainerArray extends Array<TensorContainer> {
}

export declare interface TensorContainerObject {
    [x: string]: TensorContainer;
}

declare interface TensorData<D extends DataType_2> {
    values?: backend_util_2.BackendValues;
    dtype: D;
    complexTensorInfos?: {
        real: TensorInfo_3;
        imag: TensorInfo_3;
    };
    refCount: number;
}

/** Holds metadata for a given tensor. */
export declare interface TensorInfo {
    dataId: DataId;
    shape: number[];
    dtype: DataType;
}

declare interface TensorInfo_2 {
    name: string;
    shape?: number[];
    dtype: DataType_2;
}

/** @docalias TypedArray|Array */
export declare type TensorLike = TypedArray | number | boolean | string | RecursiveArray<number | number[] | TypedArray> | RecursiveArray<boolean> | RecursiveArray<string> | Uint8Array[];

/** @docalias TypedArray|Array */
declare type TensorLike1D = TypedArray | number[] | boolean[] | string[] | Uint8Array[];

/** @docalias TypedArray|Array */
declare type TensorLike2D = TypedArray | number[] | number[][] | boolean[] | boolean[][] | string[] | string[][] | Uint8Array[] | Uint8Array[][];

/** @docalias TypedArray|Array */
declare type TensorLike3D = TypedArray | number[] | number[][][] | boolean[] | boolean[][][] | string[] | string[][][] | Uint8Array[] | Uint8Array[][][];

/** @docalias TypedArray|Array */
declare type TensorLike4D = TypedArray | number[] | number[][][][] | boolean[] | boolean[][][][] | string[] | string[][][][] | Uint8Array[] | Uint8Array[][][][];

/** @docalias TypedArray|Array */
declare type TensorLike5D = TypedArray | number[] | number[][][][][] | boolean[] | boolean[][][][][] | string[] | string[][][][][] | Uint8Array[] | Uint8Array[][][][][];

/** @docalias TypedArray|Array */
declare type TensorLike6D = TypedArray | number[] | number[][][][][][] | boolean[] | boolean[][][][][][] | string[] | string[][][][][][] | Uint8Array[] | Uint8Array[][][][][];

/**
 * A single Tensor or a non-nested collection of Tensors.
 *
 * An object of this type can always be reduced to `Tensor[]`.  A single
 * 'Tensor' becomes `[Tensor]`.  A `Tensor[]` is unchanged.  A `NamedTensorMap`
 * can be converted with the help of a list of names, providing the order in
 * which the Tensors should appear in the resulting array.
 */
declare type TensorOrArrayOrMap = Tensor_2 | Tensor_2[] | NamedTensorMap_2;

declare interface TensorStorage {
    read(dataId: DataId_2): Promise<BackendValues>;
    readSync(dataId: DataId_2): BackendValues;
    disposeData(dataId: DataId_2, force?: boolean): boolean;
    write(values: BackendValues, shape: number[], dtype: DataType): DataId_2;
    move(dataId: DataId_2, values: BackendValues, shape: number[], dtype: DataType, refCount: number): void;
    memory(): {
        unreliable: boolean;
    };
    /** Returns number of data ids currently in the storage. */
    numDataIds(): number;
    refCount(dataId: DataId_2): number;
}

declare interface TensorTracker {
    makeTensor(values: DataValues, shape: number[], dtype: DataType, backend?: Backend): Tensor;
    makeVariable(initialValue: Tensor, trainable?: boolean, name?: string, dtype?: DataType): Variable;
    incRef(a: Tensor, backend: Backend): void;
    disposeTensor(t: Tensor): void;
    disposeVariable(v: Variable): void;
    read(dataId: DataId_2): Promise<BackendValues>;
    readSync(dataId: DataId_2): BackendValues;
}

declare const TEST_EPSILON_FLOAT16 = 0.1;

declare namespace test_util {
    export {
        expectArraysClose,
        testEpsilon,
        expectPromiseToFail,
        expectArraysEqual,
        expectNumbersClose,
        expectValuesInRange,
        expectArrayBuffersEqual,
        encodeStrings,
        TEST_EPSILON_FLOAT16,
        DoneFn
    }
}
export { test_util }

declare function testEpsilon(): 0.001 | 0.1;

/**
 * Represents a potentially large collection of text lines.
 *
 * The results are not batched.
 */
declare class TextLineDataset extends Dataset<string> {
    protected readonly input: DataSource;
    /**
     * Create a `TextLineDataset`.
     *
     * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
     */
    constructor(input: DataSource);
    iterator(): Promise<LazyIterator<string>>;
}

declare interface TextureConfig {
    internalFormatFloat: number;
    textureFormatFloat: number;
    internalFormatPackedHalfFloat: number;
    internalFormatHalfFloat: number;
    internalFormatPackedFloat: number;
    downloadTextureFormat: number;
    downloadUnpackNumChannels: number;
    defaultNumChannels: number;
    textureTypeHalfFloat: number;
    textureTypeFloat: number;
}

declare interface TextureData {
    shape: number[];
    dtype: DataType_2;
    values?: backend_util_2.BackendValues;
    texture?: WebGLTexture;
    complexTensorInfos?: {
        real: TensorInfo_3;
        imag: TensorInfo_3;
    };
    /** [rows, columns] shape of the texture. */
    texShape?: [number, number];
    usage?: TextureUsage;
    isPacked?: boolean;
    refCount: number;
    slice?: {
        flatOffset: number;
        origDataId: DataId_4;
    };
}

declare class TextureManager {
    private gpgpu;
    private numUsedTextures;
    private numFreeTextures;
    private _numBytesAllocated;
    private _numBytesFree;
    private freeTextures;
    private logEnabled;
    private usedTextures;
    constructor(gpgpu: GPGPUContext);
    acquireTexture(shapeRC: [number, number], usage: TextureUsage, isPacked: boolean): WebGLTexture;
    releaseTexture(texture: WebGLTexture, shape: [number, number], logicalTexType: TextureUsage, isPacked: boolean): void;
    private log;
    get numBytesAllocated(): number;
    get numBytesFree(): number;
    getNumUsedTextures(): number;
    getNumFreeTextures(): number;
    dispose(): void;
}

declare enum TextureUsage {
    RENDER = 0,
    UPLOAD = 1,
    PIXELS = 2,
    DOWNLOAD = 3
}

declare class ThresholdedReLU extends Layer {
    /** @nocollapse */
    static className: string;
    readonly theta: number;
    readonly DEFAULT_THETA = 1;
    constructor(args?: ThresholdedReLULayerArgs);
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Thresholded Rectified Linear Unit.
 *
 * It follows:
 * `f(x) = x for x > theta`,
 * `f(x) = 0 otherwise`.
 *
 * Input shape:
 *   Arbitrary. Use the configuration `inputShape` when using this layer as the
 *   first layer in a model.
 *
 * Output shape:
 *   Same shape as the input.
 *
 * References:
 *   - [Zero-Bias Autoencoders and the Benefits of Co-Adapting
 * Features](http://arxiv.org/abs/1402.3337)
 *
 * @doc {
 *   heading: 'Layers',
 *   subheading: 'Advanced Activation',
 *   namespace: 'layers'
 * }
 */
declare function thresholdedReLU(args?: ThresholdedReLULayerArgs): ThresholdedReLU;

declare interface ThresholdedReLULayerArgs extends LayerArgs {
    /**
     * Float >= 0. Threshold location of activation.
     */
    theta?: number;
}

/**
 * Executes the provided function `fn` and after it is executed, cleans up all
 * intermediate tensors allocated by `fn` except those returned by `fn`.
 * `fn` must not return a Promise (async functions not allowed). The returned
 * result can be a complex object.
 *
 * Using this method helps avoid memory leaks. In general, wrap calls to
 * operations in `tf.tidy` for automatic memory cleanup.
 *
 * NOTE: Variables do *not* get cleaned up when inside a tidy(). If you want to
 * dispose variables, please use `tf.disposeVariables` or call dispose()
 * directly on variables.
 *
 * ```js
 * // y = 2 ^ 2 + 1
 * const y = tf.tidy(() => {
 *   // a, b, and one will be cleaned up when the tidy ends.
 *   const one = tf.scalar(1);
 *   const a = tf.scalar(2);
 *   const b = a.square();
 *
 *   console.log('numTensors (in tidy): ' + tf.memory().numTensors);
 *
 *   // The value returned inside the tidy function will return
 *   // through the tidy, in this case to the variable y.
 *   return b.add(one);
 * });
 *
 * console.log('numTensors (outside tidy): ' + tf.memory().numTensors);
 * y.print();
 * ```
 *
 * @param nameOrFn The name of the closure, or the function to execute.
 *     If a name is provided, the 2nd argument should be the function.
 *     If debug mode is on, the timing and the memory usage of the function
 *     will be tracked and displayed on the console using the provided name.
 * @param fn The function to execute.
 *
 * @doc {heading: 'Performance', subheading: 'Memory'}
 */
export declare function tidy<T extends TensorContainer>(nameOrFn: string | ScopeFn<T>, fn?: ScopeFn<T>): T;

export declare const Tile = "Tile";

export declare const tile: typeof tile_;

/**
 * Construct a tensor by repeating it the number of times given by reps.
 *
 * This operation creates a new tensor by replicating `input` `reps`
 * times. The output tensor's i'th dimension has `input.shape[i] *
 * reps[i]` elements, and the values of `input` are replicated
 * `reps[i]` times along the i'th dimension. For example, tiling
 * `[a, b, c, d]` by `[2]` produces `[a, b, c, d, a, b, c, d]`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 *
 * a.tile([2]).print();    // or a.tile([2])
 * ```
 *
 * ```js
 * const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * a.tile([1, 2]).print();  // or a.tile([1, 2])
 * ```
 * @param x The tensor to tile.
 * @param reps Determines the number of replications per dimension.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function tile_<T extends Tensor>(x: T | TensorLike, reps: number[]): T;

export declare interface TileAttrs {
    reps: number[];
}

/**
 * An implementation of the tile kernel shared between webgl and cpu for string
 * tensors only.
 */
declare function tileImpl<R extends Rank_2>(xBuf: TensorBuffer_2<R, DataType_2>, reps: number[]): TensorBuffer_2<R, DataType_2>;

export declare type TileInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Executes `f()` and returns a promise that resolves with timing
 * information.
 *
 * The result is an object with the following properties:
 *
 * - `wallMs`: Wall execution time.
 * - `kernelMs`: Kernel execution time, ignoring data transfer. If using the
 * WebGL backend and the query timer extension is not available, this will
 * return an error object.
 * - On `WebGL` The following additional properties exist:
 *   - `uploadWaitMs`: CPU blocking time on texture uploads.
 *   - `downloadWaitMs`: CPU blocking time on texture downloads (readPixels).
 *
 * ```js
 * const x = tf.randomNormal([20, 20]);
 * const time = await tf.time(() => x.matMul(x));
 *
 * console.log(`kernelMs: ${time.kernelMs}, wallTimeMs: ${time.wallMs}`);
 * ```
 *
 * @param f The function to execute and time.
 *
 * @doc {heading: 'Performance', subheading: 'Timing'}
 */
export declare function time(f: () => void): Promise<TimingInfo>;

declare class TimeDistributed extends Wrapper {
    /** @nocollapse */
    static className: string;
    constructor(args: WrapperLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
}

/**
 * This wrapper applies a layer to every temporal slice of an input.
 *
 * The input should be at least 3D,  and the dimension of the index `1` will be
 * considered to be the temporal dimension.
 *
 * Consider a batch of 32 samples, where each sample is a sequence of 10 vectors
 * of 16 dimensions. The batch input shape of the layer is then `[32,  10,
 * 16]`, and the `inputShape`, not including the sample dimension, is
 * `[10, 16]`.
 *
 * You can then use `TimeDistributed` to apply a `Dense` layer to each of the 10
 * timesteps, independently:
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.timeDistributed({
 *   layer: tf.layers.dense({units: 8}),
 *   inputShape: [10, 16],
 * }));
 *
 * // Now model.outputShape = [null, 10, 8].
 * // The output will then have shape `[32, 10, 8]`.
 *
 * // In subsequent layers, there is no need for `inputShape`:
 * model.add(tf.layers.timeDistributed({layer: tf.layers.dense({units: 32})}));
 * console.log(JSON.stringify(model.outputs[0].shape));
 * // Now model.outputShape = [null, 10, 32].
 * ```
 *
 * The output will then have shape `[32, 10, 32]`.
 *
 * `TimeDistributed` can be used with arbitrary layers, not just `Dense`, for
 * instance a `Conv2D` layer.
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.timeDistributed({
 *   layer: tf.layers.conv2d({filters: 64, kernelSize: [3, 3]}),
 *   inputShape: [10, 299, 299, 3],
 * }));
 * console.log(JSON.stringify(model.outputs[0].shape));
 * ```
 *
 * @doc {heading: 'Layers', subheading: 'Wrapper', namespace: 'layers'}
 */
declare function timeDistributed(args: WrapperLayerArgs): TimeDistributed;

export declare interface TimingInfo extends BackendTimingInfo {
    wallMs: number;
}

declare function toNestedArray(shape: number[], a: TypedArray, isComplex?: boolean): number | any[];

/**
 * Draws a `tf.Tensor` of pixel values to a byte array or optionally a
 * canvas.
 *
 * When the dtype of the input is 'float32', we assume values in the range
 * [0-1]. Otherwise, when input is 'int32', we assume values in the range
 * [0-255].
 *
 * Returns a promise that resolves when the canvas has been drawn to.
 *
 * @param img A rank-2 tensor with shape `[height, width]`, or a rank-3 tensor
 * of shape `[height, width, numChannels]`. If rank-2, draws grayscale. If
 * rank-3, must have depth of 1, 3 or 4. When depth of 1, draws
 * grayscale. When depth of 3, we draw with the first three components of
 * the depth dimension corresponding to r, g, b and alpha = 1. When depth of
 * 4, all four components of the depth dimension correspond to r, g, b, a.
 * @param canvas The canvas to draw to.
 *
 * @doc {heading: 'Browser', namespace: 'browser'}
 */
declare function toPixels(img: Tensor2D | Tensor3D | TensorLike, canvas?: HTMLCanvasElement): Promise<Uint8ClampedArray>;

export declare const TopK = "TopK";

export declare const topk: typeof topk_;

/**
 * Finds the values and indices of the `k` largest entries along the last
 * dimension.
 *
 * If the input is a vector (rank=1), finds the k largest entries in the vector
 * and outputs their values and indices as vectors. Thus values[j] is the j-th
 * largest entry in input, and its index is indices[j].
 * For higher rank inputs, computes the top k entries along the last dimension.
 *
 * If two elements are equal, the lower-index element appears first.
 *
 * ```js
 * const a = tf.tensor2d([[1, 5], [4, 3]]);
 * const {values, indices} = tf.topk(a);
 * values.print();
 * indices.print();
 * ```
 * @param x 1-D or higher `tf.Tensor` with last dimension being at least `k`.
 * @param k Number of top elements to look for along the last dimension.
 * @param sorted If true, the resulting `k` elements will be sorted by the
 *     values in descending order.
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
declare function topk_<T extends Tensor>(x: T | TensorLike, k?: number, sorted?: boolean): {
    values: T;
    indices: T;
};

export declare interface TopKAttrs {
    k: number;
    sorted: boolean;
}

declare function topKImpl<T extends Tensor_2, R extends Rank_2>(x: TypedArray_2, xShape: number[], xDtype: NumericDataType_2, k: number, sorted: boolean): [
TensorBuffer_2<R, NumericDataType_2>,
TensorBuffer_2<R, 'int32'>
];

export declare type TopKInputs = Pick<NamedTensorInfoMap, 'x'>;

declare function toTypedArray(a: TensorLike, dtype: DataType): TypedArray;

export declare const train: {
    sgd: typeof OptimizerConstructors.sgd;
    momentum: typeof OptimizerConstructors.momentum;
    adadelta: typeof OptimizerConstructors.adadelta;
    adagrad: typeof OptimizerConstructors.adagrad;
    rmsprop: typeof OptimizerConstructors.rmsprop;
    adamax: typeof OptimizerConstructors.adamax;
    adam: typeof OptimizerConstructors.adam;
};

/** Model training configuration. */
declare interface TrainingConfig {
    /** Optimizer used for the model training. */
    optimizer_config: {};
    /** Loss function(s) for the model's output(s). */
    loss: string | string[] | {
        [key: string]: string;
    };
    /** Metric function(s) for the model's output(s). */
    metrics?: string[] | {
        [key: string]: string;
    };
    weighted_metrics?: string[];
    sample_weight_mode?: string;
    loss_weights?: number[] | {
        [key: string]: number;
    };
}

/**
 * Configuration of the Keras trainer. This includes the configuration to the
 * optimizer, the loss, any metrics to be calculated, etc.
 */
declare interface TrainingConfig_2 extends PyJsonDict {
    optimizer_config: OptimizerSerialization;
    loss: LossIdentifier | LossIdentifier[] | {
        [key: string]: LossIdentifier;
    };
    metrics?: MetricsIdentifier[] | {
        [key: string]: MetricsIdentifier;
    };
    weighted_metrics?: MetricsIdentifier[];
    sample_weight_mode?: SampleWeightMode;
    loss_weights?: LossWeights;
}

export declare const Transform = "Transform";

export declare interface TransformAttrs {
    interpolation: 'nearest' | 'bilinear';
    fillMode: 'constant' | 'reflect' | 'wrap' | 'nearest';
    fillValue: number;
    outputShape?: [number, number];
}

export declare type TransformInputs = Pick<NamedTensorInfoMap, 'image' | 'transforms'>;

export declare const Transpose = "Transpose";

export declare const transpose: typeof transpose_;

/**
 * Transposes the `tf.Tensor`. Permutes the dimensions according to `perm`.
 *
 * The returned `tf.Tensor`'s dimension `i` will correspond to the input
 * dimension `perm[i]`. If `perm` is not given, it is set to `[n-1...0]`,
 * where `n` is the rank of the input `tf.Tensor`. Hence by default, this
 * operation performs a regular matrix transpose on 2-D input `tf.Tensor`s.
 *
 * ```js
 * const a = tf.tensor2d([1, 2, 3, 4, 5, 6], [2, 3]);
 *
 * a.transpose().print();  // or tf.transpose(a)
 * ```
 *
 * @param x The tensor to transpose.
 * @param perm The permutation of the dimensions of a.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
declare function transpose_<T extends Tensor>(x: T | TensorLike, perm?: number[]): T;

export declare interface TransposeAttrs {
    perm: number[];
}

declare function transposeImpl(xVals: TypedArray_2, xShape: number[], dtype: DataType_2, perm: number[], newShape: number[]): TypedArray_2;

export declare type TransposeInputs = Pick<NamedTensorInfoMap, 'x'>;

export declare const truncatedNormal: typeof truncatedNormal_;

/**
 * Creates a `tf.Tensor` with values sampled from a truncated normal
 * distribution.
 *
 * ```js
 * tf.truncatedNormal([2, 2]).print();
 * ```
 *
 * The generated values follow a normal distribution with specified mean and
 * standard deviation, except that values whose magnitude is more than 2
 * standard deviations from the mean are dropped and re-picked.
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param mean The mean of the normal distribution.
 * @param stdDev The standard deviation of the normal distribution.
 * @param dtype The data type of the output tensor.
 * @param seed The seed for the random number generator.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function truncatedNormal_<R extends Rank>(shape: ShapeMap[R], mean?: number, stdDev?: number, dtype?: 'float32' | 'int32', seed?: number): Tensor<R>;

/**
 * Initializer that generates random values initialized to a truncated normal.
 * distribution.
 *
 * These values are similar to values from a `RandomNormal` except that values
 * more than two standard deviations from the mean are discarded and re-drawn.
 * This is the recommended initializer for neural network weights and filters.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function truncatedNormal_2(args: TruncatedNormalArgs): Initializer;

declare interface TruncatedNormalArgs {
    /** Mean of the random values to generate. */
    mean?: number;
    /** Standard deviation of the random values to generate. */
    stddev?: number;
    /** Used to seed the random generator. */
    seed?: number;
}

declare function tupleValuesAreOne(param: number | number[]): boolean;

export declare type TypedArray = Float32Array | Int32Array | Uint8Array;

export declare type UnaryInputs = Pick<NamedTensorInfoMap, 'x'>;

declare function unbindColorTextureFromFramebuffer(gl: WebGLRenderingContext, framebuffer: WebGLFramebuffer): void;

declare function unbindTextureUnit(gl: WebGLRenderingContext, textureUnit: number): void;

declare type UniformType = 'float' | 'vec2' | 'vec3' | 'vec4' | 'int' | 'ivec2' | 'ivec3' | 'ivec4';

export declare const Unique = "Unique";

export declare const unique: typeof unique_;

/**
 * Finds unique elements along an axis of a tensor.
 *
 * It returns a tensor `values` containing all of the unique elements along the
 * `axis` of the given tensor `x` in the same order that they occur along the
 * `axis` in `x`; `x` does not need to be sorted. It also returns a tensor
 * `indices` the same size as the number of the elements in `x` along the `axis`
 * dimension. It contains the index in the unique output `values`.
 *
 * ```js
 * // A 1-D tensor
 * const a = tf.tensor1d([1, 1, 2, 4, 4, 4, 7, 8, 8]);
 * const {values, indices} = tf.unique(a);
 * values.print();   // [1, 2, 4, 7, 8,]
 * indices.print();  // [0, 0, 1, 2, 2, 2, 3, 4, 4]
 * ```
 *
 * ```js
 * // A 2-D tensor with axis=0
 * //
 * // 'a' is: [[1, 0, 0],
 * //          [1, 0, 0],
 * //          [2, 0, 0]]
 * const a = tf.tensor2d([[1, 0, 0], [1, 0, 0], [2, 0, 0]]);
 * const {values, indices} = tf.unique(a, 0)
 * values.print();   // [[1, 0, 0],
 *                   //  [2, 0, 0]]
 * indices.print();  // [0, 0, 1]
 * ```
 *
 * ```js
 * // A 2-D tensor with axis=1
 * //
 * // 'a' is: [[1, 0, 0],
 * //          [1, 0, 0],
 * //          [2, 0, 0]]
 * const a = tf.tensor2d([[1, 0, 0], [1, 0, 0], [2, 0, 0]]);
 * const {values, indices} = tf.unique(a, 1)
 * values.print();   // [[1, 0],
 *                   //  [1, 0],
 *                   //  [2, 0]]
 * indices.print();  // [0, 1, 1]
 * ```
 * @param x A tensor (int32, string, bool).
 * @param axis The axis of the tensor to find the unique elements.
 * @returns [uniqueElements, indices] (see above for details)
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
declare function unique_<T extends Tensor>(x: T | TensorLike, axis?: number): {
    values: T;
    indices: Tensor1D;
};

export declare interface UniqueAttrs {
    axis: number;
}

declare function uniqueImpl(values: BackendValues_2, axis: number, shape: number[], dtype: DataType_2): {
    outputValues: BackendValues_2;
    outputShape: number[];
    indices: BackendValues_2;
};

export declare type UniqueInputs = Pick<NamedTensorInfoMap, 'x'>;

/**
 * Constrains the weights incident to each hidden unit to have unit norm.
 *
 * @doc {heading: 'Constraints', namespace: 'constraints'}
 */
declare function unitNorm(args: UnitNormArgs): Constraint;

declare interface UnitNormArgs {
    /**
     * Axis along which to calculate norms.
     *
     * For instance, in a `Dense` layer the weight matrix
     * has shape `[inputDim, outputDim]`,
     * set `axis` to `0` to constrain each weight vector
     * of length `[inputDim,]`.
     * In a `Conv2D` layer with `dataFormat="channels_last"`,
     * the weight tensor has shape
     * [rows, cols, inputDepth, outputDepth]`,
     * set `axis` to `[0, 1, 2]`
     * to constrain the weights of each filter tensor of size
     * `[rows, cols, inputDepth]`.
     */
    axis?: number;
}

export declare const Unpack = "Unpack";

export declare interface UnpackAttrs {
    axis: number;
}

export declare type UnpackInputs = Pick<NamedTensorInfoMap, 'value'>;

/** Removes the registered gradient from the global registry. */
export declare function unregisterGradient(kernelName: string): void;

/**
 * Removes the kernel function from the registry.
 *
 * @param kernelName The official name of the kernel.
 * @param backendName The official name of the backend.
 *
 */
export declare function unregisterKernel(kernelName: string, backendName: string): void;

/**
 * Logs in which values can be either numbers or Tensors (Scalars).
 *
 * Used internally.
 */
declare type UnresolvedLogs = {
    [key: string]: number | Scalar_2;
};

export declare const UnsortedSegmentSum = "UnsortedSegmentSum";

export declare const unsortedSegmentSum: typeof unsortedSegmentSum_;

/**
 * Computes the sum along segments of a `tf.Tensor`.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * const segmentIds = tf.tensor1d([1, 2, 0, 1], 'int32');
 * const numSegments = 3;
 *
 * x.unsortedSegmentSum(segmentIds, numSegments).print()
 * //or tf.unsortedSegmentSum(x, segmentIds, numSegments)
 * ```
 * @param x The `tf.Tensor` that will be summed along its segments.
 * @param segmentIds A `tf.Tensor1D` whose rank is equal to the rank of `x`'s
 * dimension along the `axis`.  Maps each element of `x` to a segment.
 * @param numSegments The number of distinct `segmentIds`.
 *
 * @doc {heading: 'Operations', subheading: 'Segment'}
 */
declare function unsortedSegmentSum_<T extends Tensor>(x: T | TensorLike, segmentIds: Tensor1D | TensorLike, numSegments: number): T;

export declare interface UnsortedSegmentSumAttrs {
    numSegments: number;
}

export declare type UnsortedSegmentSumInputs = Pick<NamedTensorInfoMap, 'x' | 'segmentIds'>;

export declare const unstack: typeof unstack_;

/**
 * Unstacks a `tf.Tensor` of rank-`R` into a list of rank-`(R-1)` `tf.Tensor`s.
 *
 * ```js
 * const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * tf.unstack(a).forEach(tensor => tensor.print());
 * ```
 *
 * @param x A tensor object.
 * @param axis The axis to unstack along. Defaults to 0 (the first dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
declare function unstack_(x: Tensor | TensorLike, axis?: number): Tensor[];

export declare function upcastType(typeA: DataType, typeB: DataType): DataType;

declare function uploadDenseMatrixToTexture(gl: WebGLRenderingContext, texture: WebGLTexture, width: number, height: number, data: TypedArray_2, textureConfig: TextureConfig): void;

declare function uploadPixelDataToTexture(gl: WebGLRenderingContext, texture: WebGLTexture, pixels: PixelData_2 | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap): void;

declare class UpSampling2D extends Layer {
    /** @nocollapse */
    static className: string;
    protected readonly DEFAULT_SIZE: number[];
    protected readonly size: number[];
    protected readonly dataFormat: DataFormat;
    protected readonly interpolation: InterpolationFormat;
    constructor(args: UpSampling2DLayerArgs);
    computeOutputShape(inputShape: Shape): Shape;
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Upsampling layer for 2D inputs.
 *
 * Repeats the rows and columns of the data
 * by size[0] and size[1] respectively.
 *
 *
 * Input shape:
 *    4D tensor with shape:
 *     - If `dataFormat` is `"channelsLast"`:
 *         `[batch, rows, cols, channels]`
 *     - If `dataFormat` is `"channelsFirst"`:
 *        `[batch, channels, rows, cols]`
 *
 * Output shape:
 *     4D tensor with shape:
 *     - If `dataFormat` is `"channelsLast"`:
 *        `[batch, upsampledRows, upsampledCols, channels]`
 *     - If `dataFormat` is `"channelsFirst"`:
 *         `[batch, channels, upsampledRows, upsampledCols]`
 *
 *
 * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
 */
declare function upSampling2d(args: UpSampling2DLayerArgs): UpSampling2D;

declare interface UpSampling2DLayerArgs extends LayerArgs {
    /**
     * The upsampling factors for rows and columns.
     *
     * Defaults to `[2, 2]`.
     */
    size?: number[];
    /**
     * Format of the data, which determines the ordering of the dimensions in
     * the inputs.
     *
     * `"channelsLast"` corresponds to inputs with shape
     *   `[batch, ..., channels]`
     *
     *  `"channelsFirst"` corresponds to inputs with shape `[batch, channels,
     * ...]`.
     *
     * Defaults to `"channelsLast"`.
     */
    dataFormat?: DataFormat;
    /**
     * The interpolation mechanism, one of `"nearest"` or `"bilinear"`, default
     * to `"nearest"`.
     */
    interpolation?: InterpolationFormat;
}

declare class URLDataSource extends DataSource {
    protected readonly url: RequestInfo;
    protected readonly fileOptions: FileChunkIteratorOptions;
    /**
     * Create a `URLDataSource`.
     *
     * @param url A source URL string, or a `Request` object.
     * @param options Options passed to the underlying `FileChunkIterator`s,
     *   such as {chunksize: 1024}.
     */
    constructor(url: RequestInfo, fileOptions?: FileChunkIteratorOptions);
    iterator(): Promise<ByteChunkIterator>;
}

declare namespace util {
    export {
        createScalarValue,
        toTypedArray,
        now,
        fetch_2 as fetch,
        encodeString,
        decodeString,
        shuffle,
        shuffleCombo,
        clamp,
        nearestLargerEven,
        swap,
        sum_2 as sum,
        randUniform,
        distSquared,
        assert,
        assertShapesMatch,
        assertNonNull,
        flatten,
        sizeFromShape,
        isScalarShape,
        arraysEqual,
        isInt,
        tanh_2 as tanh,
        sizeToSquarishShape,
        createShuffledIndices,
        rightPad,
        repeatedTry,
        inferFromImplicitShape,
        parseAxisParam,
        squeezeShape,
        getTypedArrayFromDType,
        getArrayFromDType,
        checkConversionForErrors,
        isValidDtype,
        hasEncodingLoss,
        isTypedArray,
        bytesPerElement,
        bytesFromStringArray,
        isString,
        isBoolean,
        isNumber,
        inferDtype,
        isFunction,
        nearestDivisor,
        computeStrides,
        toNestedArray,
        makeOnesTypedArray,
        makeZerosTypedArray,
        makeZerosNestedTypedArray,
        assertNonNegativeIntegerDimensions,
        locToIndex,
        indexToLoc,
        isPromise,
        hexToLong,
        fingerPrint64
    }
}
export { util }

declare function validateFramebuffer(gl: WebGLRenderingContext): void;

/**
 * Validate scatter nd inputs.
 *
 * @param update The tensor contains the update values.
 * @param indices The tensor contains the indices for the update values.
 * @param shape The shape of the output tensor.
 */
declare function validateInput(updates: Tensor, indices: Tensor, shape: number[]): void;

declare function validateProgram(gl: WebGLRenderingContext, program: WebGLProgram): void;

declare function validateTextureSize(width: number, height: number): void;

/**
 * Check whether updates.shape = indices.shape[:batchDim] +
 * shape[sliceDim:]
 *
 * @param x The input tensor.
 */
declare function validateUpdateShape(shape: number[], indices: Tensor, updates: Tensor): void;

/**
 * Like `tf.grad`, but also returns the value of `f()`. Useful when `f()`
 * returns a metric you want to show.
 *
 * The result is a rich object with the following properties:
 * - grad: The gradient of `f(x)` w.r.t `x` (result of `tf.grad`).
 * - value: The value returned by `f(x)`.
 *
 * ```js
 * // f(x) = x ^ 2
 * const f = x => x.square();
 * // f'(x) = 2x
 * const g = tf.valueAndGrad(f);
 *
 * const x = tf.tensor1d([2, 3]);
 * const {value, grad} = g(x);
 *
 * console.log('value');
 * value.print();
 * console.log('grad');
 * grad.print();
 * ```
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
export declare function valueAndGrad<I extends Tensor, O extends Tensor>(f: (x: I) => O): (x: I, dy?: O) => {
    value: O;
    grad: I;
};

/**
 * Like `tf.grads`, but returns also the value of `f()`. Useful when `f()`
 * returns a metric you want to show.
 *
 * The result is a rich object with the following properties:
 * - grads: The gradients of `f()` w.r.t each input (result of `tf.grads`).
 * - value: The value returned by `f(x)`.
 *
 * ```js
 * // f(a, b) = a * b
 * const f = (a, b) => a.mul(b);
 * // df/da = b, df/db = a
 * const g = tf.valueAndGrads(f);
 *
 * const a = tf.tensor1d([2, 3]);
 * const b = tf.tensor1d([-2, -3]);
 * const {value, grads} = g([a, b]);
 *
 * const [da, db] = grads;
 *
 * console.log('value');
 * value.print();
 *
 * console.log('da');
 * da.print();
 * console.log('db');
 * db.print();
 * ```
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
export declare function valueAndGrads<O extends Tensor>(f: (...args: Tensor[]) => O): (args: Tensor[], dy?: O) => {
    grads: Tensor[];
    value: O;
};

declare type ValueType = string | string[] | number | number[] | number[][] | boolean | boolean[] | Tensor_2 | Tensor_2[];

/**
 * A mutable `tf.Tensor`, useful for persisting state, e.g. for training.
 *
 * @doc {heading: 'Tensors', subheading: 'Classes'}
 */
export declare class Variable<R extends Rank = Rank> extends Tensor<R> {
    trainable: boolean;
    name: string;
    constructor(initialValue: Tensor<R>, trainable: boolean, name: string, tensorId: number);
    /**
     * Assign a new `tf.Tensor` to this variable. The new `tf.Tensor` must have
     * the same shape and dtype as the old `tf.Tensor`.
     *
     * @param newValue New tensor to be assigned to this variable.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */
    assign(newValue: Tensor<R>): void;
    dispose(): void;
}

/**
 * Creates a new variable with the provided initial value.
 * ```js
 * const x = tf.variable(tf.tensor([1, 2, 3]));
 * x.assign(tf.tensor([4, 5, 6]));
 *
 * x.print();
 * ```
 *
 * @param initialValue Initial value for the tensor.
 * @param trainable If true, optimizers are allowed to update it.
 * @param name Name of the variable. Defaults to a unique id.
 * @param dtype If set, initialValue will be converted to the given type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function variable<R extends Rank>(initialValue: Tensor<R>, trainable?: boolean, name?: string, dtype?: DataType): Variable<R>;

/**
 * Computes and returns the gradient of f(x) with respect to the list of
 * trainable variables provided by `varList`. If no list is provided, it
 * defaults to all trainable variables.
 *
 * ```js
 * const a = tf.variable(tf.tensor1d([3, 4]));
 * const b = tf.variable(tf.tensor1d([5, 6]));
 * const x = tf.tensor1d([1, 2]);
 *
 * // f(a, b) = a * x ^ 2 + b * x
 * const f = () => a.mul(x.square()).add(b.mul(x)).sum();
 * // df/da = x ^ 2, df/db = x
 * const {value, grads} = tf.variableGrads(f);
 *
 * Object.keys(grads).forEach(varName => grads[varName].print());
 * ```
 *
 * @param f The function to execute. f() should return a scalar.
 * @param varList The list of variables to compute the gradients with respect
 *     to. Defaults to all trainable variables.
 * @returns An object with the following keys and values:
 *   - `value`: The value of the function `f`.
 *   - `grads`: A map from the names of the variables to the gradients.
 *     If the `varList` argument is provided explicitly and contains a subset of
 *     non-trainable variables, this map in the return value will contain keys
 *     that map the names of the non-trainable variables to `null`.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
export declare function variableGrads(f: () => Scalar, varList?: Variable[]): {
    value: Scalar;
    grads: NamedTensorMap;
};

/**
 * Initializer capable of adapting its scale to the shape of weights.
 * With distribution=NORMAL, samples are drawn from a truncated normal
 * distribution centered on zero, with `stddev = sqrt(scale / n)` where n is:
 *   - number of input units in the weight tensor, if mode = FAN_IN.
 *   - number of output units, if mode = FAN_OUT.
 *   - average of the numbers of input and output units, if mode = FAN_AVG.
 * With distribution=UNIFORM,
 * samples are drawn from a uniform distribution
 * within [-limit, limit], with `limit = sqrt(3 * scale / n)`.
 *
 * @doc {heading: 'Initializers',namespace: 'initializers'}
 */
declare function varianceScaling(config: VarianceScalingArgs): Initializer;

declare interface VarianceScalingArgs {
    /** Scaling factor (positive float). */
    scale?: number;
    /** Fanning mode for inputs and outputs. */
    mode?: FanMode;
    /** Probabilistic distribution of the values. */
    distribution?: Distribution;
    /** Random number generator seed. */
    seed?: number;
}

export declare const version: {
    'tfjs-core': string;
    'tfjs-backend-cpu': string;
    'tfjs-backend-webgl': string;
    'tfjs-data': string;
    'tfjs-layers': string;
    'tfjs-converter': string;
    tfjs: string;
};

/** @license See the LICENSE file. */
declare const version_2 = "0.0.0";

/** @license See the LICENSE file. */
export declare const version_converter = "0.0.0";

/** @license See the LICENSE file. */
export declare const version_core = "0.0.0";

/** @license See the LICENSE file. */
export declare const version_cpu = "0.0.0";

/** @license See the LICENSE file. */
export declare const version_layers = "0.0.0";

/** @license See the LICENSE file. */
export declare const version_webgl = "0.0.0";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare function warn(...msg: Array<{}>): void;

/**
 * Create an iterator that generate `Tensor`s from webcam video stream. This API
 * only works in Browser environment when the device has webcam.
 *
 * Note: this code snippet only works when the device has a webcam. It will
 * request permission to open the webcam when running.
 * ```js
 * const videoElement = document.createElement('video');
 * videoElement.width = 100;
 * videoElement.height = 100;
 * const cam = await tf.data.webcam(videoElement);
 * const img = await cam.capture();
 * img.print();
 * cam.stop();
 * ```
 *
 * @param webcamVideoElement A `HTMLVideoElement` used to play video from
 *     webcam. If this element is not provided, a hidden `HTMLVideoElement` will
 *     be created. In that case, `resizeWidth` and `resizeHeight` must be
 *     provided to set the generated tensor shape.
 * @param webcamConfig A `WebcamConfig` object that contains configurations of
 *     reading and manipulating data from webcam video stream.
 *
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   ignoreCI: true
 *  }
 */
declare function webcam(webcamVideoElement?: HTMLVideoElement, webcamConfig?: WebcamConfig): Promise<WebcamIterator>;

/**
 * Interface configuring data from webcam video stream.
 */
declare interface WebcamConfig {
    /**
     * A string specifying which camera to use on device. If the value is
     * 'user', it will use front camera. If the value is 'environment', it will
     * use rear camera.
     */
    facingMode?: 'user' | 'environment';
    /**
     * A string used to request a specific camera. The deviceId can be obtained by
     * calling `mediaDevices.enumerateDevices()`.
     */
    deviceId?: string;
    /**
     * Specifies the width of the output tensor. The actual width of the
     * HTMLVideoElement (if provided) can be different and the final image will be
     * resized to match resizeWidth.
     */
    resizeWidth?: number;
    /**
     * Specifies the height of the output tensor. The actual height of the
     * HTMLVideoElement (if provided) can be different and the final image will be
     * resized to match resizeHeight.
     */
    resizeHeight?: number;
    /**
     * A boolean value that indicates whether to crop the video frame from center.
     * If true, `resizeWidth` and `resizeHeight` must be specified; then an image
     * of size `[resizeWidth, resizeHeight]` is taken from the center of the frame
     * without scaling. If false, the entire image is returned (perhaps scaled to
     * fit in `[resizeWidth, resizeHeight]`, if those are provided).
     */
    centerCrop?: boolean;
}

/**
 * Provide a stream of image tensors from webcam video stream. Only works in
 * browser environment.
 */
declare class WebcamIterator extends LazyIterator<Tensor3D_2> {
    protected readonly webcamVideoElement: HTMLVideoElement;
    protected readonly webcamConfig: WebcamConfig;
    private isClosed;
    private stream;
    private resize;
    private cropSize;
    private cropBox;
    private cropBoxInd;
    private constructor();
    summary(): string;
    static create(webcamVideoElement?: HTMLVideoElement, webcamConfig?: WebcamConfig): Promise<WebcamIterator>;
    start(): Promise<void>;
    next(): Promise<IteratorResult<Tensor3D_2>>;
    private needToResize;
    cropAndResizeFrame(img: Tensor3D_2): Tensor3D_2;
    capture(): Promise<Tensor3D_2>;
    stop(): void;
    toArray(): Promise<Tensor3D_2[]>;
}

export declare const webgl: {
    forceHalfFloat: typeof forceHalfFloat;
};

declare interface WebGL1DisjointQueryTimerExtension {
    TIME_ELAPSED_EXT: number;
    QUERY_RESULT_AVAILABLE_EXT: number;
    GPU_DISJOINT_EXT: number;
    QUERY_RESULT_EXT: number;
    createQueryEXT: () => {};
    beginQueryEXT: (ext: number, query: WebGLQuery) => void;
    endQueryEXT: (ext: number) => void;
    deleteQueryEXT: (query: WebGLQuery) => void;
    isQueryEXT: (query: WebGLQuery) => boolean;
    getQueryObjectEXT: (query: WebGLQuery, queryResultAvailableExt: number) => number;
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
declare interface WebGL2DisjointQueryTimerExtension {
    TIME_ELAPSED_EXT: number;
    GPU_DISJOINT_EXT: number;
}

declare namespace webgl_util {
    export {
        callAndCheck,
        canBeRepresented,
        getWebGLErrorMessage,
        getExtensionOrThrow,
        createVertexShader_2 as createVertexShader,
        createFragmentShader,
        createProgram,
        linkProgram,
        validateProgram,
        createStaticVertexBuffer,
        createStaticIndexBuffer,
        getNumChannels,
        createTexture,
        validateTextureSize,
        createFramebuffer,
        bindVertexBufferToProgramAttribute,
        bindTextureUnit,
        unbindTextureUnit,
        getProgramUniformLocationOrThrow,
        getProgramUniformLocation,
        bindTextureToProgramUniformSampler,
        bindCanvasToFramebuffer,
        bindColorTextureToFramebuffer,
        unbindColorTextureFromFramebuffer,
        validateFramebuffer,
        getFramebufferErrorMessage,
        getBatchDim,
        getRowsCols,
        getShapeAs3D,
        getTextureShapeFromLogicalShape,
        isReshapeFree,
        getWebGLMaxTextureSize,
        resetMaxTextureSize,
        resetMaxTexturesInShader,
        getMaxTexturesInShader,
        getWebGLDisjointQueryTimerVersion,
        hasExtension,
        isWebGLVersionEnabled,
        isCapableOfRenderingToFloatTexture,
        isDownloadFloatTextureEnabled,
        isWebGLFenceEnabled,
        assertNotComplex
    }
}
export { webgl_util }

export declare interface WebGLMemoryInfo extends MemoryInfo_2 {
    numBytesInGPU: number;
    numBytesInGPUAllocated: number;
    numBytesInGPUFree: number;
    unreliable: boolean;
}

export declare interface WebGLTimingInfo extends TimingInfo_2 {
    uploadWaitMs: number;
    downloadWaitMs: number;
}

/**
 * Group to which the weight belongs.
 *
 * - 'optimizer': Weight from a stateful optimizer.
 */
declare type WeightGroup = 'model' | 'optimizer';

/**
 * Creates a function, which reads a weights manifest JSON configuration,
 * fetches the weight files using the specified function and returns them as
 * `Tensor`s.
 *
 * ```js
 * // example for creating a nodejs weight loader, which reads the weight files
 * // from disk using fs.readFileSync
 *
 * import * as fs from 'fs'
 *
 * const fetchWeightsFromDisk = (filePaths: string[]) =>
 *   filePaths.map(filePath => fs.readFileSync(filePath).buffer)
 *
 * const loadWeights = tf.io.weightsLoaderFactory(fetchWeightsFromDisk)
 *
 * const manifest = JSON.parse(
 *   fs.readFileSync('./my_model-weights_manifest').toString()
 * )
 * const weightMap = await loadWeights(manifest, './')
 * ```
 * @param fetchWeightsFunction The function used for fetching the weight files.
 * @returns Weight loading function.
 */
declare function weightsLoaderFactory(fetchWeightsFunction: (fetchUrls: string[]) => Promise<ArrayBuffer[]>): (manifest: WeightsManifestConfig, filePathPrefix?: string, weightNames?: string[]) => Promise<NamedTensorMap>;

/**
 * A weight manifest.
 *
 * The weight manifest consists of an ordered list of weight-manifest groups.
 * Each weight-manifest group ("group" for short hereafter) consists of a
 * number of weight values stored in a number of paths.
 * See the documentation of `WeightManifestGroupConfig` below for more details.
 */
declare type WeightsManifestConfig = WeightsManifestGroupConfig[];

/**
 * An entry in the weight manifest.
 *
 * The entry contains specification of a weight.
 */
declare interface WeightsManifestEntry {
    /**
     * Name of the weight, e.g., 'Dense_1/bias'
     */
    name: string;
    /**
     * Shape of the weight.
     */
    shape: number[];
    /**
     * Data type of the weight.
     */
    dtype: 'float32' | 'int32' | 'bool' | 'string' | 'complex64';
    /**
     * Type of the weight.
     *
     * Optional.
     *
     * The value 'optimizer' indicates the weight belongs to an optimizer
     * (i.e., used only during model training and not during inference).
     */
    group?: WeightGroup;
    /**
     * Information for dequantization of the weight.
     */
    quantization?: {
        scale?: number;
        min?: number;
        dtype: 'uint16' | 'uint8' | 'float16';
    };
}

/**
 * A weight-manifest group.
 *
 * Consists of an ordered list of weight values encoded in binary format,
 * stored in an ordered list of paths.
 */
declare interface WeightsManifestGroupConfig {
    /**
     * An ordered list of paths.
     *
     * Paths are intentionally abstract in order to be general. For example, they
     * can be relative URL paths or relative paths on the file system.
     */
    paths: string[];
    /**
     * Specifications of the weights stored in the paths.
     */
    weights: WeightsManifestEntry[];
}

export declare const where: typeof where_;

/**
 * Returns the elements, either `a` or `b` depending on the `condition`.
 *
 * If the condition is true, select from `a`, otherwise select from `b`.
 *
 * ```js
 * const cond = tf.tensor1d([false, false, true], 'bool');
 * const a = tf.tensor1d([1 , 2, 3]);
 * const b = tf.tensor1d([-1, -2, -3]);
 *
 * a.where(cond, b).print();
 * ```
 *
 * @param condition The input condition. Must be of dtype bool.
 * @param a If `condition` is rank 1, `a` may have a higher rank but
 *     its first dimension must match the size of `condition`.
 * @param b A tensor with the same dtype as `a` and with shape that is
 *     compatible with `a`.
 * @return A tensor with same dtype as `a` and `b`, and shape that is
 *     broadcastable from `a` and `b`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function where_<T extends Tensor>(condition: Tensor | TensorLike, a: T | TensorLike, b: T | TensorLike): T;

export declare const whereAsync: typeof whereAsync_;

/**
 * Returns the coordinates of true elements of condition.
 *
 * The coordinates are returned in a 2-D tensor where the first dimension (rows)
 * represents the number of true elements, and the second dimension (columns)
 * represents the coordinates of the true elements. Keep in mind, the shape of
 * the output tensor can vary depending on how many true values there are in
 * input. Indices are output in row-major order. The resulting tensor has the
 * shape `[numTrueElems, condition.rank]`.
 *
 * This is analogous to calling the python `tf.where(cond)` without an x or y.
 *
 * ```js
 * const cond = tf.tensor1d([false, false, true], 'bool');
 * const result = await tf.whereAsync(cond);
 * result.print();
 * ```
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
declare function whereAsync_(condition: Tensor | TensorLike): Promise<Tensor2D>;

declare function whereImpl(condShape: number[], condVals: TypedArray): Tensor2D;

/**
 * Creates an IOHandler that passes saved model artifacts to a callback.
 *
 * ```js
 * function handleSave(artifacts) {
 *   // ... do something with the artifacts ...
 *   return {modelArtifactsInfo: {...}, ...};
 * }
 *
 * const saveResult = model.save(tf.io.withSaveHandler(handleSave));
 * ```
 *
 * @param saveHandler A function that accepts a `ModelArtifacts` and returns a
 *     `SaveResult`.
 */
declare function withSaveHandler(saveHandler: (artifacts: ModelArtifacts) => Promise<SaveResult>): IOHandler;

/**
 * Abstract wrapper base class.
 *
 * Wrappers take another layer and augment it in various ways.
 * Do not use this class as a layer, it is only an abstract base class.
 * Two usable wrappers are the `TimeDistributed` and `Bidirectional` wrappers.
 */
declare abstract class Wrapper extends Layer {
    readonly layer: Layer;
    constructor(args: WrapperLayerArgs);
    build(inputShape: Shape | Shape[]): void;
    get trainable(): boolean;
    set trainable(value: boolean);
    get trainableWeights(): LayerVariable[];
    get nonTrainableWeights(): LayerVariable[];
    get updates(): Tensor_2[];
    get losses(): RegularizerFn[];
    getWeights(): Tensor_2[];
    setWeights(weights: Tensor_2[]): void;
    getConfig(): serialization_2.ConfigDict;
    setFastWeightInitDuringBuild(value: boolean): void;
    /** @nocollapse */
    static fromConfig<T extends serialization_2.Serializable>(cls: serialization_2.SerializableConstructor<T>, config: serialization_2.ConfigDict, customObjects?: serialization_2.ConfigDict): T;
}

declare interface WrapperLayerArgs extends LayerArgs {
    /**
     * The layer to be wrapped.
     */
    layer: Layer;
}

declare type YieldEveryOptions = 'auto' | 'batch' | 'epoch' | 'never' | number;

declare class ZeroPadding2D extends Layer {
    /** @nocollapse */
    static className: string;
    readonly dataFormat: DataFormat;
    readonly padding: [[number, number], [number, number]];
    constructor(args?: ZeroPadding2DLayerArgs);
    computeOutputShape(inputShape: Shape | Shape[]): Shape | Shape[];
    call(inputs: Tensor_2 | Tensor_2[], kwargs: Kwargs): Tensor_2 | Tensor_2[];
    getConfig(): serialization_2.ConfigDict;
}

/**
 * Zero-padding layer for 2D input (e.g., image).
 *
 * This layer can add rows and columns of zeros
 * at the top, bottom, left and right side of an image tensor.
 *
 * Input shape:
 *   4D tensor with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, rows, cols, channels]`
 *   - If `data_format` is `"channels_first"`:
 *     `[batch, channels, rows, cols]`.
 *
 * Output shape:
 *   4D with shape:
 *   - If `dataFormat` is `"channelsLast"`:
 *     `[batch, paddedRows, paddedCols, channels]`
 *    - If `dataFormat` is `"channelsFirst"`:
 *     `[batch, channels, paddedRows, paddedCols]`.
 *
 * @doc {heading: 'Layers', subheading: 'Padding', namespace: 'layers'}
 */
declare function zeroPadding2d(args?: ZeroPadding2DLayerArgs): ZeroPadding2D;

declare interface ZeroPadding2DLayerArgs extends LayerArgs {
    /**
     * Integer, or `Array` of 2 integers, or `Array` of 2 `Array`s, each of
     * which is an `Array` of 2 integers.
     * - If integer, the same symmetric padding is applied to width and height.
     * - If Array` of 2 integers, interpreted as two different symmetric values
     *   for height and width:
     *   `[symmetricHeightPad, symmetricWidthPad]`.
     * - If `Array` of 2 `Array`s, interpreted as:
     *   `[[topPad, bottomPad], [leftPad, rightPad]]`.
     */
    padding?: number | [number, number] | [[number, number], [number, number]];
    /**
     * One of `'channelsLast'` (default) and `'channelsFirst'`.
     *
     * The ordering of the dimensions in the inputs.
     * `channelsLast` corresponds to inputs with shape
     * `[batch, height, width, channels]` while `channelsFirst`
     * corresponds to inputs with shape
     * `[batch, channels, height, width]`.
     */
    dataFormat?: DataFormat;
}

declare class Zeros extends Initializer {
    /** @nocollapse */
    static className: string;
    apply(shape: Shape, dtype?: DataType_2): Tensor_2;
}

/**
 * Creates a `tf.Tensor` with all elements set to 0.
 *
 * ```js
 * tf.zeros([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param dtype The type of an element in the resulting tensor. Can
 *     be 'float32', 'int32' or 'bool'. Defaults to 'float'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
export declare function zeros<R extends Rank>(shape: ShapeMap[R], dtype?: DataType): Tensor<R>;

/**
 * Initializer that generates tensors initialized to 0.
 *
 * @doc {heading: 'Initializers', namespace: 'initializers'}
 */
declare function zeros_2(): Zeros;

export declare const ZerosLike = "ZerosLike";

export declare const zerosLike: typeof zerosLike_;

/**
 * Creates a `tf.Tensor` with all elements set to 0 with the same shape as the
 * given tensor.
 *
 * ```js
 * const x = tf.tensor([1, 2]);
 * tf.zerosLike(x).print();
 * ```
 *
 * @param x The tensor of required shape.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function zerosLike_<T extends Tensor>(x: T | TensorLike): T;

export declare type ZerosLikeInputs = UnaryInputs;

/**
 * Create a `Dataset` by zipping together an array, dict, or nested
 * structure of `Dataset`s (and perhaps additional constants).
 * The underlying datasets must provide elements in a consistent order such that
 * they correspond.
 *
 * The number of elements in the resulting dataset is the same as the size of
 * the smallest dataset in datasets.
 *
 * The nested structure of the `datasets` argument determines the
 * structure of elements in the resulting iterator.
 *
 * Note this means that, given an array of two datasets that produce dict
 * elements, the result is a dataset that produces elements that are arrays
 * of two dicts:
 *
 * Zip an array of datasets:
 * ```js
 * console.log('Zip two datasets of objects:');
 * const ds1 = tf.data.array([{a: 1}, {a: 2}, {a: 3}]);
 * const ds2 = tf.data.array([{b: 4}, {b: 5}, {b: 6}]);
 * const ds3 = tf.data.zip([ds1, ds2]);
 * await ds3.forEachAsync(e => console.log(JSON.stringify(e)));
 *
 * // If the goal is to merge the dicts in order to produce elements like
 * // {a: ..., b: ...}, this requires a second step such as:
 * console.log('Merge the objects:');
 * const ds4 = ds3.map(x => {return {a: x[0].a, b: x[1].b}});
 * await ds4.forEachAsync(e => console.log(e));
 * ```
 *
 * Zip a dict of datasets:
 * ```js
 * const a = tf.data.array([{a: 1}, {a: 2}, {a: 3}]);
 * const b = tf.data.array([{b: 4}, {b: 5}, {b: 6}]);
 * const c = tf.data.zip({c: a, d: b});
 * await c.forEachAsync(e => console.log(JSON.stringify(e)));
 * ```
 *
 * @doc {heading: 'Data', subheading: 'Operations', namespace: 'data'}
 */
declare function zip<O extends tf.TensorContainer>(datasets: DatasetContainer): Dataset<O>;

export { }
