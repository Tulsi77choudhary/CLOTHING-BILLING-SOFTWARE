package com.example.Clothing_Billing_Software.Service;
import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.read.listener.PageReadListener;
import com.example.Clothing_Billing_Software.Entity.Product;
import com.example.Clothing_Billing_Software.Repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductExcelServiceImpl implements ProductExcelService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void importProductsFromExcel(MultipartFile file) throws IOException {
        List<Product> products = new ArrayList<>();

        // EasyExcel automatically reads the file row-by-row smoothly
        EasyExcel.read(file.getInputStream(), Product.class, new PageReadListener<Product>(dataList -> {
            for (Product product : dataList) {
                products.add(product);
            }
        })).sheet().doRead();

        // Save everything to the database in bulk
        if (!products.isEmpty()) {
            productRepository.saveAll(products);
        }
    }

    @Override
    public ByteArrayInputStream exportProductsToExcel() throws IOException {
        List<Product> products = productRepository.findAll();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        // EasyExcel handles writing with just one clean line
        EasyExcel.write(out, Product.class).sheet("Products Catalogue").doWrite(products);

        return new ByteArrayInputStream(out.toByteArray());
    }
}