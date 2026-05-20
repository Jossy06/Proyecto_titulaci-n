import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CalculatorModule } from './calculator/calculator.module';
import { TransactionsModule } from './transactions/transactions.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServiceMaterialsModule } from './service-materials/service-materials.module';
import { MaterialsModule } from './materials/materials.module';

@Module({
 imports: [
   ConfigModule.forRoot({
     isGlobal:true,
   }),

   TypeOrmModule.forRoot({
     type:'postgres',
     host:process.env.DB_HOST,
     port:Number(process.env.DB_PORT),
     username:process.env.DB_USERNAME,
     password:process.env.DB_PASSWORD,
     database:process.env.DB_NAME,

     autoLoadEntities:true,
     synchronize:true,
   }),

   UsersModule,

   AuthModule,

   ServicesModule,

   ExpensesModule,

   CalculatorModule,

   TransactionsModule,

   DashboardModule,

   ServiceMaterialsModule,

   MaterialsModule,
 ],
})

export class AppModule {}
