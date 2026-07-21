import { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import Field from "@/components/common/form/Field";
import Input from "@/components/common/form/Input";
import Label from "@/components/common/form/Label";
import Textarea from "@/components/common/form/Textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/common/form/Select";
import { Save } from "lucide-react";

const defaultProduct = {
    product_name: "",
    sku: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    status: "active",
    seller_name: "",
    note: "",
};

/**
 * Product form component.
 *
 * Provides a form for creating or editing
 * products with validation using React Hook Form.
 */
const ProductForm = ({ defaultValues = defaultProduct, loading, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm(defaultValues);

    // Reset form values when the provided defaults change
    useEffect(() => {
        reset(defaultValues);
    }, [reset, defaultValues]);

    return (
        <div className="overflow-y-auto h-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col h-full">
                {/* Form fields */}
                <div className="p-5 space-y-5 flex-1">
                    {/* Product name */}
                    <Field>
                        <Label htmlFor="product_name">
                            نام محصول <span className="text-danger">*</span>
                        </Label>

                        <Input
                            id="product_name"
                            placeholder="مثال: آیفون 16 پرو"
                            radius="full"
                            className="text-sm"
                            {...register("product_name", {
                                required: "نام محصول الزامی است",
                            })}
                        />

                        {errors.product_name && (
                            <p className="text-xs text-danger">
                                {errors.product_name.message}
                            </p>
                        )}
                    </Field>

                    {/* SKU and brand */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field>
                            <Label htmlFor="sku">
                                SKU<span className="text-danger">*</span>
                            </Label>

                            <Input
                                id="sku"
                                placeholder="مثال: SMS-S24-256"
                                radius="full"
                                className="text-sm"
                                {...register("sku", {
                                    required: "SKU الزامی است",
                                })}
                            />

                            {errors.sku && (
                                <p className="text-xs text-destructive">
                                    {errors.sku.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <Label htmlFor="brand">برند</Label>

                            <Input
                                id="brand"
                                placeholder="مثال: Apple"
                                radius="full"
                                className="text-sm"
                                {...register("brand")}
                            />
                        </Field>
                    </div>

                    {/* Product price */}
                    <Field>
                        <Label htmlFor="price">
                            قیمت <span className="text-danger">*</span>
                        </Label>

                        <Input
                            type="number"
                            id="price"
                            placeholder="0"
                            radius="full"
                            className="text-sm"
                            {...register("price", {
                                required: "قیمت الزامی است",
                                valueAsNumber: true,
                            })}
                        />

                        {errors.price && (
                            <p className="text-xs text-danger">
                                {errors.price.message}
                            </p>
                        )}
                    </Field>

                    {/* Product stock */}
                    <Field>
                        <Label htmlFor="stock">موجودی</Label>

                        <Input
                            type="number"
                            id="stock"
                            placeholder="0"
                            radius="full"
                            className="text-sm"
                            {...register("stock", { valueAsNumber: true })}
                        />
                    </Field>

                    {/* Category and status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field>
                            <Label>دسته‌بندی</Label>

                            <Select
                                value={watch("category") ?? ""}
                                onValueChange={(value) =>
                                    setValue("category", value, {
                                        shouldValidate: true,
                                    })
                                }
                                dir="rtl">
                                <SelectTrigger className="rounded-full">
                                    <SelectValue placeholder="انتخاب دسته‌بندی" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="موبایل">
                                        موبایل
                                    </SelectItem>
                                    <SelectItem value="لپ تاپ">
                                        لپ تاپ
                                    </SelectItem>
                                    <SelectItem value="لوازم جانبی">
                                        لوازم جانبی
                                    </SelectItem>
                                    <SelectItem value="مانیتور">
                                        مانیتور
                                    </SelectItem>
                                    <SelectItem value="گیمینگ">
                                        گیمینگ
                                    </SelectItem>
                                    <SelectItem value="قطعات کامپیوتر">
                                        قطعات کامپیوتر
                                    </SelectItem>
                                    <SelectItem value="پوشیدنی">
                                        پوشیدنی
                                    </SelectItem>
                                    <SelectItem value="تبلت">تبلت</SelectItem>
                                    <SelectItem value="ذخیره سازی">
                                        ذخیره سازی
                                    </SelectItem>
                                    <SelectItem value="صوتی">صوتی</SelectItem>
                                    <SelectItem value="دوربین">
                                        دوربین
                                    </SelectItem>
                                    <SelectItem value="لوازم خانگی">
                                        لوازم خانگی
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.category && (
                                <p className="text-xs text-destructive">
                                    {errors.category.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <Label>وضعیت</Label>

                            <Select
                                value={watch("status") ?? "active"}
                                onValueChange={(value) =>
                                    setValue("status", value)
                                }
                                dir="rtl">
                                <SelectTrigger className="rounded-full">
                                    <SelectValue />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="active">فعال</SelectItem>
                                    <SelectItem value="inactive">
                                        غیرفعال
                                    </SelectItem>
                                    <SelectItem value="low_stock">
                                        موجودی کم
                                    </SelectItem>
                                    <SelectItem value="out_of_stock">
                                        اتمام موجودی
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                    </div>

                    {/* Seller */}
                    <Field>
                        <Label htmlFor="seller_name">فروشنده</Label>

                        <Input
                            id="seller_name"
                            radius="full"
                            className="text-sm"
                            placeholder="مثال: دیجی‌کالا"
                            {...register("seller_name")}
                        />
                    </Field>

                    {/* Additional notes */}
                    <Field>
                        <Label htmlFor="note">یادداشت</Label>

                        <Textarea
                            id="note"
                            rows={4}
                            className="text-sm"
                            placeholder="توضیحات..."
                            {...register("note")}
                        />
                    </Field>
                </div>

                {/* Form actions */}
                <div className="p-5 border-t border-border">
                    <Button
                        type="submit"
                        radius="full"
                        className="text-sm"
                        disabled={loading}>
                        <Save size={16} />
                        ذخیره محصول
                    </Button>
                </div>
            </form>
        </div>
    );
};

ProductForm.propTypes = {
    defaultValues: PropTypes.shape({
        product_name: PropTypes.string,
        sku: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        category: PropTypes.string,
        status: PropTypes.oneOf([
            "active",
            "inactive",
            "low_stock",
            "out_of_stock",
        ]),
        seller_name: PropTypes.string,
        note: PropTypes.string,
    }),
    loading: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
